import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

import { FormInput, FormButton } from '../form-fields';
import Details from '../details';

import history from '../../history';

class SignInForm extends Component {
    render(){

        const { className, handleSubmit } = this.props;

        const links = [
            {
                id: 0,
                title: 'Not Registered? Create account here',
                onClick: () => history.push('/sign-up')
            },
            {
                id: 1,
                title: 'Forgot account email?',
                onClick: () => console.log('Forgot email!')
            },
            {
                id: 2,
                title: 'Forgot password?',
                onClick: () => console.log('Forgot password!')
            }
        ]

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
                onClick={() => history.push('/account')}
                title="Login"
                type="submit"
                placeholder="Login"
                name="login" 
                component={FormButton}/>

                <Details className='sign-in-form-details' title='QuickLinks' links={links}/>
            </form>
        )
    }
}

SignInForm = reduxForm({
    form: 'SignInForm'
})(SignInForm);

export default SignInForm;