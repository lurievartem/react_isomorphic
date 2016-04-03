import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { showModal } from './actions/ModalActions';
import { requireAuthentication } from './helpers/RequireAuth';
import { About, App, Dashboard, Home, NotFound } from './containers';


export default () => {
    return (
        <Route path="/" component={App}>
            {/*Home (main) route*/}
            <IndexRoute component={Home} attr="sdfsdf"/>

            <Route path="about" component={About}/>

            {/*Protected routes*/}
            <Route path="dashboard" component={requireAuthentication(Dashboard, Home)}/>

            <Route path="*" component={NotFound} status={404}/>
        </Route>
    );
};
