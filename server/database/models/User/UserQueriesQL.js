import { GraphQLList, GraphQLID } from 'graphql';
import UserType from './UserTypeQL';
import User from './UserSchema';

export default {
    users: {
        type: new GraphQLList(UserType),
        resolve: User.getListOfUsers
    },
    user: {
        type: UserType,
        args: {
            id: {
                type: GraphQLID
            }
        },
        resolve: User.getUserByPosition
    }
};
