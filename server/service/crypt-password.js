import bcrypt from 'bcrypt-nodejs';

export function hashPassword(password){
     return bcrypt.hashSync(password);
}

export function comparePassword(password, hash){
    return password && hash && bcrypt.compareSync(password, hash);
}