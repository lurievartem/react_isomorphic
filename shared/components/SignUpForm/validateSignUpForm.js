import { createValidator, required, maxLength, email } from '../../lib/validator';
import api from '../../api/';

export const validateSignUpFormSync = createValidator({
    firstName: [required, maxLength(10)]
});

export function validateSignUpFormAsync(data){
    data.email = 'freek@i.ua';
    data.firstName = 'second';
    const param = {
        username: data.firstName && `username: \"${data.firstName}\"`,
        email: data.email && `email: \"${data.email}\"`
    };

    return new Promise((resolve, reject) => {
        api.users.request('getUser', param)
        .then((response) => {
            if(response.errors) reject();

            console.log(response.data);
            resolve();

        }).catch((error) => {
            reject();
        })
    });
};