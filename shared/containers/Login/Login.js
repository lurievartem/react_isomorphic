import React, { Component, PropTypes } from 'react';
import { connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import { reduxForm } from 'redux-form';
import { LoginForm, Logout } from '../../components';
import { logIn, logOut } from '../../actions/LoginActions';
import { validateSignUpFormSync } from './validate';


@connect(
    (state)=> {
        return {
            auth: state.auth
        }
    },
    (dispatch)=> {
        return {
            login: bindActionCreators(logIn, dispatch),
            logout: bindActionCreators(logOut, dispatch),
            ...dispatch
        }
    }
)
@reduxForm({
    form: 'LogIn',
    fields: ['username', 'password'],
    validate: validateSignUpFormSync
})
class Login extends Component{
    static propTypes = {
        handleSubmit: PropTypes.func.isRequired,
        fields: PropTypes.object.isRequired
    };

    render(){
        const { auth: { isAuthenticated }, handleSubmit, fields } = this.props;
        const login = (data) => { this.props.login(data) };
        const logout = () => { this.props.logout() };

        return(
            <div className="navbar-form">
                { isAuthenticated
                    ? <Login onSubmit={handleSubmit(login)} fields={fields}/>
                    : <Logout onLogout = {logout} />
                }
            </div>
        );
    }
}

export default Login;