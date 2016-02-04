import { GET_USERS } from '../actions/UserActions';

export default function userReducer(state = {}, action) {
    switch (action.type){
        case GET_USERS:
            return Object.assign({}, state, action.res.data);
        default:
            return state;
    }
}