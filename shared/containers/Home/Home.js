import React, { Component } from 'react';

export default class Home extends Component{
    render(){
        console.log(this.props);
        return (
            <div>
                <h1>Home</h1>
            </div>
        );
    }
};