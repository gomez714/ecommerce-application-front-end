import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

import { FormInput, FormButton, LongGrayButton } from '../form-fields';

import history from '../../history';

class AccountInformationForm extends Component {

    constructor(){
        super();

        this.state = {
            showPasswords : false
        }
    }

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


                {
                    this.state.showPasswords ? 
                    [
                    <Field key={0} className='account-information-form-current-password' 
                    title="Current Password"
                    type="password"
                    placeholder="Current Password"
                    name="current" 
                    component={FormInput}/>,

                    <Field key={1} className='account-information-form-new-password' 
                    title="New Password"
                    type="password"
                    placeholder="New Password"
                    name="new" 
                    component={FormInput}/>,

                    <Field key={2} className='account-information-form-confirm-password' 
                    title="Confirm Password"
                    type="password"
                    placeholder="Confirm Password"
                    name="confirm" 
                    component={FormInput}/>
                    ]
                    : 
                    <Field className='account-information-form-change-password' 
                    onClick={() => this.setState({ showPasswords: true })}
                    labelTitle='Password'
                    title="Change Password"
                    type="button"
                    name="change-password" 
                    component={LongGrayButton}/> 
                }

                


            </form>
        )
    }
}

AccountInformationForm = reduxForm({
    form: 'AccountInformationForm'
})(AccountInformationForm);

export default AccountInformationForm;