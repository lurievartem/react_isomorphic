import React, { Component, PropTypes } from 'react';
import Navigation from './common/Navigation';

class AppPage extends Component{
    render() {
        return (
            <div id="main-view">
                <h1>App</h1>
                <Navigation/>
                { this.props.children }
            </div>
        )
    }
};

AppPage.propTypes = {
    children: PropTypes.object
};

export default AppPage;