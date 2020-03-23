import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

import { FormInput } from '../form-fields';

class SignInForm extends Component {
    render(){

        const { className } = this.props;

        return (
            <form className={`${className} sign-in-form`}>
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

            </form>
        )
    }
}

SignInForm = reduxForm({
    form: 'SignInForm'
})(SignInForm);

export default SignInForm;