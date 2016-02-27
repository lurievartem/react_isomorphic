import { GraphQLString, GraphQLInt, GraphQLNonNull } from 'graphql';
import UserType from './UserTypeQL';
import User from './UserSchema';

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
            name: {
                name: 'name',
                type: GraphQLString
            },
            lastname: {
                name: 'lastname',
                type: GraphQLString
            },
            logo: {
                name: 'logo',
                type: GraphQLString
            },
            gender: {
                name: 'gender',
                type: GraphQLInt
            },
            birthday: {
                name: 'birthday',
                type: GraphQLString
            }
        },
        resolve: (root, data) => {
            var newUser = new User(data);
            return User.addUser(newUser);
        }
    }
};
