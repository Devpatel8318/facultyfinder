import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectFaculty } from '../actions/dashboardActions';

class HomeButton extends Component {
    handleClick = () => {
        const { selectFacultyName } = this.props;
        selectFacultyName('');
    };

    render() {
        return (
            <button
                className="absolute shrink left-0 top-0 m-4 py-2 px-3 border-2 rounded-md"
                onClick={this.handleClick}
            >
                Home
            </button>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    selectFacultyName: (shortName) => {
        dispatch(selectFaculty(shortName));
    },
});

export default connect(null, mapDispatchToProps)(HomeButton);
