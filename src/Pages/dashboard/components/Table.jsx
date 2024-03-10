import React, { Component } from 'react';
class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showTodaySchedule: false,
        };
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    }

    handleCheckboxChange() {
        this.setState((prevState) => ({
            showTodaySchedule: !prevState.showTodaySchedule,
        }));
    }

    WeekTimeTable(facultyTimeTable) {
        const newData = Array.from(
            { length: facultyTimeTable[0].length },
            (_, i) => facultyTimeTable.map((day) => day[i].value)
        );

        return (
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-100 ">
                    <tr>
                        <th scope="col" className="px-6 py-3 ">
                            Slot name
                        </th>
                        <th scope="col" className="px-6 py-3 ">
                            Monday
                        </th>
                        <th scope="col" className="px-6 py-3 ">
                            Tuesday
                        </th>
                        <th scope="col" className="px-6 py-3 ">
                            Wednesday
                        </th>
                        <th scope="col" className="px-6 py-3 ">
                            Thursday
                        </th>
                        <th scope="col" className="px-6 py-3 ">
                            Friday
                        </th>
                        <th scope="col" className="px-6 py-3 ">
                            Saturday
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {newData.map((day, index) => (
                        <tr className="bg-white border-b">
                            <th className="text-center">{index + 1}</th>
                            {day.map((slot) => (
                                <td className="px-6 py-4">{slot}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }

    TodayTimeTable(facultyTimeTable) {
        const today = new Date();
        const dayOfWeek = today.getDay();
        const newData = facultyTimeTable[dayOfWeek - 1];
        var daysOfWeek = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
        ];
        return (
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-100 ">
                    <tr>
                        <th scope="col" className="px-6 py-3 ">
                            {daysOfWeek[dayOfWeek]}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {newData?.map((d) => (
                        <tr className="bg-white border-b">
                            <td className="px-6 py-4">{d.value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }

    render() {
        const { facultyTimeTable } = this.props;
        const { showTodaySchedule } = this.state;

        return (
            facultyTimeTable &&
            !!facultyTimeTable.length && (
                <>
                    <label className="inline-flex items-center cursor-pointer mb-2">
                        <input
                            type="checkbox"
                            value=""
                            className="sr-only peer"
                            checked={this.state.isChecked}
                            onChange={this.handleCheckboxChange}
                        />
                        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4   rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        <span className="ms-3 text-sm font-medium text-gray-900 ">
                            Today's Schedule
                        </span>
                    </label>

                    <div className="relative overflow-x-auto">
                        {showTodaySchedule
                            ? this.TodayTimeTable(facultyTimeTable)
                            : this.WeekTimeTable(facultyTimeTable)}
                    </div>
                </>
            )
        );
    }
}

export default Table;
