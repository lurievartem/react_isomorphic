import React, { Component, PropTypes } from 'react';
import cookie from 'react-cookie';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { replace } from 'react-router-redux';
import { showModal } from '../actions/ModalActions';

export function requireAuthentication(ProtectedComponent, redirectURL) {

    @connect(
        state => { return { isAuthenticated: state.auth.isAuthenticated } },
        dispatch => {
            return  bindActionCreators({
                        showModal: showModal,
                        replace, replace
                    }, dispatch);
        }
    )
    class AuthenticatedComponent extends Component {
        static contextType:{
            router: PropTypes.object.isRequired
        };

        componentDidMount(){
            if(!this.props.isAuthenticated){
                this.showModal('LOGIN', { onCloseModal: () => { this.props.replace(redirectURL); }});
            }
        }

        componentWillUpdate(nextProps, nextState){
            if(!nextProps.isAuthenticated){
                this.props.replace(redirectURL);
            }
        }

        render() {
            return (
                <div>
                    {this.props.isAuthenticated
                        ? <ProtectedComponent {...this.props}/>
                        : null
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