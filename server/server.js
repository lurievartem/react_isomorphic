import path from 'path';
import Express from 'express';

import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../webpack.config'

import React from 'react';
import { RoutingContext, match } from 'react-router';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';

import routes from '../shared/routes';
import configureStore from '../shared/store/configureStore';

const app = new Express();
const port = 3000;

//set hot module reloading via webpack
const compiler = webpack(webpackConfig)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

app.get('/', handleRender);

function handleRender(req, res){
    const auto = 12;
    const initialState = { auto };
    const store = configureStore(initialState);

    match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
        if(error){
            res.send(500, error.message);
        } else if(redirectLocation){
            res.redirect(302, redirectLocation.pathname + redirectLocation.search);
        } else if(!renderProps){
            res.status(404).send('Not found');
        } else{

            const html = renderToString(
                <Provider store={store}>
                    <RoutingContext {...renderProps}/>
                </Provider>
            );

            const finalState = store.getState();
            res.send(renderFullPage(html, finalState));
        }
    });
}

function renderFullPage(html, initialState){
    return `
        <!doctype html>
        <html>
            <head>
                <title>Redux Universal Example</title>
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

app.listen(port, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`)
  }
})