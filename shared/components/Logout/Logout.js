import React, { Component, PropTypes } from 'react';
import FlatButton from 'material-ui/lib/flat-button';

export default class Logout  extends Component{
    static propTypes = {
        onLogout: PropTypes.func.isRequired
    }

    render(){
        return(
            <FlatButton label="Logout"  onClick={this.props.onLogout} />
        )
    }
}