import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import sign from './signReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    form: formReducer,
    sign,
    userReducer
});

export default rootReducer;