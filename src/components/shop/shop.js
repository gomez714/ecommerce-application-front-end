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
        
        
        // Fetch navbar links
            // Set navbar links
            // Filter products with links

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
                {/* Shop Product */}
                {/* Cart button */}
            </div>
        )
    }
}

function mapStateToProps(state){

    const { categories } = state.shop

    return { categories };
}

Shop = connect(mapStateToProps, actions)(Shop);

export default Shop;