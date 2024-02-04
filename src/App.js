import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';

function App() {
    useEffect(() => {
        document.title = 'Faculty Finder';
    }, []);

    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    {/* <Route path="/resultform" element={<ResultForm />} /> */}
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
