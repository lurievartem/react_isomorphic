import { GraphQLString, GraphQLNonNull } from 'graphql';
import UserType from './UserTypeQL';
import User from './UserSchema';
import { validate, morph } from './UserUtils';

export default {
    addUser: {
        type: UserType,
        args: {
            username: {
                name: 'username',
                type: new GraphQLNonNull(GraphQLString)
            },
            email: {
                name: 'email',
                type: new GraphQLNonNull(GraphQLString)
            },
            password: {
                name: 'password',
                type: new GraphQLNonNull(GraphQLString)
            },
            confirmPassword:{
                name: 'confirmPassword',
                type: new GraphQLNonNull(GraphQLString)
            },
            name: {
                name: 'name',
                type: new GraphQLNonNull(GraphQLString)
            },
            lastname: {
                name: 'lastname',
                type: new GraphQLNonNull(GraphQLString)
            },
            logo: {
                name: 'logo',
                type: GraphQLString
            },
            gender: {
                name: 'gender',
                type: GraphQLString,
            },
            birthday: {
                name: 'birthday',
                type: GraphQLString
            }
        },
        resolve: (root, data) => {
            data = morph(data);

            if(validate(data)){
                return User.addUser(new User(data));
            } else{
                throw new Error('Wrong data');
            }
        }
    }
};
