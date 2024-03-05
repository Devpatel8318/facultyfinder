import React, { Component } from 'react';
import { connect } from 'react-redux';

class Location extends Component {
    render() {
        const { selectedFacultyName, floor, seating } = this.props;

        return (
            <div className="flex flex-col justify-center items-center gap-4 text-center">
                <div className="text-2xl md:text-5xl font-medium mb-4">
                    {selectedFacultyName}
                </div>
                <div>
                    <div className="text-2xl md:text-3xl mb-2">
                        Floor : {floor}
                    </div>
                    <div className="text-xl md:text-3xl ">{seating}</div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    selectedFacultyName: state.dashboard.selectedFacultyName,
    floor: state.dashboard.floor,
    seating: state.dashboard.seating,
});

export default connect(mapStateToProps)(Location);
