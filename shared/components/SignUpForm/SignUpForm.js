import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { validateSignUpFormSync, validateSignUpFormAsync } from './validateSignUpForm';

@reduxForm({
    form: 'SignUp',
    fields: ['firstName'],
    validate: validateSignUpFormSync,
    asyncValidate: validateSignUpFormAsync
})
class SignUpForm extends Component{
    static propTypes = {
        fields: PropTypes.object.isRequired,
        handleSubmit: PropTypes.func.isRequired,
        valid: PropTypes.bool.isRequired
    };

    submitForm(data){
        console.log(data);
    }

    render(){
        const{ fields: { firstName }, handleSubmit } = this.props;
        return(
            <form onSubmit={handleSubmit(this.submitForm)}>
                <div className="form-group">
                    <label>
                        <input className="control" type="text" {...firstName} />
                    </label>
                    {firstName.touched && firstName.error && <div>{firstName.error}</div>}
                </div>
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default SignUpForm;
