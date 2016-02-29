const isEmpty = value => value === undefined || value === null || value === '';

export function createValidator(rules){
    return (data={}) => {
        const errors = {};
        Object.keys(rules).forEach(key =>{
            const fieldRules = [].concat(rules[key]);
            fieldRules.some((rule) => {
                const error = rule(data[key], data);
                if(error){
                    errors[key] = error;
                    return true;
                }
            });
        });
        return errors;
    };
}

export function required(value){
    if(isEmpty(value)){
        return 'Required';
    }
}

export function minLength(min){
    return value => {
        if(!isEmpty(value) && value.length < min){
            return `Must be at least ${min} characters`;
        }
    };
}

export function maxLength(max){
    return value => {
        if(!isEmpty(value) && value.length > max){
            return `Must be no more than ${max} characters`;
        }
    }
}

export function match(field){
    return (value, data) => {
        if(data){
            if(value !== data[field]){
                return `Do no match`;
            }
        }
    }
}

export function email(value) {
  if (!isEmpty(value) && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)){
    return 'Invalid email address';
  }
}

export function password(value){
    if(!isEmpty(value) && !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(value)){
        return 'Password invalid'
    }
}