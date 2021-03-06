import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';
import { FormInput, FormButton } from '../form-fields';
import { connect } from 'react-redux';

import history from '../../history';
import OrderSummary from './order-summary';
import { UnderlinedTitle } from './info-helper';
import Payment from './payment';

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

                <div className='payment-form-shipping-info shipping-info'>
                    <UnderlinedTitle className='shipping-info-title' title='Shipping to' />
                    <div className='shipping-info-name small-text'>
                        {this.props.name}
                    </div>
                    <div className='shipping-info-address small-text'>
                        {this.props.address}
                    </div>
                </div>
                

            </form>
        )
    }
}

function mapStateToProps(state){
    const { name, address } = state.user.user;
    return { name, address }
}

PaymentForm = connect(mapStateToProps)(PaymentForm)

PaymentForm = reduxForm({
    form: 'PaymentForm'
})(PaymentForm);

export default PaymentForm;