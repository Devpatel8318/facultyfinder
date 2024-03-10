const formatAttendanceData = (rawData) => {
    if (rawData) {
        const json = JSON.parse(
            rawData?.data.replace(
                /.*google.visualization.Query.setResponse\({(.*?)}\);?/s,
                '{$1}'
            )
        );
        return json?.table?.rows.map((item) => item?.c && item.c[0]?.v);
    } else {
        return [];
    }
};
export default formatAttendanceData;
