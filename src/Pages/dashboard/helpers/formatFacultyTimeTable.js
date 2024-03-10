const formatFacultyTimeTable = (data) => {
    if (data) {
        const groupedData = data.reduce(
            (acc, curr) => {
                if (curr.key[0] === acc.current[0]) {
                    return {
                        ...acc,
                        array: [...acc.array, curr],
                    };
                } else {
                    return {
                        current: curr.key[0],
                        array: [curr],
                        ans: [...acc.ans, acc.array],
                    };
                }
            },
            { current: data[0].key, array: [], ans: [] }
        );
        return [...groupedData.ans, groupedData.array];
    } else {
        return [];
    }
};
export default formatFacultyTimeTable;
