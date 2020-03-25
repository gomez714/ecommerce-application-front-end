import React, { Component } from 'react';

import {connect} from 'react-redux'

import * as actions from '../../actions';

class PurchaseDetail extends Component {
    render() {

        const { className } = this.props;

        return(
            <div className={`${className} purchases`}>
                    
                
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { purchases } = state.user;
    return { purchases };
}

PurchaseDetail = connect(mapStateToProps, actions)(PurchaseDetail)

export default PurchaseDetail;