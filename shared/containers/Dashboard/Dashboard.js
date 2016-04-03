import React, { PropTypes, Component } from 'react';

class Dashboard extends Component{
    render(){
        return(
            <div className="container">
                <h1>Page access only after auth</h1>
            </div>
        );
    }
}

export default Dashboard;