import React, { Component } from 'react';

import PageTitle from '../page-title';
import Purchases from './purchases';
import PurchaseDetail from './purchase-detail';

class PurchaseHistory extends Component {
    render(){
        return(
            <div className='purchase-history'>
                <PageTitle className='purchase-history-page-title' title="Purchase History" />

                <div className='purchase-history-content'>
                <Purchases className="purchase-history-purchases" />

                <PurchaseDetail className='purchase-history-detail' />
                </div>

                <div className='purchase-history-border-bottom'/>
            </div>
        )
    }
}

export default PurchaseHistory;