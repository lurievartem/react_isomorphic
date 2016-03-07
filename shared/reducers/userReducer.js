import { GET_USERS, SAVE_USER} from '../actions/UserActions';

export default function userReducer(state = {}, action) {
    switch (action.type){
        case GET_USERS:
            return Object.assign({}, state, action.res.data);
        case SAVE_USER:
            return Object.assign({}, state);
        case SAVE_USER + '_SUCCESS':
            return Object.assign({}, state, { isSave: true });
        case SAVE_USER + '_FAILURE':
            return Object.assign({}, state, { isSave: false });
        default:
            return state;
    }
}