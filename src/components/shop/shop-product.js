import React, { Component } from 'react';

import Quantity from '../quantity';
import GreenPriceTag from '../green-price-tag';

class ShopProduct extends Component {
    render(){
        const { id, title, description, price } = this.props;
        return(
            <div key={id} className='shop-product'>
                <div className='shop-product-title'>
                    {title}
                </div>
                <div className='shop-product-description'>
                    {description}
                </div>
                <GreenPriceTag className='shop-product-price' title={price} />
                    
                <Quantity className='shop-product-quantity' quantity={1}/>
                <div className='shop-product-add-to-cart'>
                    Add to Cart
                </div>
            </div>
        )
    }
}
export default ShopProduct;