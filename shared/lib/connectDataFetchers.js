import React, { Component, PropTypes } from 'react';

export default function connectDataFetchers(MainComponent, actionCreators){

    class DataFetchersWrapper extends Component{

        static propTypes = {
            dispatch: PropTypes.func,
            params: PropTypes.object,
            location: PropTypes.object
        };

        static fetchData(dispatch, params = {}, query = {}){
            return Promise.all(
                actionCreators.map(actionCreator => dispatch(actionCreator(params, query)))
            );
        }

        render(){
            return (
                <MainComponent {...this.props} />
            );
        }

        componentDidMount(){
            DataFetchersWrapper.fetchData(
                this.props.dispatch,
                this.props.params,
                this.props.location.query
            );
        }
    }


    return DataFetchersWrapper;
}