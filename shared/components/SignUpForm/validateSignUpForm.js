import { createValidator, required, maxLength, minLength, match, email, password } from '../../lib/validator';
import api from '../../api/';

export const validateSignUpFormSync = createValidator({
    username: [required, maxLength(10)],
    email: [required, email],
    password: [required, minLength(5), match('confirmPassword')],
    password: [required, minLength(5)],
    name: [required, minLength(2)],
    lastname: [required, minLength(2)],
    gender: [required],
    birthday: [],
    logo: []
});

export function validateSignUpFormAsync(data){
    const param = {
        username: `\"${data.username}\"`,
        email: `\"${data.email}\"`
    };

    return new Promise((resolve, reject) => {
        api.users.request('getUser', param)
        .then((response) => {
            if(response.errors) reject();
            return response.data
        })
        .then((data) => {

            if(data.email && data.email.length){
                reject({email: 'Already registered'});
            }

            if(data.username && data.username.length){
                reject({username: 'Already taken'})
            }

            resolve();
        })
        .catch((error) => {
            reject();
        })
    });
};