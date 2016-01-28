import 'babel-core/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from '../shared/store/configureStore';
import App  from '../shared/containers/App';

const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);
const rootElement = document.getElementById('app');

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    rootElement
)