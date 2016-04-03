import cookie from 'react-cookie';
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
            cookie.save('idToken', res.login.token);
        }
    }
}

export function logOut(){
    cookie.remove('idToken');
    return {
        type: LOGOUT
    }
}

export function logInUser(){
    return {
        type: LOGIN_SUCCESS
    }
}