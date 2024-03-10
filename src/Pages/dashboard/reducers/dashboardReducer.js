import formatTimeTableData from '../helpers/formatTimeTableData';
import formatFacultyData from '../helpers/formatFacultyData';
import formatAttendanceData from '../helpers/formatAttendanceData';

const initialState = {
    loading: false,
    error: null,
    selectedFacultyShortName: '',
};

const dashboardReducer = (state = initialState, action) => {
    switch (action.type) {
        // time table
        case 'FETCH_ALL_FACULTY_TIMETABLE_DATA_FULFILLED': {
            const response = action.payload;
            return {
                ...state,
                loading: false,
                timeTableData_status: 'success',
                timeTable: formatTimeTableData(response),
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
                loading: false,
                timeTableData_status: 'failed',
                error: action.payload,
            };

        // faculty data
        case 'FETCH_ALL_FACULTY_DATA_FULFILLED': {
            const response = action.payload;
            return {
                ...state,
                loading: false,
                facultyData_status: 'success',
                facultyData: formatFacultyData(response),
            };
        }
        case 'FETCH_ALL_FACULTY_DATA_PENDING':
            return {
                ...state,
                loading: true,
                facultyData_status: 'pending',
            };
        case 'FETCH_ALL_FACULTY_DATA_REJECTED':
            return {
                ...state,
                loading: false,
                facultyData_status: 'failed',
                error: action.payload,
            };

        // attendance
        case 'FETCH_ATTENDANCE_FULFILLED': {
            const response = action.payload;
            return {
                ...state,
                loading: false,
                attendance_status: 'success',
                attendanceData: formatAttendanceData(response),
            };
        }
        case 'FETCH_ATTENDANCE_PENDING':
            return {
                ...state,
                loading: true,
                attendance_status: 'pending',
            };
        case 'FETCH_ATTENDANCE_REJECTED':
            return {
                ...state,
                loading: false,
                attendance_status: 'failed',
                error: action.payload,
            };

        // other non-async reducers
        case 'SELECT_FACULTY': {
            return {
                ...state,
                selectedFacultyShortName: action.payload,
                selectedFacultyDetail: state.facultyData.find(
                    (d) => d['Short name'] === action.payload
                ),
            };
        }
        case 'SHOW_LOCATION':
            let response = { ...state };
            if (state.selectedFacultyDetail) {
                response = {
                    ...state,
                    floor: state.selectedFacultyDetail.Floor,
                    seating: state.selectedFacultyDetail['Seating Location'],
                };
            }
            return response;
        case 'GET_FACULTY_TIME_TABLE':
            return {
                ...state,
                facultyTimeTable:
                    state.timeTable[state.selectedFacultyShortName],
            };
        default:
            return state;
    }
};

export default dashboardReducer;
