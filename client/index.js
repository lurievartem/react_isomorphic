import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { ReduxAsyncConnect } from 'redux-async-connect';
import injectTapEventPlugin from 'react-tap-event-plugin';


import getRoutes from '../shared/routes';
import configureStore from '../shared/store/configureStore';

injectTapEventPlugin();
const initialState = window.__INITIAL_STATE__;
const { store, syncHistory } = configureStore(browserHistory, initialState);
const rootElement = document.getElementById('app');

render(
    <Provider store={store} key="provider">
        <Router render={(props) =>
                <ReduxAsyncConnect {...props} /> } history={syncHistory}>
            {getRoutes()}
        </Router>
    </Provider>,
    rootElement
)

