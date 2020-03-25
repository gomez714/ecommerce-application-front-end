import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

import { FormInput, FormButton } from '../form-fields';

import history from '../../history';

class AccountInformationForm extends Component {
    render(){

        const { className, handleSubmit } = this.props;


        return (
            <form onSubmit={handleSubmit} className={`${className} account-information-form`}>
               
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

                <Field className='sign-up-form-confirm' 
                title="Confirm Password"
                type="password"
                placeholder="Confirm Password"
                name="confirm" 
                component={FormInput}/>

                <div className="sign-up-form-line"></div>
                
                <Field className='sign-up-form-login' 
                onClick={() => history.push('/account')}
                title="Create Acount"
                type="submit"
                name="login" 
                component={FormButton}/>

                <Field className='sign-up-form-back' 
                onClick={() => history.push('/sign-in')}
                title="Back"
                type="button"
                short={true}
                name="back" 
                component={FormButton}/>

            </form>
        )
    }
}

AccountInformationForm = reduxForm({
    form: 'AccountInformationForm'
})(AccountInformationForm);

export default AccountInformationForm;