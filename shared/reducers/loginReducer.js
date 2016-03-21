import { LOGIN, LOGOUT} from '../actions/LoginActions';

export default function loginReducer(state = { isAuthenticated: false }, action) {
    switch (action.type){
        case LOGIN:
            return Object.assign({}, state);
        case LOGIN + '_SUCCESS':
            return Object.assign({}, state, { isAuthenticated : true, isSave: true });
        case LOGIN + '_FAILURE':
            console.log();
            return Object.assign({}, state, { isAuthenticated : false, isSave: false });
        case LOGOUT:
            return Object.assign({}, state, { isAuthenticated: false });
        default:
            return state;
    }
}