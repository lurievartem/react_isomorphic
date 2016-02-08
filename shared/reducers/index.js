import { combineReducers } from 'redux'
import sign from './signReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    sign,
    userReducer
});

export default rootReducer;