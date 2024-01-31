import React, { useEffect, useState } from 'react'
import { facultyNames, data } from './data/db'

function App() {
    const [selectedFaculty, setSelectedFaculty] = useState('')
    const [location, setLocation] = useState(null)

    const handleFacultyChange = (event) => {
        setSelectedFaculty(event.target.value)
    }

    useEffect(() => {
        if (selectedFaculty) {
            const foundUser = data.find(
                (d) => d['Full Name'] === selectedFaculty
            )
            if (foundUser) {
                setLocation({
                    floor: foundUser.floor,
                    seating: foundUser['Seating Location'],
                })
            }
        }
    }, [selectedFaculty])
    return (
        <div className="h-screen w-screen flex items-center justify-center overflow-hidden">
            {selectedFaculty && (
                <button
                    className="absolute shrink left-0 top-0 m-4 py-2 px-3 border-2 rounded-md"
                    onClick={() => setSelectedFaculty('')}
                >
                    Home
                </button>
            )}
            <div className="-mt-32 md:-mt-40">
                {selectedFaculty ? (
                    <div className="flex flex-col justify-center items-center gap-4 text-center">
                        <div className="text-2xl md:text-5xl font-medium mb-4">
                            {selectedFaculty}
                        </div>
                        <div>
                            <div className="text-2xl md:text-3xl mb-2">
                                Floor : {location?.floor}
                            </div>
                            <div className="text-xl md:text-3xl ">
                                {location?.seating}
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
                            value={selectedFaculty}
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
    )
}

export default App
