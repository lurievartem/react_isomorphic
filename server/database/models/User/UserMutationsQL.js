import {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLList,
    GraphQLID
} from 'graphql';

import UserType from './UserTypeQL';
import User from './UserSchema';

export default {
    addUser:{
        type:UserType,
        args: {
        username:{
            name:'username',
            type:new GraphQLNonNull(GraphQLString)
        },
        password:{
            name:'password',
            type: new GraphQLNonNull(GraphQLString)
        },
        name:{
            name:'name',
            type: GraphQLString
        }
    },
    resolve: (root, {username, password, name}) => {
        var newUser = new User({username:username, password:password, name:name});

        return new Promise((resolve, reject) => {
            newUser.save((err, res) => {
                err ? reject(err): resolve(res);
            });
        });
    }
  }
};
