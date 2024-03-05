import React, { Component } from 'react';

import { connect } from 'react-redux';

import Loader from './components/Loader';
import Location from './components/Location';
import HomeButton from './components/HomeButton';
import FacultySelector from './components/FacultySelector';
import {
    fetchAllFacultyData,
    fetchAllTimeTableData,
} from './actions/dashboardActions';

class Dashboard extends Component {
    componentDidMount() {
        this.props.fetchTimeTables();
        this.props.getAllFacultyData();
    }

    render() {
        const {
            error,
            loading,
            timeTableData_status,
            facultuData_status,
            selectedFacultyName,
        } = this.props;

        if (error) {
            return <div>ERROR</div>;
        }

        return (
            <>
                {loading && <Loader />}
                {!loading &&
                    facultuData_status === 'success' &&
                    timeTableData_status === 'success' && (
                        <div className="h-screen w-screen flex items-center justify-center overflow-hidden">
                            {selectedFacultyName && <HomeButton />}
                            <div className="-mt-32 md:-mt-40">
                                {selectedFacultyName ? (
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
    facultuData_status: state.dashboard.facultuData_status,
    loading: state.dashboard.loading,
    selectedFacultyName: state.dashboard.selectedFacultyName,
});

const mapDispatchToProps = (dispatch) => ({
    fetchTimeTables: () => {
        dispatch(fetchAllTimeTableData());
    },
    getAllFacultyData: () => {
        dispatch(fetchAllFacultyData());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
