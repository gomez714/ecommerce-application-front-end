import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as actions from '../../actions';
import ShopSearchBar from './shop-searchbar';
import ShopProduct from './shop-product';
import ShopCart from './shop-cart';

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

    onSubmit = (fields) => {
        this.props.filterWithQuery(fields);
    }

    render(){

        return <ShopCart className="shop-cart" />

        return(
            <div className='shop'>
                <ShopSearchBar className="shop-search-bar" onSubmit={this.onSubmit}/>
                <div className="shop-products">
                    {this.props.filteredProducts.map(product => {
                        return(
                            <ShopProduct {...product} key={product.id} />
                        )
                    })}
                </div>
                {
                    this.state.showCart ? <ShopCart className='shop-cart' /> : ''
                }

                
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