import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

import { FormInput, FormButton } from '../form-fields';

import history from '../../history';
import OrderSummary from './order-summary';

class PaymentForm extends Component {
    render(){

        const { className, handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit} className={`${className} payment-form`}>
               
               <Field className='payment-form-name' 
                title="Name on Credit Card"
                type="name"
                placeholder="Name"
                name="name" 
                component={FormInput}/>

                <Field className='payment-form-card' 
                title="Credit Card Number"
                type="card"
                placeholder="____-____-____-____"
                name="card" 
                component={FormInput}/>

                <Field className='payment-form-expiration' 
                title="Expiration Date"
                type="expiration"
                placeholder="expiration"
                name="expiration" 
                component={FormInput}/>

                <Field className='payment-form-ccv' 
                title="CCV"
                type="ccv"
                placeholder="CCV"
                name="ccv" 
                component={FormInput}/>

                <div className="payment-form-line"></div>
                
                <Field className='payment-form-pay-complete' 
                onClick={() => history.push('/information/payment')}
                title="Pay and Complete"
                type="submit"
                name="pay-complete" 
                component={FormButton}/>

                <Field className='payment-form-back' 
                onClick={() => history.push('/information/shipping')}
                title="Back"
                type="button"
                short={true}
                name="back" 
                component={FormButton}/>

                <OrderSummary className='payment-form-order-summary' />
                

            </form>
        )
    }
}

PaymentForm = reduxForm({
    form: 'PaymentForm'
})(PaymentForm);

export default PaymentForm;