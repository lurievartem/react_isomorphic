import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { SignUpForm } from '../../components/';
import { validateSignUpFormSync, validateSignUpFormAsync } from './validate';


@reduxForm({
    form: 'SignUp',
    fields: ['username', 'email', 'password', 'confirmPassword', 'name', 'lastname', 'gender', 'birthday', 'logo'],
    validate: validateSignUpFormSync,
    asyncValidate: validateSignUpFormAsync
})
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
                <SignUpForm onCancel={cancel} onSubmit={handleSubmit(submit)} fields={fields} open={}/>
            </div>
        );
    }
}

export default SignUp;