import callAPI from '../../../utils/callAPI';
import { SHEET_DATA_URL, FACULTY_DATA_URL } from '../../../utils/API_URL.js';

export const fetchAllTimeTableData = () => ({
    type: 'FETCH_ALL_FACULTY_TIMETABLE_DATA',
    payload: callAPI(SHEET_DATA_URL, 'get'),
});
export const fetchAllFacultyData = () => ({
    type: 'FETCH_ALL_FACULTY_DATA',
    payload: callAPI(FACULTY_DATA_URL, 'get'),
});
export const selectFaculty = (shortName) => ({
    type: 'SELECT_FACULTY',
    payload: shortName,
});
export const fetchOneFacultyLocation = () => ({
    type: 'SHOW_LOCATION',
});
export const getFacultyTimeTable = () => ({
    type: 'GET_FACULTY_TIME_TABLE',
});
