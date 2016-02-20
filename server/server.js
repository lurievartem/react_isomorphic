import path from 'path';
import Express from 'express';
import bodyParser from 'body-parser';
import favicon from 'serve-favicon';
import cookieParser from 'cookie-parser';
import { graphql } from 'graphql';

// Webpack Requirements
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev';

// React And Redux Setup
import configureStore from '../shared/store/configureStore';
import { Provider } from 'react-redux';
import React from 'react';
import { RouterContext, match } from 'react-router';
import { renderToString } from 'react-dom/server';

// Import required modules
import { server as config } from '../config/server';
import schema from './database/schema';
import './database/mongo-db.js';
import routes from '../shared/routes';
import { fetchComponentsData } from './utils';

const app = new Express();
const port = process.env.PORT || config.port || 3000;

//set hot module reloading via webpack
if (process.env.NODE_ENV !== 'production') {
    const compiler = webpack(webpackConfig);
    app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }))
    app.use(webpackHotMiddleware(compiler));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text({type: 'application/graphql'}));
app.use(cookieParser());
app.use(Express.static(path.join(__dirname, '../public')));
app.use(favicon(path.join(__dirname, '../public/favicon.ico')));

app.post('/graphql', (req, res) => {
    graphql(schema, req.body)
        .then((result) => {
            res.send(result);
        });
});
app.use(handleRender);

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

        function renderView(){
            const html = renderToString(
                <Provider store={store}>
                    <RouterContext {...renderProps}/>
                </Provider>
            );

            return renderFullPage(html, store.getState());
        }

        fetchComponentsData(
            store.dispatch,
            renderProps.components,
            renderProps.params,
            renderProps.location.query
        )
        .then(renderView)
        .then(html => res.end(html))
        .catch(err => res.end(err.message));

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