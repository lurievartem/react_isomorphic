import React, { Component } from 'react';
import TextInput from './common/TextInput';

class SignFormPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            user: this.props.user || {}
        };
    }

    render(){
        const wrapperClass = 'form-group';

        return(
            <form>
                <h1>Registration</h1>
				<div className={wrapperClass}>
                    <label htmlFor="firstName">First Name</label>
                    <div className="field">
                        <TextInput
                            name="firstName"
                            label ="First Name"
                            value={this.state.user.firstName}
                            onChange={(field, value) => { this._onChange(field, value) }} />
                    </div>
                </div>

                <div className={wrapperClass}>
                    <label htmlFor="lastName">Last Name</label>
                    <div className="field">
                        <TextInput
                            name="lastName"
                            label ="Last Name"
                            value={this.state.user.lastName}
                            onChange={(field, value) => { this._onChange(field, value) }} />
                    </div>
                </div>

                <input type="button" value="Cancel" className="btn btn-default" onClick={ (event) => { this._onCancel(event) }} />
				<input type="submit" value="Save" className="btn btn-default" onClick={ (event) => { this._onSave(event) }} />
            </form>
        );
    }

    _isFormValid(){
        return true;
    }

    _onChange(field, value){
        if(!field || !value) return;
        this.state.user[field] = value;
        this.setState({ user: this.state.user });
    }

    _onSave(event){
        event.preventDefault();
        if(!this._isFormValid()) return;

        this.props.save(this.state.user);
        this.history.push(null, '/');
    }

    _onCancel(event){
        event.preventDefault();
        this.history.push(null, '/');
    }
};

export default SignFormPage;