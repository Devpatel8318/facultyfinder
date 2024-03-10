import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectFaculty } from '../actions/dashboardActions';

class FacultySelector extends Component {
    handleFacultyChange = (event) => {
        this.props.selectFacultyShortName(event.target.value);
    };

    render() {
        const { selectedFacultyName, facultyData: facultiesData } = this.props;
        return (
            <div className="flex flex-col justify-center items-center gap-4">
                <label htmlFor="facultySelect" className="text-4xl md:text-5xl">
                    Select Faculty
                </label>
                <select
                    id="facultySelect"
                    value={selectedFacultyName}
                    onChange={this.handleFacultyChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                    <option value="">Select</option>
                    {facultiesData?.map((facultyData, index) => (
                        <option key={index} value={facultyData['Short name']}>
                            {facultyData['Full Name']}
                        </option>
                    ))}
                </select>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    selectedFacultyName: state.dashboard.selectedFacultyName,
    facultyData: state.dashboard.facultyData,
});

const mapDispatchToProps = (dispatch) => ({
    selectFacultyShortName: (shortName) => {
        dispatch(selectFaculty(shortName));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(FacultySelector);
