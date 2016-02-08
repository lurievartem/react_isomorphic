import api from '../api/';

export const GET_USERS = 'GET_USERS';

export function loadUsers(){
    return {
        type: GET_USERS,
        promise: api.users.request('getAll')
    }
}