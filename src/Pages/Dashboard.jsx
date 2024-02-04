import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { facultyNames, data } from '../data/db';
import {
    fetchTimeTableData,
    selectFaculty,
    findLocation,
} from '../redux/actions/dashboardActions';

function Dashboard(props) {
    const {
        timeTable,
        error,
        loading,
        selectedFacultyName,
        floor,
        seating,
        fetchTimeTable,
        selectFacultyName,
        findLocation,
    } = props;

    useEffect(() => {
        fetchTimeTable();
    }, []);

    // const [location, setLocation] = useState(null);

    const handleFacultyChange = (event) => {
        selectFacultyName(event.target.value);
    };

    useEffect(() => {
        if (selectedFacultyName) {
            findLocation(data);
        }
    }, [selectedFacultyName]);

    if (error) return <div>ERROR</div>;

    return (
        <>
            {loading && (
                <div className="w-scren flex space-x-2 justify-center items-center bg-white h-screen ">
                    <div className="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="h-8 w-8 bg-black rounded-full animate-bounce"></div>
                </div>
            )}
            {!loading && (
                <div className="h-screen w-screen flex items-center justify-center overflow-hidden">
                    {selectedFacultyName && (
                        <button
                            className="absolute shrink left-0 top-0 m-4 py-2 px-3 border-2 rounded-md"
                            onClick={() => selectFacultyName('')}
                        >
                            Home
                        </button>
                    )}
                    <div className="-mt-32 md:-mt-40">
                        {selectedFacultyName ? (
                            <div className="flex flex-col justify-center items-center gap-4 text-center">
                                <div className="text-2xl md:text-5xl font-medium mb-4">
                                    {selectedFacultyName}
                                </div>
                                <div>
                                    <div className="text-2xl md:text-3xl mb-2">
                                        Floor : {floor}
                                    </div>
                                    <div className="text-xl md:text-3xl ">
                                        {seating}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="flex flex-col justify-center items-center gap-4">
                                <label
                                    htmlFor="facultySelect"
                                    className="text-4xl md:text-5xl"
                                >
                                    Select Faculty
                                </label>
                                <select
                                    id="facultySelect"
                                    value={selectedFacultyName}
                                    onChange={handleFacultyChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                >
                                    <option value="">Select</option>
                                    {facultyNames.map((facultyName, index) => (
                                        <option key={index} value={facultyName}>
                                            {facultyName}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}

const mapStateToProps = (state) => ({
    dashboard: state.dashboard,
    timeTable: state.dashboard.timeTable,
    error: state.dashboard.error,
    loading: state.dashboard.loading,
    selectedFacultyName: state.dashboard.selectedFacultyName,
    floor: state.dashboard.floor,
    seating: state.dashboard.seating,
});

const mapDispatchToProps = (dispatch) => ({
    fetchTimeTable: () => {
        dispatch(fetchTimeTableData());
    },
    selectFacultyName: (shortName) => {
        dispatch(selectFaculty(shortName));
    },
    findLocation: (facultyData) => {
        dispatch(findLocation(facultyData));
    },
});
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
