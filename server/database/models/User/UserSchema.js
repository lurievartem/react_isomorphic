import mongoose from 'mongoose';
var Schema = mongoose.Schema;

const UserSchema = new Schema({
    id: { type: String, required: true, unique: true, index: true, default: mongoose.Types.ObjectId},
    username: { type: String, required: true, unique: true},
    password: { type: String, required: true },
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    gender: { type: Number, required: true },
    birthday: { type: Date, required: true },
    logo: { type: String }
})

UserSchema.set('toJSON', { getters: true });
const User = mongoose.model('Users', UserSchema);

User.getUserByPosition = (root, {id}) => {
    return new Promise((resolve, reject) => {
        User.find({}).exec((err, res) => {
            err ? reject(err) : resolve(res[id]);
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