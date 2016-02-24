import React, { Component, PropTypes } from 'react';
import { NavBar, FooterBar }  from '../../components';

class App extends Component{
    static propTypes = {
        children: PropTypes.node
    };

    render(){
        return (
            <div>
                <NavBar/>
                <div>
                    { this.props.children }
                </div>
                <FooterBar/>
            </div>
        );
    }
}

export default App;