import React, { Component, PropTypes } from 'react';
import { Navigation, ModalRoot }  from '../';

class App extends Component{
    static propTypes = {
        children: PropTypes.node
    };

    render(){
        return (
            <div>
                <ModalRoot/>
                <Navigation/>
                <div>
                    { this.props.children }
                </div>
            </div>
        );
    }
}



export default App;