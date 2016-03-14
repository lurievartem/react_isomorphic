import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { SignUpForm } from '../../components/';
import { saveUser } from '../../actions/UserActions';
import { validateSignUpFormSync, validateSignUpFormAsync } from './validate';

@connect(
    (state)=> {
        return {
            user: state.user
        }
    },
    {saveUser}
)
@reduxForm({
    form: 'SignUp',
    fields: ['username', 'email', 'password', 'confirmPassword', 'name', 'lastname', 'gender', 'birthday', 'logo'],
    validate: validateSignUpFormSync,
    asyncValidate: validateSignUpFormAsync
})
class SignUp extends Component{
    static propTypes = {
        handleSubmit: PropTypes.func.isRequired,
        fields: PropTypes.object.isRequired
    };

    static contextTypes = {
        router: PropTypes.object.isRequired
    };

    componentWillReceiveProps(nextProp){
        if(nextProp.user.isSave != undefined){
            if(nextProp.user.isSave){
                this.context.router.push('/');
            } else{
                console.log('error when save');
            }
        }
    }

    submit(data){
        console.log(JSON.stringify(data));
        this.props.saveUser(data);
    }

    cancel(event){
        event.preventDefault();
        event.stopPropagation();
        this.context.router.push('/');
    }

    render(){
        const { handleSubmit, fields } = this.props;
        const cancel = (event) => { this.cancel(event) };
        const submit = (data) => { this.submit(data) };

        return (
            <div>
                <SignUpForm onCancel={cancel} onSubmit={handleSubmit(submit)} fields={fields}/>
            </div>
        );
    }
}

export default SignUp;