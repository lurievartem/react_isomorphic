import React, { Component, PropTypes } from 'react';
import { reduxForm, initialize } from 'redux-form';
import { LoginForm } from '../../components';
import { validateSignUpFormSync } from './validate';

@reduxForm({
    form: 'LogIn',
    fields: ['username', 'password'],
    validate: validateSignUpFormSync
})
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
                this.context.router.push('/');
            } else{
                console.log('error when save');
            }
        }
    }

    render(){
        const { handleSubmit, fields } = this.props;
        const login = this.login.bind(this);

        return(
            <div className="navbar-form">
                <LoginForm onSubmit={handleSubmit(login)} fields={fields} open={}/>
            </div>
        );
    }

    login(data){
        this.props.onLogin(data);
        //this.props.dispatch(initialize('LogIn', {}, ['username', 'password']));
    }

}

export default Login;