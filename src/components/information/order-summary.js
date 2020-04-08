import React, { Component } from 'react';

import { UnderlinedTitle, InfoLabel} from './info-helper';


class OrderSummary extends Component {
    render(){
        const { className } = this.props;
        return (
            <div className={`${className} order-summary`}>
                <UnderlinedTitle className='order-summary-title' title='Order Summary'/>
                <InfoLabel className='order-summary-subtotal' title='4 stickers' value='$7.96' />
                <InfoLabel className='order-summary-tax-shipping' title="Taxes & shipping" value='$0.00' />
                <InfoLabel className='order-summary-total' title='Total' value='$8.02' />

            </div>
        )
    }
}

export default OrderSummary;