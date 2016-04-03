import webpackHMR from './webpack';
import setUserAgent from './setUserAgent';
import graphQl from './graphQL';
import routesHandler from './routesHandler';
import errorHandler from './errorHandler';

export default (app) => {
    app.use(webpackHMR);
    app.use(setUserAgent);
    app.use(graphQl);
    app.use(routesHandler);
    app.use(errorHandler);
}