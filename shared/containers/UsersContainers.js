import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as UserActions from '../actions/UserActions';
import connectDataFetchers from '../lib/connectDataFetchers';
import UserPage from '../components/UserPage'

function mapStateToProps(state){
    return {
        users: state.users
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(UserActions, dispatch);
}

export default connect(mapStateToProps)(connectDataFetchers(UserPage, [ UserActions.loadUsers ]));
