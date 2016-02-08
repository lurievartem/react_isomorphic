import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

export default class Navigation extends Component{
    render(){
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <IndexLink to="/" className="navbar-brand">Home</IndexLink>
                    <ul className="nav navbar-nav">
                        <li><Link to="users">Users</Link></li>
                        <li><Link to="about">About</Link></li>
                        <li><Link to="sign">Sign</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
};