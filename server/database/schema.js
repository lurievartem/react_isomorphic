import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import { UserQueries, UserMutations } from './models/User/UserQL';

//query (read)
let RootQuery = new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
        user: UserQueries.user,
        users: UserQueries.users,
        login: UserQueries.login
    })
});

//mutation (create, update, delete)
let RootMutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
        addUser: UserMutations.addUser,
    })
});


let schema = new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation
});

export default schema;
