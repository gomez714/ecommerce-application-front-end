import React, { Component } from 'react';

function CartButton({className, icon}) {
    return(
        <div className={`${className} cart-button`}>
            <i className={icon}/>
        </div>
    )
}

function CartContent({ className, products }){
    let count = products.length;
    let productsJSX = products.map(product => <h1 key={product}>{product}</h1>);
    return (
        <div className={`${className} cart-content`}>
            <div className="cart-content-title">
                Cart ({count})
            </div>
            <div className="cart-content-products">
                {productsJSX}
            </div>
            <CartFooter className='cart-content-footer' products={products}/>
        </div>
    )
}

function CartFooter({className, product}){
    const price = 7.96;
    return(
        <div className={`${className} cart-footer`}>
            <a className="cart-footer-checkout">
                Checkout
            </a>
            <div className="cart-footer-subtotal">
                Subtotal
            </div>
            <div className="cart-footer-price">
                ${price}
            </div>
        </div>
    )
}

class ShopCart extends Component {
    render(){
        const { className } = this.props;
        return(
            <div className={`${className} shop-cart`}>
                <CartButton className='shop-cart-toggle' icon="fas fa-times"/>
                <CartContent className='shop-cart-content' products={[243, 345, 654]}/>
            </div>
        )
    }
}

export default ShopCart;