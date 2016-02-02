import {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLList,
    GraphQLID
} from 'graphql';

import mongoose from 'mongoose';
import User from './models/User/UserSchema';
import { UserQueries, UserMutations, UserType } from './models/User/UserQL';

//query (read)
let RootQuery = new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
        user: UserQueries.user,
        users: UserQueries.users
    })
});

//mutation (create, update, delete)
let RootMutation = new GraphQLObjectType({
    name: "Mutation",
    fields: () => ({
        addUser: UserMutations.addUser,
    })
});


let schema = new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation
});

export default schema;
