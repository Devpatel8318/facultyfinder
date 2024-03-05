const formatFacultyData = (rawData) => {
    const json = JSON.parse(
        rawData.data.replace(
            /.*google.visualization.Query.setResponse\({(.*?)}\);?/s,
            '{$1}'
        )
    );

    const headings = json.table.cols.map((item) => item.label);

    let data = json.table.rows.map((item) => {
        let row = {};
        item.c.forEach((cell, idx) => {
            row[headings[idx]] = cell?.v ?? null;
        });
        return row;
    });

    return data;
};

export default formatFacultyData;
