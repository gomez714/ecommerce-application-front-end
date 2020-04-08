import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';
import { FormInput, FormButton } from '../form-fields';

import OrderSummary from './order-summary';
import history from '../../history';

class ShippingForm extends Component {
    render(){

        const { className, handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit} className={`${className} shipping-form`}>
               
               <Field className='shipping-form-name' 
                title="Name"
                type="name"
                placeholder="Name"
                name="name" 
                component={FormInput}/>

                <Field className='shipping-form-address' 
                title="Street Address"
                type="address"
                placeholder="Street Address"
                name="address" 
                component={FormInput}/>

                <Field className='shipping-form-city' 
                title="City"
                type="city"
                placeholder="City"
                name="city" 
                component={FormInput}/>

                <Field className='shipping-form-state' 
                title="State"
                type="state"
                placeholder="State"
                name="state" 
                component={FormInput}/>

                <Field className='shipping-form-zipcode' 
                title="Zipcode"
                type="zipcode"
                placeholder="Zipcode"
                name="zipcode" 
                component={FormInput}/>

                <div className="shipping-form-line"></div>
                
                <Field className='shipping-form-use-this-address' 
                onClick={() => history.push('/information/payment')}
                title="Use This Address"
                type="submit"
                name="use-this-address" 
                component={FormButton}/>

                <Field className='shipping-form-back' 
                onClick={() => history.push('/order/review')}
                title="Back"
                type="button"
                short={true}
                name="back" 
                component={FormButton}/>

                <OrderSummary className='shipping-form-order-summary' />

            </form>
        )
    }
}

ShippingForm = reduxForm({
    form: 'ShippingForm'
})(ShippingForm);

export default ShippingForm;