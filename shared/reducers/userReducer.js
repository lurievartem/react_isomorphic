import { GET_USERS, SAVE_USER} from '../actions/UserActions';

export default function userReducer(state = {}, action) {
    switch (action.type){
        case GET_USERS:
            return Object.assign({}, state, action.res.data);
        case SAVE_USER:
            const requestSave = {
                isSaving: true,
                isSavingError: false
            };
            return Object.assign({}, state, requestSave);
        case SAVE_USER + 'SUCCESS':
            const successSave = {
                isSaving: false,
                isSavingError: false
            };
            return Object.assign({}, state, successSave, action.res)
        case SAVE_USER + 'FAILURE':
            const failureState = {
                isSaving: false,
                isSavingError: true
            };
            return Object.assign({}, state, failureState);
        default:
            return state;
    }
}