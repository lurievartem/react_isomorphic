import React, { Component, PropTypes } from 'react';

class App extends Component{
    render() {
        return (
            <div id="main-view">
                <h1>App</h1>
                { this.props.children }
            </div>
        )
    }
};

App.propTypes = {
    children: PropTypes.object
};

export default App;