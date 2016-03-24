import mongoose from 'mongoose';
import { validateUser, validateUserName } from './UserValidation';
import { hashPassword, comparePassword } from '../../../service/crypt-password';
import { sign } from '../../../service/jwt-auth';
import { msg } from '../../../../config/errors';

var Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: { type: String, required: true, unique: true},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String },
    lastname: { type: String },
    gender: { type: Number },
    birthday: { type: Date },
    logo: { type: String }
})

UserSchema.set('toJSON', { getters: true });
const User = mongoose.model('Users', UserSchema);

User.getListOfUsers = () => {
    return new Promise((resolve, reject) => {
        User.find({}).exec((err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};

User.getUserByData = (userData) => {
    return new Promise((resolve, reject) => {
        User.find(userData).exec((err, res) => {
            err ? reject(err) : resolve(res);
        })
    });
};

User.addUser = (userData) => {
    return new Promise((resolve, reject) => {
        if(validateUser(userData)) return reject(msg["5"]);

        userData.password = hashPassword(userData.password);
        const user = new User(userData);
        return user.save().then((res) => {
            resolve({ token: sign(res) });
        }, (err) => {
            reject(err);
        });
    });
};


User.login = (userData) => {
    return new Promise((resolve, reject) => {
        if(validateUserName(userData)) return reject(msg["5"]);

        User.findOne({username: userData.username}).exec((err, res) => {
            if(err || !res) return reject(msg["1"]);

            if(!comparePassword(userData.password, res.password)) return reject(msg["2"]);

            resolve({ token: sign(res) });
        });
    });
}

export default User;