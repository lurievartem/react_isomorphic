import express from 'express';
import cookie from 'react-cookie';
import graphqlHTTP from 'express-graphql';
import schema from '../database/schema';

const router = express.Router();

router.use('/graphql', graphqlHTTP(req => ({
   schema,
   rootValue: { token: cookie.load('idToken') },
   pretty: true
})));

export default router;
