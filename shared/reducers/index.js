import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import userReducer from './userReducer';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
    form: formReducer,
    user: userReducer,
    auth: loginReducer
});

export default rootReducer;