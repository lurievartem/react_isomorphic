import React, { Component, PropTypes } from 'react';
import { connect} from 'react-redux';
import { bindActionCreators, compose } from 'redux'
import { reduxForm } from 'redux-form';
import { SignUpForm } from '../../components/';
import { validateSignUpFormSync, validateSignUpFormAsync } from './validate';
import { saveUser } from '../../actions/UserActions';
import { logInUser } from '../../actions/AuthActions'
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';

class SignUp extends Component{
    static propTypes = {
        user: PropTypes.object.isRequired,
        saveUser: PropTypes.func.isRequired,
        handleSubmit: PropTypes.func.isRequired,
        fields: PropTypes.object.isRequired
    };

    static contextTypes = {
        router: PropTypes.object.isRequired
    };

    componentWillReceiveProps(nextProp){
        if(nextProp.user.isSave != undefined){
            if(nextProp.user.isSave){
                this.props.logInUser();
                this.props.closeModal();
            } else{
                console.log('error when save');
            }
        }
    }

    render(){
        const { handleSubmit, fields } = this.props;
        const cancel = this.props.closeModal.bind(this);
        const submit = this.submit.bind(this);
        const actions = [
            <FlatButton label="Cancel"  onClick={cancel} />,
            <FlatButton label="Save"  onClick={handleSubmit(submit)} />
        ];

        return (
            <Dialog
                title="Sign up"
                modal={false}
                open={true}
                actions={actions}
                >
                <SignUpForm fields={fields}/>
            </Dialog>
        );
    }

    submit(data){
        console.log(JSON.stringify(data));
        this.props.saveUser(data);
    }

}

const enhance = compose(
    connect(
        state => { return { user: state.user } },
        dispatch => {
            return bindActionCreators({
                       saveUser: saveUser,
                       logInUser: logInUser
                   }, dispatch);
        }
    ),
    reduxForm({
        form: 'SignUp',
        fields: ['username', 'email', 'password', 'confirmPassword', 'name', 'lastname', 'gender', 'birthday', 'logo'],
        validate: validateSignUpFormSync,
        asyncValidate: validateSignUpFormAsync
    })
);

export default enhance(SignUp);
