import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import history from '../../history';

import {  FormButton } from '../form-fields';
import ReviewProducts from './review-products';

class ReviewForm extends Component {
    render(){

        const { className, handleSubmit } = this.props;

    

        return (
            <form onSubmit={handleSubmit} className={`${className} review-form`}>

                <div className='review-form-legend'>
                    <div className='review-form-legend-name'>Name</div>
                    <div className='review-form-legend-quantity'>Quantity</div>
                    <div className='review-form-legend-price'>Price</div>
                </div>

                <ReviewProducts className='review-form-products' />

                <div className="review-form-line"></div>
                
                <Field className='review-form-proceed' 
                onClick={() => history.push('/sign-in')}
                title="Proceed to checkout"
                type="submit"
                name="Proceed" 
                component={FormButton}/>

                <Field className='review-form-back' 
                onClick={() => history.push('/shop')}
                title="Back"
                type="button"
                short={true}
                name="back" 
                component={FormButton}/>


                <div className='review-form-details'>
                    <div className='review-details-subtotal review-detail'>
                        <div className='review-detail-title'>Subtotal</div>
                        <div className='review-detail-price'>$7.96</div>
                    </div>
                    <div className='review-details-tax review-detail'>
                        <div className='review-detail-title'>Tax</div>
                        <div className='review-detail-price'>$0.16</div>
                    </div>
                    <div className='review-details-shipping review-detail'>
                        <div className='review-detail-title'>Shipping</div>
                        <div className='review-detail-price'>$0.00</div>
                    </div>
                    <div className='review-details-total review-detail review-detail-green'>
                        <div className='review-detail-title review-detail-green-title'>Total</div>
                        <div className='review-detail-price review-detail-green-price'>$8.12</div>
                    </div>
                </div>
            </form>
        )
    }
}

ReviewForm = reduxForm({
    form: 'ReviewForm'
})(ReviewForm);

export default ReviewForm;