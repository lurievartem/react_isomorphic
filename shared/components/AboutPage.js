import React, { Component } from 'react';

if(process.env.BROWSER){
    require('./AboutPage.less');
}

class AboutPage extends Component{
    render(){
        return <h3 className="About">About</h3>
    }
};

export default AboutPage;