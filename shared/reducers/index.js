import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as reduxAsyncConnect } from 'redux-async-connect'
import modalReducer from './modalReducer';
import userReducer from './userReducer';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
    form: formReducer,
    modal: modalReducer,
    user: userReducer,
    auth: loginReducer,
    reduxAsyncConnect: reduxAsyncConnect
});

export default rootReducer;