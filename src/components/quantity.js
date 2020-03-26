import React, { Component } from 'react';

class Quantity extends Component {
    render(){
        const { className, quantity } = this.props;
        return(
            <div className={`${className} quantity`}>
                <div className='quantity-count'>
                    {quantity}
                </div>
                <div className='quantity-plus'>
                    <i className='fas fa-plus'></i>
                </div>
                <div className='quantity-minus'>
                    <i className='fas fa-minus'></i>
                </div>

            </div>
        )
    }
}

export default Quantity;