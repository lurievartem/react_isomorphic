import React, { Component, PropTypes } from 'react';
import { connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import FlatButton from 'material-ui/lib/flat-button';
import { Logout } from '../../components';
import { logOut } from '../../actions/LoginActions';
import { showModal } from '../../actions/ModalActions';

@connect(
    (state) => { return { auth: state.auth } },
    dispatch => {
        return  bindActionCreators({
                    logout: logOut,
                    showModal: showModal
                }, dispatch);
    }
)
class Auth extends Component{
    static propTypes = {
        auth: PropTypes.object.isRequired,
        showModal: PropTypes.func.isRequired,
        logout: PropTypes.func.isRequired
    };

    render(){
        const {auth: { isAuthenticated } } = this.props;
        const logout = this.props.logout.bind(this);

        return(
            <div className="navbar-form">
                { !isAuthenticated
                    ? <div>
                        <FlatButton label="Login"  onClick={() => { this.showModal('LOGIN') }} />
                        <FlatButton label="Sign Up" onClick={ () => { this.showModal('SIGN_UP') }} />
                      </div>
                    : <Logout onLogout={logout} />
                }
            </div>
        );
    }

    showModal(modalType, params = {}){
        this.props.showModal(modalType, params);
    }

}

export default Auth;