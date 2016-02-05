import React, { Component, PropTypes} from 'react';

class TextInput extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        id: PropTypes.string,
        className: PropTypes.string,
        placeholder: PropTypes.string,
        onBlur: PropTypes.func,
        value: PropTypes.string
    };

    render(){
        return (
            <input
                className={this.props.className}
                id={this.props.id}
                placeholder={this.props.placeholder}
                name={this.props.name}
                onBlur={(event) => { this._onBlur(event) }}
                onChange={(event) => { this._onChange(event) }}
                value={this.props.value}
            />
        );
    }

    _onChange(event){
        this.props.onChange(event.target.name, event.target.value);
    }

    _onBlur(event){
        if(this.props.onBlur){
            this.props.onBlur(event);
        }
    }
}

export default TextInput;