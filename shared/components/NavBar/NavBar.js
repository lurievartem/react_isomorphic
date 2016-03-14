import React, {Component} from 'react';
import { Link, IndexLink } from 'react-router';

export default class NavBar extends Component{
    render(){
        return(
            <div className="container-fluid">
                <IndexLink to="/" className="navbar-brand">Home</IndexLink>
                <ul className="nav navbar-nav">
                    <li><Link to="about">About</Link></li>
                    <li><Link to="sign">Sign</Link></li>
                </ul>
            </div>
        );
    }
};