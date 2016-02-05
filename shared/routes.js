import React from 'react';
import { Route /*, Redirect, IndexRoute*/ } from 'react-router';

import AppPage from './components/AppPage';
import AboutPage from './components/AboutPage';
import NoMatchPage from './components/NoMatchPage';

import Sign from './containers/SignContainers';
import Users from './containers/UsersContainers';

export default (
    <Route path="/" component={AppPage}>
        <Route  path="about"    component={AboutPage}   />
        <Route  path="users"    component={Users}       />
        <Route  path="sign"     component={Sign}        />
        <Route  path="*"        component={NoMatchPage} />
    </Route>
);
