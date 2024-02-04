import formatTimeTableData from '../../utils/formatTimeTableData';

const initialState = {
    user: {},
    loading: false,
    error: null,
    selectedFacultyName: '',
};

const dashboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_FACULTY_TIMETABLE_DATA_FULFILLED': {
            const response = action.payload;
            return {
                ...state,
                status: 'success',
                timeTable: formatTimeTableData(response),
                loading: false,
            };
        }
        case 'FETCH_FACULTY_TIMETABLE_DATA_PENDING':
            return {
                ...state,
                loading: true,
                status: 'pending',
            };
        case 'FETCH_FACULTY_TIMETABLE_DATA_REJECTED':
            return {
                ...state,
                error: action.payload,
                loading: false,
                status: 'failed',
            };
        case 'SELECT_FACULTY':
            return {
                ...state,
                selectedFacultyName: action.payload,
            };
        case 'SHOW_LOCATION':
            const facultyData = action.payload;
            let response = { ...state };
            if (state.selectedFacultyName) {
                const foundUser = facultyData.find(
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
            console.log(response);
            console.log(state);
            return response;
        default:
            return state;
    }
};

export default dashboardReducer;
