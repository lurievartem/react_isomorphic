import path from 'path';
import Express from 'express';
import bodyParser from 'body-parser';
import favicon from 'serve-favicon';
import graphqlHTTP from 'express-graphql';

// Webpack Requirements
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev';

import React from 'react';
import { Provider } from 'react-redux';
import { match } from 'react-router';
import { renderToString } from 'react-dom/server';
import { ReduxAsyncConnect, loadOnServer } from 'redux-async-connect';
import configureStore from '../shared/store/configureStore';
import { server as config } from '../config/server';
import schema from './database/schema';
import './database/mongo-db.js';
import routes from '../shared/routes';

const app = new Express();
const port = process.env.PORT || config.port || 3000;

//set hot module reloading via webpack
if (process.env.NODE_ENV !== 'production'){
    const compiler = webpack(webpackConfig);
    app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }))
    app.use(webpackHotMiddleware(compiler));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text({type: 'application/graphql'}));
app.use(Express.static(path.join(__dirname, '../public')));
app.use(favicon(path.join(__dirname, '../public/favicon.ico')));

app.use('/graphql', graphqlHTTP(req => ({
    schema,
    rootValue: { token: req.headers['x-access-token'] },
    pretty: true
})));

app.use((req, res, next) => {
    GLOBAL.navigator = {
        userAgent: req.headers['user-agent']
    }
    next();
});
app.use(handleRender);

// development error handler, will print stacktrace
if (app.get('env') === 'development'){
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler, no stacktraces leaked to user
app.use(function(err, req, res, next){
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


app.listen(port, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`)
  }
});

function handleRender(req, res){
    const initialState = { };
    const store = configureStore(initialState);

    match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
        if(error){
            res.send(500, error.message);
        } else if(redirectLocation){
            res.redirect(302, redirectLocation.pathname + redirectLocation.search);
        } else if(!renderProps){
            res.status(404).send('Not found');
        }

        loadOnServer(renderProps, store).then(() => {
            const appHTML = renderToString(
                <Provider store={store} key="provider">
                    <ReduxAsyncConnect  {...renderProps}/>
                </Provider>
            );

            res.send(renderFullPage(appHTML, store.getState()));
        })
    });
}

function renderFullPage(html, initialState){
    const cssPath = "/static/main.css";
    return `
        <!doctype html>
        <html>
            <head>
                <meta charset="utf-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <title>Redux Universal Example</title>
                <link href='https://fonts.googleapis.com/css?family=Roboto:400,300,500' rel='stylesheet' type='text/css'>
                <link rel="stylesheet" href=${cssPath}">
            </head>
            <body>
                <div id="app">${html}</div>
                <script>
                    window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
                </script>
                <script src="/static/bundle.js"></script>
            </body>
        </html>
    `;
}