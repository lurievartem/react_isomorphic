import { createValidator, required, maxLength, email } from '../../lib/validator';

export const validateSignUpFormSync = createValidator({
    firstName: [required, maxLength(10)]
});

export function validateSignUpFormAsync(values){
    return new Promise((resolve, reject) => {
        resolve();
    });
};