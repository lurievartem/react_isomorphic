import { createValidator, required, maxLength, minLength, match, email, password, isNumber, isDate } from '../../../../shared/lib/validator';

export function validate(data){
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

    return Object.keys(errors(data)).length === 0;
}

export function morph(data){
    data.gender = Number(data.gender) || 0;
    data.birthday = Date.parse(data.birthday);
    return data;
}