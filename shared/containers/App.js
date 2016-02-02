import React, { Component, PropTypes } from 'react';
import Navigation from '../components/common/Navigation';

class App extends Component{
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

App.propTypes = {
    children: PropTypes.object
};

export default App;