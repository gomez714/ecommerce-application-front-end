import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as actions from '../../actions';

class Shop extends Component {

    componentDidMount(){
        // Fetch shop products action creator
        const headerLinks = [
            {
                id: 0,
                title: 'Login',
                path: '/sign-in'
            }
            
        ]
        this.props.setHeaderLinks(headerLinks);
        // Fetch navbar links
            // Set navbar links
            // Filter products with links
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
    return { state };
}

Shop = connect(mapStateToProps, actions)(Shop);

export default Shop;