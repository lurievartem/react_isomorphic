import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as SignActions from '../actions/SignActions';
import SignFormPage from '../components/SignFormPage';

function mapStateToProps(state){
    return {
        user: state.sign
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(SignActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignFormPage);
