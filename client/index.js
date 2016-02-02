import 'babel-core/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import routes from '../shared/routes';
import configureStore from '../shared/store/configureStore';

const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);
const rootElement = document.getElementById('app');
const history = createBrowserHistory();

render(
    <Provider store={store}>
        <Router history={history}>{routes}</Router>
    </Provider>,
    rootElement
)