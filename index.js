const axios = require('axios');

const facultyData_spreadSheetId =
    '1cRTWYSVxaL-3_o8rcy4VLuYk6NpGoZM4kLACX9JYJss';

const FACULTY_DATA_URL = `https://docs.google.com/spreadsheets/d/${facultyData_spreadSheetId}/gviz/tq?tqx=out:json`;

// const spreadsheetId = '1-zwRWN3gaSpqXT5CWEktW1ZOXHjQ1sLXZoJZndfTQzs';

async function getData() {
    const { data: result } = await axios.get(FACULTY_DATA_URL);
    console.log(result);
    const json = JSON.parse(
        result.replace(
            /.*google.visualization.Query.setResponse\({(.*?)}\);?/s,
            '{$1}'
        )
    );
    console.log(json);

    const headings = json.table.cols.map((item) => item.label);

    let data = json.table.rows.map((item) => {
        let row = {};
        item.c.forEach((cell, idx) => {
            row[headings[idx]] = cell?.v ?? null;
        });
        return row;
    });

    return data;
}

getData().then((data) => {
    console.log(data);
});

// // const callAPI = (
// //     apiURL,
// //     apiMethod,
// //     apiData = null,
// //     baseAPIURL,
// //     contentType = 'application/json'
// // ) => {
// //     // let headers = {
// //     //     'Content-Type': contentType,
// //     // };
// //     return new Promise((resolve, reject) => {
// //         axios({
// //             url: apiURL,
// //             method: apiMethod,
// //             data: apiData,
// //             // headers,
// //         })
// //             .then((response) => {
// //                 resolve(response);
// //             })
// //             .catch((err) => {
// //                 reject(err.response);
// //             });
// //     });
// // };

// // callAPI(
// //     `https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=out:json`
// // )
// //     .then((data) => {})
// //     .catch((err) => console.log(err));

// const data = [
//     {
//         shortName: 'MPB',
//         M1: 301,
//         M2: 101,
//         M3: 306,
//         M4: 204,
//         M5: 'Lab B2',
//         M6: 'Lab B2',
//         T1: 301,
//         T2: 101,
//         T3: 306,
//         T4: 204,
//         T5: 'Lab B2',
//         T6: 'Lab B2',
//     },
//     {
//         shortName: 'SJM',
//         M1: 302,
//         M2: 102,
//         M3: 403,
//         M4: 402,
//         M5: 'Lab D1',
//         M6: 'Lab D1',
//         T1: 302,
//         T2: 102,
//         T3: 403,
//         T4: 402,
//         T5: 'Lab D1',
//         T6: 'Lab D1',
//     },
// ];

// const formattedData = data.reduce((acc, item) => {
//     const { shortName, ...rest } = item;
//     acc[shortName] = Object.entries(rest).map(([key, value]) => ({
//         key,
//         value,
//     }));
//     return acc;
// }, {});

// console.log(formattedData);
