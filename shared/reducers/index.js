import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { reducer as reduxAsyncConnect } from 'redux-async-connect';
import { routerReducer as routing } from 'react-router-redux';
import modal from './modalReducer';
import user from './userReducer';
import auth from './loginReducer';

const rootReducer = combineReducers({
    reduxAsyncConnect,
    form,
    routing,
    modal,
    user,
    auth
});

export default rootReducer;