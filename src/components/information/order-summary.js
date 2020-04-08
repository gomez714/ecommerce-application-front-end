import React, { Component } from 'react';

import { UnderlinedTitle, InfoLabel} from './info-helper';

import { connect } from 'react-redux';


class OrderSummary extends Component {
    render(){
        const { className } = this.props;
        let tax = 0.16;
        let subtotal = 0;
        let amtStickers = 0;
        this.props.cartProducts.map(cartProduct => {
            subtotal += cartProduct.quantity * cartProduct.product.price;
            amtStickers += cartProduct.quantity;
        })
        return (
            <div className={`${className} order-summary`}>
                <UnderlinedTitle className='order-summary-title' title='Order Summary'/>
                <InfoLabel className='order-summary-subtotal' title={`${amtStickers} stickers`} value={`$${subtotal}`} />
                <InfoLabel className='order-summary-tax-shipping' title="Taxes & shipping" value={`$${tax}`} />
                <InfoLabel className='order-summary-total info-title-green' title='Total' value={`$${subtotal + tax}`} />

            </div>
        )
    }
}

function mapStateToProps(state){
    const { cartProducts } = state.user;
    return { cartProducts }
}

OrderSummary = connect(mapStateToProps)(OrderSummary);

export default OrderSummary;