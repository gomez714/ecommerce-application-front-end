import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as actions from '../../actions';

class Shop extends Component {

    componentDidMount(){
        
        const headerLinks = [
            {
                id: 0,
                title: 'Login',
                path: '/sign-in'
            }
            
        ]
        this.props.setHeaderLinks(headerLinks);
        this.props.fetchShopCategories();

        this.props.fetchShopProducts();
    }

    shouldComponentUpdate(nextProps) {
        if(this.props != nextProps ) {
            this.props.setNavbarLinks(nextProps.categories, (id) => this.props.filterProductsWithCategoryId(id));
        }
        return true
    }

    render(){
        return(
            <div className='shop'>
                {/* Search-bar Component */}
                <div className="shop-filteredProducts">
                    {this.props.filteredProducts.map(product => {
                        return(
                            <div key={product.id} className='shop-product'>
                                <div className='shop-product-title'>
                                    {product.title}
                                </div>
                                <div className='shop-product-description'>
                                    {product.description}
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Cart button */}
            </div>
        )
    }
}

function mapStateToProps(state){

    const { categories, filteredProducts } = state.shop

    return { 
        categories,
        filteredProducts
    };
}

Shop = connect(mapStateToProps, actions)(Shop);

export default Shop;