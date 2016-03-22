import { GraphQLList, GraphQLString } from 'graphql';
import { check } from '../../../service/jwt-auth';
import UserType from './UserTypeQL';
import TokenType from './TokenTypeQL';
import User from './UserSchema';

export default {
    users: {
        type: new GraphQLList(UserType),
        resolve: ({ token }) => {
            if(check(token))
                return User.getListOfUsers();
        }
    },
    user: {
        type: new GraphQLList(UserType),
        args: {
            username:{
                type: GraphQLString
            },
            email: {
                type: GraphQLString
            }
        },
        resolve: ({ token }, data) => {
            if(check(token))
                return User.getUserByData(data);
        }
    },
    login: {
        type: TokenType,
        args: {
            username:{
                type: GraphQLString
            },
            password:{
                type: GraphQLString
            }
        },
        resolve: (root, data) => {
            return User.login(data);
        }
    }
};
