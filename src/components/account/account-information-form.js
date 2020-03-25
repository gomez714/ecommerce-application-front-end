import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

import { FormInput, FormButton } from '../form-fields';

import history from '../../history';

class AccountInformationForm extends Component {
    render(){

        const { className, handleSubmit } = this.props;


        return (
            <form onSubmit={handleSubmit} className={`${className} account-information-form`}>
               
               <Field className='account-information-form-name' 
                title="Name"
                type="name"
                placeholder="Name"
                name="name" 
                component={FormInput}/>

                <Field className='account-information-form-email' 
                title="Email"
                type="email"
                placeholder="Email"
                name="email" 
                component={FormInput}/>

                <Field className='account-information-form-street-address' 
                title="Street Address"
                type="address"
                placeholder="Street Address"
                name="address" 
                component={FormInput}/>

                <Field className='account-information-form-city' 
                title="City"
                type="city"
                placeholder="City"
                name="city" 
                component={FormInput}/>

                <Field className='account-information-form-state' 
                title="State"
                type="state"
                placeholder="State"
                name="state" 
                component={FormInput}/>

                <Field className='account-information-form-zipcode' 
                title="Zipcode"
                type="zipcode"
                placeholder="Zipcode"
                name="zipcode" 
                component={FormInput}/>

                {/* <Field className='account-information-form-password' 
                title="Password"
                type="password"
                placeholder="Password"
                name="password" 
                component={FormInput}/>

                <Field className='account-information-form-confirm' 
                title="Confirm Password"
                type="password"
                placeholder="Confirm Password"
                name="confirm" 
                component={FormInput}/>

                
                <Field className='account-information-form-login' 
                onClick={() => history.push('/account')}
                title="Create Acount"
                type="submit"
                name="login" 
                component={FormButton}/>

                <Field className='account-information-form-back' 
                onClick={() => history.push('/account-in')}
                title="Back"
                type="button"
                short={true}
                name="back" 
                component={FormButton}/> */}

            </form>
        )
    }
}

AccountInformationForm = reduxForm({
    form: 'AccountInformationForm'
})(AccountInformationForm);

export default AccountInformationForm;