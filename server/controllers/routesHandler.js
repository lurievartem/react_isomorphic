import React from 'react';
import { Provider } from 'react-redux';
import { match } from 'react-router';
import { renderToString } from 'react-dom/server';
import { ReduxAsyncConnect, loadOnServer } from 'redux-async-connect';
import cookie from 'react-cookie';
import createHistory from 'react-router/lib/createMemoryHistory';
import configureStore from '../../shared/store/configureStore';
import { assets } from '../../config/server';
import HTML from '../../shared/helpers/HTML';
import getRoutes  from '../../shared/routes';

export default (req, res) => {
    cookie.setRawCookie(req.headers.cookie);

    const initialState = { auth: { isAuthenticated : cookie.load('idToken') } };
    const memoryHistory  = createHistory(req.originalUrl);
    const { store, syncHistory }  = configureStore(memoryHistory, initialState);

    match({ history: syncHistory, routes: getRoutes(), location: req.url }, (error, redirectLocation, renderProps) => {
        if(error){
            res.send(500, error.message);
        } else if(redirectLocation){
            res.redirect(302, redirectLocation.pathname + redirectLocation.search);
        } else if(!renderProps){
            res.status(404).send('Not found');
        }

        loadOnServer(renderProps, store).then(() => {
            const content = renderToString(
                <Provider store={store} key="provider">
                    <ReduxAsyncConnect  {...renderProps}/>
                </Provider>
            );

            res.status(200).send('<!doctype html>\n' + renderToString(<HTML assets={assets} content={content} store={store}/>));
        });
    });
}