import react, { Component, PropTypes } from 'react';
import { connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import { Logout, Login, Signup } from '../../components';
import { logIn, logOut } from '../../actions/LoginActions';
import { saveUser } from '../../actions/UserActions';

@connect(
    (state) => { return {
                        auth: state.auth,
                        user: state.user
                    }
               },
    (dispatch) => {
        return {
            login: bindActionCreators(logIn, dispatch),
            logout: bindActionCreators(logOut, dispatch),
            saveUser: bindActionCreators(saveUser, dispatch)
            ...dispatch
        }
    }
)
class Auth extends Component{
    static propTypes = {
        auth: PropTypes.object.isRequired,
        user: PropTypes.object.isRequired,
        login: PropTypes.func.isRequired,
        logout: PropTypes.func.isRequired
    };

    render(){
        const { login, auth: { isAuthenticated } } = this.props;
        const login = this.props.login.bind(this);
        const logout = this.props.logout.bind(this);
        const save = this.props.saveUser.bind(this);

        return(
            <div className="navbar-form">
                { !isAuthenticated
                    ? <Login onLogin={login} auth={this.props.auth} />
                      <SignUp saveUser={save} user={this.props.user}/>
                    : <Logout onLogout={logout} />
                }
            </div>
        );
    }
}

export default Auth;