import React, { Component } from 'react';

import { connect } from 'react-redux';

import ShippingForm from './shipping-form';
import PageTitle from '../page-title';


import * as actions from '../../actions';

class Shipping extends Component {

    componentDidMount(){
        this.props.setHeaderLinks([]);
        this.props.setNavbarLinks([]);
    }

    onSubmit = (fields) => {
        console.log(fields);
    }

    render(){

        return (
            <div className="shipping">
                <PageTitle className="shipping-page-title" title="Shipping Information" />
                <ShippingForm onSubmit={this.onSubmit} className='shipping-form'/>
            </div>
        )
    }
}

Shipping = connect(null, actions)(Shipping);


export default Shipping;