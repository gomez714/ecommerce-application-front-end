import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

import {  FormButton } from '../form-fields';

import history from '../../history';

class ReviewForm extends Component {
    render(){

        const { className, handleSubmit } = this.props;

    

        return (
            <form onSubmit={handleSubmit} className={`${className} review-form`}>
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

            </form>
        )
    }
}

ReviewForm = reduxForm({
    form: 'ReviewForm'
})(ReviewForm);

export default ReviewForm;