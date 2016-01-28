import React, { Component, PropTypes } from 'react';

class MainContainer extends Component{
    render(){
        const { auto } = this.props;
        return (
            <h1>{auto}{auto}</h1>
        )
    }
}

MainContainer.propTypes = {
    auto: PropTypes.number.isRequired
};

export default MainContainer;