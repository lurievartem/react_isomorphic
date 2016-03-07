import api from '../api/';

export const GET_USERS = 'GET_USERS';
export const SAVE_USER = 'SAVE_USER';

export function loadUsers(){
    return {
        type: GET_USERS,
        promise: api.users.request('getAll')
    }
}

export function saveUser(data){
    return {
        type: SAVE_USER,
        promise: api.users.request('save', data)
    }
}