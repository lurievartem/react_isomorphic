import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/lib/TextField';
import FlatButton from 'material-ui/lib/flat-button';
import FormField from '../Common/FormField';

export default class LoginForm extends Component{
    static propTypes = {
        fields: PropTypes.object.isRequired,
        handleSubmit: PropTypes.func.isRequired
    };

    render(){
        const { handleSubmit, fields: { username, password } } = this.props;
        return (
            <form>
                <FormField>
                    <TextField {...username}  hintText="Username" />
                </FormField>
                <FormField>
                    <TextField {...password}  hintText="Password" type="password" />
                </FormField>
                <FlatButton label="Save"  onClick={handleSubmit} />
            </form>
        );
    }
}