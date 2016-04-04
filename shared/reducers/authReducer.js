import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT} from '../actions/AuthActions';

export default (state = { isAuthenticated: false }, action) => {
    switch (action.type){
        case LOGIN:
            return { ...state, isAuthenticated: false};
        case LOGIN_SUCCESS:
            return { ...state, isAuthenticated: true, isSave: true };
        case LOGIN_FAILURE:
            return { ...state, isAuthenticated: false, isSave: false };
        case LOGOUT:
            return { ...state, isAuthenticated: false};
        default:
            return state;
    }
}