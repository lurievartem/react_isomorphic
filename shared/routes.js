import React from 'react';
import { Route, Redirect, IndexRoute } from 'react-router';

import App from './containers/App';
import Home from './containers/Home';
import Login from './containers/Login';
import Sign from './containers/Sign';

import About from './components/About';
import NoMatch from './components/NoMatch';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route  path="about" component={About} />
    <Route  path="login" component={Login} />
    <Route  path="sign" component={Sign} />
    <Route path="*" component={NoMatch}/>
  </Route>
);
