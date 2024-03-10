const axios = require('axios');
const { ATTENDANCE_URL } = require('./src/utils/API_URL');

// const facultyData_spreadSheetId =
//     '1cRTWYSVxaL-3_o8rcy4VLuYk6NpGoZM4kLACX9JYJss';

// const FACULTY_DATA_URL = `https://docs.google.com/spreadsheets/d/${facultyData_spreadSheetId}/gviz/tq?tqx=out:json`;

// // const spreadsheetId = '1-zwRWN3gaSpqXT5CWEktW1ZOXHjQ1sLXZoJZndfTQzs';

// async function getData() {
//     const { data: result } = await axios.get(FACULTY_DATA_URL);
//     console.log(result);
//     const json = JSON.parse(
//         result.replace(
//             /.*google.visualization.Query.setResponse\({(.*?)}\);?/s,
//             '{$1}'
//         )
//     );
//     console.log(json);

//     const headings = json.table.cols.map((item) => item.label);

//     let data = json.table.rows.map((item) => {
//         let row = {};
//         item.c.forEach((cell, idx) => {
//             row[headings[idx]] = cell?.v ?? null;
//         });
//         return row;
//     });

//     return data;
// }

// getData().then((data) => {
//     console.log(data);
// });
const url = ATTENDANCE_URL;
async function getData() {
    const { data: result } = await axios.get(url);
    const json = JSON.parse(
        result.replace(
            /.*google.visualization.Query.setResponse\({(.*?)}\);?/s,
            '{$1}'
        )
    );
    return json?.table?.rows.map((item) => item?.c && item.c[0]?.v);
}

getData().then((data) => {
    console.log(data);
});
