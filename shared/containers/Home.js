import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MainContainer from '../components/MainContainer';
import * as AutoActions  from '../actions/auto';

function mapStateToProps(state){
    return {
        auto: state.auto
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(AutoActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
