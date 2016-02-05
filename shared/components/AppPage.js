import React, { Component, PropTypes } from 'react';
import Navigation from './common/Navigation';

class AppPage extends Component{

    static propTypes = {
        children: PropTypes.object
    }; //TODO delete semicolons and change other components after babel change the behaviour https://github.com/jeffmo/es-class-fields-and-static-properties/issues/26#issuecomment-177720642

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


export default AppPage;