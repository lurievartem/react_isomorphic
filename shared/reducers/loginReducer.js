import { LOGIN, LOGOUT} from '../actions/LoginActions';

export default function loginReducer(state = { isAuthenticated: false }, action) {
    switch (action.type){
        case LOGIN:
            return Object.assign({}, state, action.res.data);
        case LOGOUT:
            return Object.assign({}, state);
        default:
            return state;
    }
}