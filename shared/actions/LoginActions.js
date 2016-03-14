export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export function logIn(){
    return {
        type: LOGIN
    }
}

export function logOut(data){
    return {
        type: LOGOUT
    }
}