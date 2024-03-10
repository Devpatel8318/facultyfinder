import React, { Component } from 'react';

import { connect } from 'react-redux';

import Loader from './components/Loader';
import Location from './components/Location';
import HomeButton from './components/HomeButton';
import FacultySelector from './components/FacultySelector';
import {
    fetchAllFacultyData,
    fetchAllTimeTableData,
    fetchAttendance,
    fetchOneFacultyLocation,
    getFacultyTimeTable,
} from './actions/dashboardActions';

class Dashboard extends Component {
    componentDidMount() {
        this.props.getTimeTables();
        this.props.getAllFacultyData();
        this.props.getAttendance();
    }

    componentDidUpdate(prevProps) {
        const {
            selectedFacultyShortName,
            findOneFacultyLocation,
            fetchFacultyTimeTable,
        } = this.props;
        if (selectedFacultyShortName !== prevProps.selectedFacultyShortName) {
            if (selectedFacultyShortName) {
                findOneFacultyLocation();
                fetchFacultyTimeTable();
            }
        }
    }

    render() {
        const {
            error,
            loading,
            timeTableData_status,
            facultyData_status,
            attendance_status,
            selectedFacultyShortName,
        } = this.props;

        if (error) {
            return <div>ERROR</div>;
        }

        return (
            <>
                {loading && <Loader />}
                {!loading &&
                    facultyData_status === 'success' &&
                    timeTableData_status === 'success' &&
                    attendance_status === 'success' && (
                        <div className="h-screen w-screen flex items-center justify-center overflow-hidden">
                            {selectedFacultyShortName && <HomeButton />}
                            <div>
                                {selectedFacultyShortName ? (
                                    <Location />
                                ) : (
                                    <FacultySelector />
                                )}
                            </div>
                        </div>
                    )}
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    error: state.dashboard.error,
    timeTableData_status: state.dashboard.timeTableData_status,
    facultyData_status: state.dashboard.facultyData_status,
    attendance_status: state.dashboard.attendance_status,
    loading: state.dashboard.loading,
    selectedFacultyShortName: state.dashboard.selectedFacultyShortName,
});

const mapDispatchToProps = (dispatch) => ({
    getTimeTables: () => {
        dispatch(fetchAllTimeTableData());
    },
    getAllFacultyData: () => {
        dispatch(fetchAllFacultyData());
    },
    getAttendance: () => {
        dispatch(fetchAttendance());
    },
    findOneFacultyLocation: (facultyData) => {
        dispatch(fetchOneFacultyLocation(facultyData));
    },
    fetchFacultyTimeTable: () => {
        dispatch(getFacultyTimeTable());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
