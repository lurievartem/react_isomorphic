import { GET_USERS, SAVE_USER, SAVE_USER_SUCCESS, SAVE_USER_FAILURE} from '../actions/UserActions';

export default (state = {}, action) => {
    switch (action.type){
        case GET_USERS:
            return Object.assign({}, state, action.res.data);
        case SAVE_USER:
            return Object.assign({}, state);
        case SAVE_USER_SUCCESS:
            return Object.assign({}, state, { isSave: true });
        case SAVE_USER_FAILURE:
            return Object.assign({}, state, { isSave: false });
        default:
            return state;
    }
}