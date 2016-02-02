import { combineReducers } from 'redux'
import auto from './autoReducer';
import sign from './signReducer';

const rootReducer = combineReducers({
    auto,
    sign
});

export default rootReducer;