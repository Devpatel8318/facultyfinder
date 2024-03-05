import { combineReducers } from 'redux';

import dashboardReducer from '../../Pages/dashboard/reducers/dashboardReducer';

export default combineReducers({
    dashboard: dashboardReducer,
});
