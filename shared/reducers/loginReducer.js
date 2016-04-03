import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT} from '../actions/LoginActions';

export default (state = { isAuthenticated: false }, action) => {
    switch (action.type){
        case LOGIN:
            return Object.assign({}, state);
        case LOGIN_SUCCESS:
            return Object.assign({}, state, { isAuthenticated : true, isSave: true });
        case LOGIN_FAILURE:
            return Object.assign({}, state, { isAuthenticated : false, isSave: false });
        case LOGOUT:
            return Object.assign({}, state, { isAuthenticated: false });
        default:
            return state;
    }
}