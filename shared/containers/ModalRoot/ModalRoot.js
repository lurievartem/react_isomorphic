import React, { Component, PropTypes } from 'react';
import { connect} from 'react-redux';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';

const MODAL_COMPONENTS = {
    'LOGIN' : Login,
    'SIGN_UP': SignUp
}

@connect(
    state => { return { modal: state.modal } }
)
class ModalRoot extends Component{
    static propTypes = {
        modal: PropTypes.object.isRequired
    };

    render(){
        const {modal: { modalType, modalProps }} = this.props;
        if(!modalType) return <span/>;

        const SpecificModal = MODAL_COMPONENTS[modalType];
        return <SpecificModal {...modalProps}/>
    }
}

export default ModalRoot;