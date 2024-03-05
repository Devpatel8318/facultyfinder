import formatTimeTableData from '../../../utils/formatTimeTableData';
import { data } from '../../../data/db';
import formatFacultyData from '../../../utils/formatFacultyData';

const initialState = {
    loading: false,
    error: null,
    selectedFacultyName: '',
};

const dashboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_ALL_FACULTY_TIMETABLE_DATA_FULFILLED': {
            const response = action.payload;
            return {
                ...state,
                timeTableData_status: 'success',
                timeTable: formatTimeTableData(response),
                loading: false,
            };
        }
        case 'FETCH_ALL_FACULTY_TIMETABLE_DATA_PENDING':
            return {
                ...state,
                loading: true,
                timeTableData_status: 'pending',
            };
        case 'FETCH_ALL_FACULTY_TIMETABLE_DATA_REJECTED':
            return {
                ...state,
                error: action.payload,
                loading: false,
                timeTableData_status: 'failed',
            };
        case 'FETCH_ALL_FACULTY_DATA_FULFILLED': {
            const response = action.payload;
            console.log({ response: formatFacultyData(response) });
            return {
                ...state,
                facultuData_status: 'success',
                facultyData: formatFacultyData(response),
                loading: false,
            };
        }
        case 'FETCH_ALL_FACULTY_DATA_PENDING':
            return {
                ...state,
                loading: true,
                facultuData_status: 'pending',
            };
        case 'FETCH_ALL_FACULTY_DATA_REJECTED':
            return {
                ...state,
                error: action.payload,
                loading: false,
                facultuData_status: 'failed',
            };
        case 'SELECT_FACULTY':
            return {
                ...state,
                selectedFacultyName: action.payload,
            };
        case 'SHOW_LOCATION':
            // const facultyData = data;
            let response = { ...state };

            console.log({ state });
            if (state.selectedFacultyName) {
                const foundUser = state.facultyData.find(
                    (d) => d['Full Name'] === state.selectedFacultyName
                );
                if (foundUser) {
                    response = {
                        ...state,
                        floor: foundUser.floor,
                        seating: foundUser['Seating Location'],
                    };
                }
            }
            return response;
        case 'GET_FACULTY_TIME_TABLE':
            console.log(state.selectedFacultyName);
            console.log(state.timeTable);
            return state;
        default:
            return state;
    }
};

export default dashboardReducer;
