import React, { Component } from 'react';

import Quantity from '../quantity';
import GreenPriceTag from '../green-price-tag';

class ShopProduct extends Component {

    handleAddToCart = () => {
        if(document.getElementById('shop-cart').classList.contains('cart-hidden')) {
            document.getElementById('shop-cart').classList.remove('cart-hidden');
        } else {
            document.getElementById('shop-cart').classList.add('cart-hidden');
        }
    }

    render(){
        const { id, title, description, price } = this.props;
        return(
            <div key={id} className='shop-product'>

                <div className="shop-product-front">
                    <img className='shop-product-front-image' src="http://via.placeholder.com/220x220" />
                    <div className="shop-product-front-title">
                        {title}
                    </div>

                </div>

               <div className='shop-product-back'>
                    <div className='shop-product-back-title'>
                        {title}
                    </div>
                    <div className='shop-product-back-description'>
                        {description}
                    </div>
                    <GreenPriceTag className='shop-product-back-price' title={price} />
                        
                    <Quantity className='shop-product-back-quantity' quantity={1}/>
                    <a onClick={this.handleAddToCart} className='shop-product-back-add-to-cart'>
                        Add to Cart
                    </a>
               </div>
            </div>
        )
    }
}
export default ShopProduct;