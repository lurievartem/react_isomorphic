import React, { Component, PropTypes } from 'react';
import { connect }  from 'react-redux';
import { SignUpForm } from '../../components';


class SignUp extends Component{
    render(){
        return (
            <div>
                <SignUpForm/>
            </div>
        );
    }
}

export default SignUp;