import { GET_USERS, SAVE_USER, SAVE_USER_SUCCESS, SAVE_USER_FAILURE} from '../actions/UserActions';

export default (state = {}, action) => {
    switch (action.type){
        case GET_USERS:
            return {...state, ...action.res.data};
        case SAVE_USER:
            return {...state, isSave: false};
        case SAVE_USER_SUCCESS:
            return {...state, isSave: true };
        case SAVE_USER_FAILURE:
            return {...state, isSave: false };
        default:
            return state;
    }
}