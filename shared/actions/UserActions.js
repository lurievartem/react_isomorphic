import api from '../api/';

export const GET_USERS = 'GET_USERS';
export const SAVE_USER = 'SAVE_USER';
export const SAVE_USER_SUCCESS = 'SAVE_USER_SUCCESS';
export const SAVE_USER_FAILURE = 'SAVE_USER_FAILURE';

export function loadUsers(){
    return {
        type: GET_USERS,
        promise: api.users.request('getAll')
    }
}

export function saveUser(data){
    return {
        type: SAVE_USER,
        promise: api.users.request('save', data),
        successFn: (res) => {
            sessionStorage.setItem('idToken', res.addUser.token);
        }
    }
}
