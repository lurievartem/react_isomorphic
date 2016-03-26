import api from '../api/';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
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

export function logOut(){
    sessionStorage.removeItem('idToken');
    return {
        type: LOGOUT
    }
}

export function logInUser(){
    return {
        type: LOGIN_SUCCESS
    }
}