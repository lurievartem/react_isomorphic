import React, { Component, PropTypes } from 'react';
import { reduxForm, initialize } from 'redux-form';
import { validateSignUpFormSync, validateSignUpFormAsync } from './validateSignUpForm';
import TextField from 'material-ui/lib/TextField';
import RadioButton from 'material-ui/lib/radio-button';
import RadioButtonGroup from 'material-ui/lib/radio-button-group';
import DatePicker from 'material-ui/lib/date-picker/date-picker';
import FlatButton from 'material-ui/lib/flat-button';


@reduxForm({
    form: 'SignUp',
    fields: ['username', 'email', 'password', 'confirmPassword', 'name', 'lastname', 'gender', 'birthday', 'logo'],
    validate: validateSignUpFormSync,
    asyncValidate: validateSignUpFormAsync
})
class SignUpForm extends Component{
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        fields: PropTypes.object.isRequired,
        handleSubmit: PropTypes.func.isRequired,
        valid: PropTypes.bool.isRequired
    };

    static contextTypes = {
        router: PropTypes.object.isRequired
    };

    submitForm(data){
        console.log(JSON.stringify(data));
        //this.context.router.push('/');
    }

    cancel(event){
        event.preventDefault();
        event.stopPropagation();
        this.context.router.push('/');
    }

    render(){
        const { fields: { username, email, password, confirmPassword, name, lastname, gender, birthday, logo } } = this.props;
        const cancel = (event) => { this.cancel(event) };
        const handleSubmit = this.props.handleSubmit(this.submitForm.bind(this));
        const maxDate = new Date();
        let minDate = new Date();
        minDate.setFullYear(minDate.getFullYear() - 120);

        return(
            <form>
                <TextField {...username}  hintText="Username" />
                <TextField {...email}  hintText="Email" />
                <TextField {...password}  hintText="Password" type="password" />
                <TextField {...confirmPassword}  hintText="Confirm password" type="password" />
                <TextField {...name}  hintText="Name" />
                <TextField {...lastname}  hintText="Last Name" />
                <RadioButtonGroup name="gender" defaultSelected={gender.value || '0'}>
                    <RadioButton {...gender} value="2" label="Men" />
                    <RadioButton {...gender} value="1" label="Women" />
                    <RadioButton {...gender} value="0" label="Don't want to check" />
                </RadioButtonGroup>
                <DatePicker
                    minDate={minDate}
                    maxDate={maxDate}
                    value={birthday.value}
                    onChange={(e,d) => birthday.onChange(d) }
                    hintText="Date of birthday"
                />
                <FlatButton label="Cancel"  onClick={cancel} />
                <FlatButton label="Save"  onClick={handleSubmit} />
            </form>
        );
    }
}

export default SignUpForm;
