import React, { Component, PropTypes } from 'react';
import { Navigation }  from '../.';

class App extends Component{
    static propTypes = {
        children: PropTypes.node
    };

    render(){
        return (
            <div>
                <Navigation/>
                <div>
                    { this.props.children }
                </div>
            </div>
        );
    }
}



export default App;