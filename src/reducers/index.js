import HomeReducer from './HomeReducer';
import WeeklyReportReducer from './WeeklyReportReducer';
import {combineReducers} from 'redux';

export default combineReducers({
    HomeReducer,
    WeeklyReportReducer
})