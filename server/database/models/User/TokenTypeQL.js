import { GraphQLObjectType, GraphQLString } from 'graphql';

export default new GraphQLObjectType({
    name: 'AuthToken',
    description: 'Token receive after successful auth',
    fields: () => ({
        token: {
            type: GraphQLString
        }
    })
});

