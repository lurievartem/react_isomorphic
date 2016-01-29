import React from 'react';
import { Route, Redirect, IndexRoute } from 'react-router';

import App from './containers/App';
import Home from './containers/Home';

export default (
  <Route component={App} path="/">
    <IndexRoute component={Home} />
  </Route>
);
