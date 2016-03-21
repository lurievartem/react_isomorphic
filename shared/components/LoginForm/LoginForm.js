import React, { Component, PropTypes } from 'react';
import Dialog from 'material-ui/lib/dialog';
import TextField from 'material-ui/lib/TextField';
import FlatButton from 'material-ui/lib/flat-button';
import FormField from '../Common/FormField';

export default class LoginForm extends Component{
    constructor(props){
        super(props)
        this.open = false;
    }

    static propTypes = {
        fields: PropTypes.object.isRequired,
        onSubmit: PropTypes.func.isRequired
    };

    render(){
        const { open, onSubmit, fields: { username, password } } = this.props;
        return (
            const actions = [
                <FlatButton label="Login"  onClick={onSubmit} />
            ];

            { this.open ?
                <Dialog
                    title="Login"
                    modal={false}
                    open={open}
                    actions={actions}
                    >
                    <form>
                        <FormField>
                            <TextField {...username}  hintText="Username" />
                        </FormField>
                        <FormField>
                            <TextField {...password}  hintText="Password" type="password" />
                        </FormField>
                    </form>
                </Dialog>
                : <FlatButton label="Login" onClick={this.openDialog} />
            }
        );
    }

    openDialog(){
        this.open = true;
    }
}