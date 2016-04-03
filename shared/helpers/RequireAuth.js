import React, { Component } from 'react';
import cookie from 'react-cookie';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { showModal } from '../actions/ModalActions';

export function requireAuthentication(ProtectedComponent, UnProtectedComponent) {

    @connect(
        (state) => { return { isAuthenticated: state.auth.isAuthenticated } },
        dispatch => {
            return  bindActionCreators({
                        showModal: showModal
                    }, dispatch);
        }
    )
    class AuthenticatedComponent extends Component {
        componentDidMount(){
            if(!this.props.isAuthenticated) this.showModal('LOGIN');
        }

        render() {
            return (
                <div>
                    {this.props.isAuthenticated
                        ? <ProtectedComponent {...this.props}/>
                        : <UnProtectedComponent {...this.props}/>
                    }
                </div>
            )
        }

        showModal(modalType, params = {}){
            this.props.showModal(modalType, params);
        }
    }

    return AuthenticatedComponent;

}