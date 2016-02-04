import React, { Component } from 'react';

export default function connectDataFetchers(MainComponent, actionCreators){

    class DataFetchersWrapper extends Component{
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

    DataFetchersWrapper.fetchData = (dispatch, params = {}, query = {}) =>{
        return Promise.all(
            actionCreators.map(actionCreator =>
                dispatch(actionCreator(params, query))
            )
        );
    };

    return DataFetchersWrapper;
}