import React, { Component } from 'react';
import { connect } from 'react-redux';
import formatFacultyTimeTable from '../helpers/formatFacultyTimeTable';
import Table from './Table';
class Location extends Component {
    render() {
        const {
            selectedFacultyDetail,
            floor,
            seating,
            facultyTimeTable,
            attendanceData,
        } = this.props;

        console.log(this.props);

        const isFacultyPresentToday = !!attendanceData.find(
            (d) => d === selectedFacultyDetail['Short name']
        );

        return (
            <div className="flex flex-col justify-center items-center gap-4 text-center">
                <div className="text-2xl md:text-5xl font-medium mb-4">
                    {selectedFacultyDetail['Full Name']}
                </div>
                <div>
                    <div className="text-2xl md:text-3xl mb-2">
                        Floor : {floor}
                    </div>
                    <div className="text-xl md:text-3xl mb-4">{seating}</div>
                    <div>
                        {!isFacultyPresentToday && (
                            <span className="font-medium text-2xl text-red-500 bg-gray-50  rounded-md px-2 py-1">
                                Absent
                            </span>
                        )}
                    </div>
                    {facultyTimeTable && (
                        <div className="mt-8">
                            <Table
                                facultyTimeTable={formatFacultyTimeTable(
                                    facultyTimeTable
                                )}
                            />
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    dashboard: state.dashboard,
    selectedFacultyDetail: state.dashboard.selectedFacultyDetail,
    facultyTimeTable: state.dashboard.facultyTimeTable,
    attendanceData: state.dashboard.attendanceData,
    floor: state.dashboard.floor,
    seating: state.dashboard.seating,
});

export default connect(mapStateToProps)(Location);
