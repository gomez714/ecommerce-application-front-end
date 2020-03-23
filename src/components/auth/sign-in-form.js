import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

import { FormInput, FormButton } from '../form-fields';

class SignInForm extends Component {
    render(){

        const { className, handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit} className={`${className} sign-in-form`}>
                <Field className='sign-in-form-email' 
                title="Email"
                type="email"
                placeholder="Email"
                name="email" 
                component={FormInput}/>

                <Field className='sign-in-form-password' 
                title="Password"
                type="password"
                placeholder="Password"
                name="password" 
                component={FormInput}/>

                <div className="sign-in-form-line"></div>
                
                <Field className='sign-in-form-login' 
                onClick={() => console.log("Trying to submit")}
                title="Login"
                type="submit"
                placeholder="Login"
                name="login" 
                component={FormButton}/>

            </form>
        )
    }
}

SignInForm = reduxForm({
    form: 'SignInForm'
})(SignInForm);

export default SignInForm;