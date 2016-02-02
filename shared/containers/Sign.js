import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as SignActions from '../actions/SignActions';
import SignForm from '../components/SignForm';

function mapStateToProps(state){
    return {
        user: state.sign
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(SignActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignForm);
