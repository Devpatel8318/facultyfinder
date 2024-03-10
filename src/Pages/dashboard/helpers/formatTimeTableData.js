const formatTimeTableData = (rawData) => {
    const json = JSON.parse(
        rawData?.data?.replace(
            /.*google.visualization.Query.setResponse\({(.*?)}\);?/s,
            '{$1}'
        )
    );

    const headings = json.table.cols.map((item) => item.label);

    const formattedData = json.table.rows
        .map((item) =>
            Object.fromEntries(
                item.c.map((cell, idx) => [headings[idx], cell?.v ?? null])
            )
        )
        .reduce((acc, { shortName, ...rest }) => {
            acc[shortName] = Object.entries(rest).map(([key, value]) => ({
                key,
                value,
            }));
            return acc;
        }, {});

    return formattedData;
};

export default formatTimeTableData;
