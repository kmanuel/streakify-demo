import { combineReducers } from 'redux';
import userReducer from './userReducer';
import eventReducer from './eventReducer';
import streakReducer from './streakReducer';

export default combineReducers({
    users: userReducer,
    streaks: streakReducer,
    events: eventReducer,
});