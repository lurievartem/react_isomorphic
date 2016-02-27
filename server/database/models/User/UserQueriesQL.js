import { GraphQLList, GraphQLString } from 'graphql';
import UserType from './UserTypeQL';
import User from './UserSchema';

export default {
    users: {
        type: new GraphQLList(UserType),
        resolve: User.getListOfUsers
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
        resolve: User.getUserByData
    }
};
