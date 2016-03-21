import React, { Component, PropTypes } from 'react';
import Dialog from 'material-ui/lib/dialog';
import TextField from 'material-ui/lib/TextField';
import RadioButton from 'material-ui/lib/radio-button';
import RadioButtonGroup from 'material-ui/lib/radio-button-group';
import DatePicker from 'material-ui/lib/date-picker/date-picker';
import FlatButton from 'material-ui/lib/flat-button';
import FileReader from '../Common/FileReader';
import FormField from '../Common/FormField';


class SignUpForm extends Component{
    constructor(props){
        super(props)
        this.open = false;
    }

    static propTypes = {
        fields: PropTypes.object.isRequired,
        onCancel: PropTypes.func.isRequired,
        onSubmit: PropTypes.func.isRequired
    };

    render(){
        const { fields: { username, email, password, confirmPassword, name, lastname, gender, birthday, logo }, onCancel, onSubmit } = this.props;
        const maxDate = new Date();

        let minDate = new Date();
        minDate.setFullYear(minDate.getFullYear() - 120);

        return(
            const actions = [
                <FlatButton label="Cancel"  onClick={onCancel} />,
                <FlatButton label="Save"  onClick={onSubmit} />
            ];

            { this.open ?
                <Dialog
                    title="Sign up"
                    modal={false}
                    open={open}
                    actions={actions}
                    >
                    <form>
                        <FormField>
                            <TextField {...username}  hintText="Username" />
                        </FormField>
                        <FormField>
                            <TextField {...email}  hintText="Email" />
                        </FormField>
                        <FormField>
                            <TextField {...password}  hintText="Password" type="password" />
                        </FormField>
                        <FormField>
                            <TextField {...confirmPassword}  hintText="Confirm password" type="password" />
                        </FormField>
                        <FormField>
                            <TextField {...name}  hintText="Name" />
                        </FormField>
                        <FormField>
                            <TextField {...lastname}  hintText="Last Name" />
                        </FormField>
                        <FormField>
                            <RadioButtonGroup name="gender" {...gender} defaultSelected="0" >
                                <RadioButton id="menSex" value="2" label="Men" />
                                <RadioButton id="womenSex" value="1" label="Women" />
                                <RadioButton id="undefSex" value="0" label="Don't want to choose" />
                            </RadioButtonGroup>
                        </FormField>
                        <FormField>
                            <DatePicker
                                minDate={minDate}
                                maxDate={maxDate}
                                value={birthday.value}
                                onChange={(e,d) => birthday.onChange(d) }
                                hintText="Date of birthday"
                            />
                        </FormField>
                        <FormField>
                            <FileReader
                                {...logo}
                                multiple={false}
                                fileAreaClassName="file-reader"
                            />
                        </FormField>
                    </form>
                </Dialog>
                : <FlatButton label="Sign Up" onClick={this.openDialog} />
            }
        );
    }

    openDialog(){
        this.open = true;
    }
}

export default SignUpForm;
