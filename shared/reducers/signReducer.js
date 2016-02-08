import { CREATE_USER } from '../actions/SignActions';

let user = {
    firstName: '',
    lastName: ''
}

export default function sign(state = user, action) {
    switch (action.type){
        case CREATE_USER:
            return action.data;
        default:
            return state;
    }
}