import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull, GraphQLID } from 'graphql';

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
        },
        lastname: {
            type: GraphQLString
        },
        logo: {
            type: GraphQLString
        },
        gender: {
            type: GraphQLInt
        },
        birthday: {
            type: GraphQLString
        }
    })
});

