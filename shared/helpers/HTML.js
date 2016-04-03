import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom/server';
import serialize from 'serialize-javascript';

export default class HTML extends Component{
    static propTypes = {
        assets: PropTypes.object,
        component: PropTypes.node,
        store: PropTypes.object
    };

    render(){
        const {assets, component, store} = this.props;
        const content = component ? ReactDOM.renderToString(component) : '';

        return(
            <html>
                <head>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>Redux Universal Example</title>
                    <link href='https://fonts.googleapis.com/css?family=Roboto:400,300,500' rel='stylesheet' type='text/css' />
                    <link href={assets.style} rel="stylesheet" type="text/css"/>
                </head>
                <body>
                    <div id="app" dangerouslySetInnerHTML={{__html: content}} />
                    <script dangerouslySetInnerHTML={{__html: `window.__INITIAL_STATE__=${serialize(store.getState())};`}} />
                    <script src={assets.javascript} />
                </body>
            </html>
        );
    }

}