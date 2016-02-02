import React, { Component} from 'react';

class TextInput extends Component {
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

TextInput.propTypes = {
	name: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    id: React.PropTypes.string,
    className: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    onBlur: React.PropTypes.func,
    value: React.PropTypes.string
}

export default TextInput;