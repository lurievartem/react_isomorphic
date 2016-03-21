import { createValidator, isValid, required, maxLength, minLength, match, email, password, isNumber, isDate } from '../../../../shared/lib/validator';

export function validateUser(data){
    data.gender = Number(data.gender) || 0;
    data.birthday = Date.parse(data.birthday);

    const errors = createValidator({
        username: [required, minLength(3), maxLength(10)],
        email: [required, email],
        password: [required, minLength(5), password],
        confirmPassword: [required, minLength(5), password, match('confirmPassword')],
        name: [required, minLength(2)],
        lastname: [required, minLength(2)],
        gender: [isNumber],
        birthday: [isDate],
        logo: []
    });

    return isValid(errors(data));
}

export function validateUserName(name){
    const errors = createValidator({ username: [required, minLength(3), maxLength(10)]});
    return isValid(errors(name));
}

