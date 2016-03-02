import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import { SignUpForm } from '../../components';
import { saveUser } from '../../actions/UserActions';

@connect(()=>({}), {saveUser})
class SignUp extends Component{
    static contextTypes = {
        router: PropTypes.object.isRequired
    };

    submit(data){
        console.log(JSON.stringify(data));
        this.props.saveUser(data);
        this.context.router.push('/');
    }

    cancel(event){
        event.preventDefault();
        event.stopPropagation();
        this.context.router.push('/');
    }

    render(){
        const cancel = (event) => { this.cancel(event) };
        const submit = (data) => { this.submit(data) };
        return (
            <div>
                <SignUpForm handleCancel={cancel} onSubmit={submit}/>
            </div>
        );
    }
}

export default SignUp;