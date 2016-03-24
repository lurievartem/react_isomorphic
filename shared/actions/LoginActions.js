import api from '../api/';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';


export function logIn(credentials){
    return {
        type: LOGIN,
        promise: api.login.request('logIn', credentials),
        successFn: (res) => {
            sessionStorage.setItem('idToken', res.login.token);
        }
    }
}

export function logOut(data){
    sessionStorage.removeItem('idToken');
    return {
        type: LOGOUT
    }
}