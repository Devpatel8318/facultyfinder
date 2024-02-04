import callAPI from '../../utils/callAPI.js';
import { SHEET_DATA_URL } from '../../utils/API_URL.js';

export const fetchTimeTableData = () => ({
    type: 'FETCH_FACULTY_TIMETABLE_DATA',
    payload: callAPI(SHEET_DATA_URL, 'get'),
});
export const selectFaculty = (shortName) => ({
    type: 'SELECT_FACULTY',
    payload: shortName,
});
export const findLocation = (facultyData) => ({
    type: 'SHOW_LOCATION',
    payload: facultyData,
});
