import React, { Component } from 'react';

import * as actions from '../../actions';

import { connect } from 'react-redux';

class Purchases extends Component {

    componentDidMount(){
        this.props.fetchUserPurchases();
    }
    render() {

        const { className } = this.props;

        return(
            <div className={`${className} purchases`}>
                {
                    this.props.purchases.map( purchase => {
                        return (
                            <div key={purchase.id} className='purchases-purchase purchase'>
                                <img className="purchase-image" src="http://via.placeholder.com/80x80" />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { purchases } = state.user;
    return { purchases };
}

Purchases = connect(mapStateToProps, actions)(Purchases);

export default Purchases;