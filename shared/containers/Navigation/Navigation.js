import React, { Component, PropTypes } from 'react';
import { NavBar }  from '../../components';
import { Auth } from '../';

class Navigation extends Component{
    render(){
        return (
            <nav className="navbar navbar-default">
                <NavBar/>
                <Auth/>
            </nav>
        );
    }
}

export default Navigation;


