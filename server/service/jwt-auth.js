import jwt from 'jsonwebtoken';
import { authConfig } from '../../config/auth';
import { msg } from '../../config/errors';

export function check(token){
    if(token){
        try{
            if(jwt.verify(token, authConfig.secret)){
                return true;
            } else{
                throw new Error();
            }
        } catch(err){
            throw new Error(msg[3]);
        }
    } else{
        throw new Error(msg[4]);
    }
}

export function sign(data, expiresTime){
    return jwt.sign(data, authConfig.secret, { expiresIn: expiresTime || authConfig.expiresTime });
}
