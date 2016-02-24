import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { App, Home, About, Login, NotFound, LoginSuccess, SignUp } from './containers';

export default (
    <Route path="/" component={App}>
        {/*Home (main) route*/}
        <IndexRoute component={Home}/>

        <Route path="about" component={About}/>
        <Route path="login" component={Login}/>
        <Route path="sign"  component={SignUp}/>

        <Route path="*" component={NotFound} status={404}/>
    </Route>
);
