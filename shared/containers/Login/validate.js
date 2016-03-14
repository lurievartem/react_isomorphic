import { createValidator, required, maxLength, minLength, match, email, password } from '../../lib/validator';
import api from '../../api/';

export const validateSignUpFormSync = createValidator({
    username: [required, minLength(3), maxLength(10)],
    password: [required, minLength(5), password]
});
