const getSpreadSheetUrl = (spreadsheetId) =>
    `https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=out:json`;

const timeTale_spreadSheetId = '1-zwRWN3gaSpqXT5CWEktW1ZOXHjQ1sLXZoJZndfTQzs';
const facultyData_spreadSheetId =
    '1cRTWYSVxaL-3_o8rcy4VLuYk6NpGoZM4kLACX9JYJss';
const attendance_spreadsheetId = '1EoAqK0rL5cJcQw5ax8bN294Yg3qIqNDwe5IWIJAx-r4';

// Instead of using 'export'
module.exports.SHEET_DATA_URL = getSpreadSheetUrl(timeTale_spreadSheetId);
module.exports.FACULTY_DATA_URL = getSpreadSheetUrl(facultyData_spreadSheetId);
module.exports.ATTENDANCE_URL = getSpreadSheetUrl(attendance_spreadsheetId);
