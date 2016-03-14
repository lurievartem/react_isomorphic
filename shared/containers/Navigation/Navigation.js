import React, { Component, PropTypes } from 'react';
import { NavBar }  from '../../components';
import { Login } from '../.';

class Navigation extends Component{
    render(){
        return (
            <nav className="navbar navbar-default">
                <NavBar/>
                <Login/>
            </nav>
        );
    }
}

export default Navigation;


