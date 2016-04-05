import React, { Component, PropTypes } from 'react';
import { connect} from 'react-redux';
import { bindActionCreators, compose } from 'redux'
import { hideModal } from '../../actions/ModalActions';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';

const MODAL_COMPONENTS = {
    'LOGIN' : Login,
    'SIGN_UP': SignUp
}

@connect(
    state => { return { modal: state.modal } },
    dispatch => { return bindActionCreators({ hideModal }, dispatch);}
)
class ModalRoot extends Component{
    static propTypes = {
        modal: PropTypes.object.isRequired
    };

    closeModal(){
        const {modal: { modalType, modalProps }} = this.props;

        if(modalProps.onCloseModal && typeof modalProps.onCloseModal == 'function'){
            modalProps.onCloseModal();
        }

        this.props.hideModal();
    }

    render(){
        const {modal: { modalType, modalProps }} = this.props;
        if(!modalType) return <span/>;

        const SpecificModal = MODAL_COMPONENTS[modalType];
        const closeModal = this.closeModal.bind(this);
        return <SpecificModal {...modalProps} closeModal={closeModal}/>
    }
}

export default ModalRoot;