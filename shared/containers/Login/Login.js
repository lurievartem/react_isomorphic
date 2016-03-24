import React, { Component, PropTypes } from 'react';
import { connect} from 'react-redux';
import { bindActionCreators, compose } from 'redux'
import { reduxForm, initialize } from 'redux-form';
import { LoginForm } from '../../components';
import { validateSignUpFormSync } from './validate';
import { logIn } from '../../actions/LoginActions';
import { hideModal } from '../../actions/ModalActions';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';

class Login extends Component{
    static propTypes = {
        auth: PropTypes.object.isRequired,
        onLogin: PropTypes.func.isRequired,
        handleSubmit: PropTypes.func.isRequired,
        fields: PropTypes.object.isRequired
    };

    componentWillReceiveProps(nextProp){
        if(nextProp.auth.isSave != undefined){
            if(nextProp.auth.isSave){
                this.props.hideModal();
            } else{
                console.log('error when save');
            }
        }
    }

    render(){
        const { handleSubmit, fields } = this.props;
        const login = this.login.bind(this);
        const cancel = this.cancel.bind(this);
        const actions = [
            <FlatButton label="Cancel"  onClick={cancel} />,
            <FlatButton label="Save"  onClick={handleSubmit(login)} />
        ];

        return(
            <Dialog
                title="Login"
                modal={false}
                open={true}
                actions={actions}
                >
                <LoginForm fields={fields} open={false}/>
            </Dialog>
        );
    }

    login(data){
        this.props.onLogin(data);
        //this.props.dispatch(initialize('LogIn', {}, ['username', 'password']));
    }

    cancel(event){
        event.preventDefault();
        event.stopPropagation();
        this.props.hideModal();
    }

}

const enhance = compose(
    connect(
        state => { return { auth: state.auth } },
        dispatch => {
            return bindActionCreators({
                       onLogin: logIn,
                       hideModal: hideModal
                   }, dispatch);
        }
    ),
    reduxForm({
        form: 'LogIn',
        fields: ['username', 'password'],
        validate: validateSignUpFormSync
    })
);

export default enhance(Login);