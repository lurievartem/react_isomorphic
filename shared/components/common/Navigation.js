import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

export default class Navigation extends Component{
    render(){
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <Link to="home" className="navbar-brand">Home</Link>
                    <ul className="nav navbar-nav">
                        <li><IndexLink to="/">Home</IndexLink></li>
                        <li><Link to="about">About</Link></li>
                        <li><Link to="sign">Sign</Link></li>
                        <li><Link to="login">Login</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
};