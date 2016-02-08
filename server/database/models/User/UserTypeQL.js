import { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLID } from 'graphql';

export default new GraphQLObjectType({
    name: 'User',
    description: 'A user',
    fields: () => ({
        _id: {
          type: new GraphQLNonNull(GraphQLID)
        },
        username: {
            type: GraphQLString
        },
        password: {
            type: GraphQLString
        },
        name: {
          type: GraphQLString
        }
    })
});