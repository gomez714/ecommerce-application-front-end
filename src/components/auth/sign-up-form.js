import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

import { FormInput, FormButton } from '../form-fields';
import Details from '../details';

import history from '../../history';

class SignUpForm extends Component {
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
            <form onSubmit={handleSubmit} className={`${className} sign-up-form`}>
               
               <Field className='sign-up-form-name' 
                title="Name"
                type="name"
                placeholder="Name"
                name="name" 
                component={FormInput}/>

                <Field className='sign-up-form-email' 
                title="Email"
                type="email"
                placeholder="Email"
                name="email" 
                component={FormInput}/>

                <Field className='sign-up-form-password' 
                title="Password"
                type="password"
                placeholder="Password"
                name="password" 
                component={FormInput}/>

                <Field className='sign-up-form-confirm-password' 
                title="Confirm Password"
                type="password"
                placeholder="Confirm Password"
                name="confirm" 
                component={FormInput}/>

                <div className="sign-up-form-line"></div>
                
                <Field className='sign-up-form-login' 
                onClick={() => console.log("Trying to submit")}
                title="Login"
                type="submit"
                placeholder="Login"
                name="login" 
                component={FormButton}/>

                <Field className='sign-up-form-back' 
                onClick={() => console.log("Trying to go back!")}
                title="Back"
                type="button"
                placeholder="Back"
                short={true}
                name="back" 
                component={FormButton}/>

                <Details className='sign-up-form-details' title='QuickLinks' links={links}/>
            </form>
        )
    }
}

SignUpForm = reduxForm({
    form: 'SignUpForm'
})(SignUpForm);

export default SignUpForm;