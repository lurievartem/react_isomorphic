import mongoose from 'mongoose';
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

User.getUserByData = (root, data) => {
    return new Promise((resolve, reject) => {
        User.find(data).exec((err, res) => {
            err ? reject(err) : resolve(res);
        })
    });
};

User.addUser = (user) => {
    return new Promise((resolve, reject) => {
        user.save((err, res) => {
            err ? reject(err): resolve(res);
        });
    });
};

User.getListOfUsers = () => {
    return new Promise((resolve, reject) => {
        User.find({}).exec((err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};

export default User;