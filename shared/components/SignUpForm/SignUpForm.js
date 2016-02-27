import React, { Component, PropTypes } from 'react';
import { reduxForm, initialize } from 'redux-form';
import { validateSignUpFormSync, validateSignUpFormAsync } from './validateSignUpForm';


@reduxForm({
    form: 'SignUp',
    fields: ['firstName'],
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
        const { fields: { firstName } } = this.props;
        const cancel = (event) => { this.cancel(event) };
        const handleSubmit = this.props.handleSubmit(this.submitForm.bind(this));

        return(
            <form>
                <div className="form-group">
                    <label>
                        <input className="control" type="text" {...firstName} />
                    </label>
                    {firstName.touched && firstName.error && <div>{firstName.error}</div>}
                </div>
                <button className="btn btn-primary" onClick={cancel}>Cancel</button>
                <button className="btn btn-primary" onClick={handleSubmit}>Save</button>
            </form>
        );
    }
}

export default SignUpForm;
