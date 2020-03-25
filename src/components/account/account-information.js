import React, { Component } from 'react';

import PageTitle from '../page-title';
import AccountInformationForm from '../account/account-information-form';

class AccountInformation extends Component {

    onSubmit = (fields) => {
        console.log(fields);
    }

    render(){
        return(
            <div className='account-information'>
                <PageTitle className="account-information-page-title" title="Account Information" />
                <AccountInformationForm onSubmit={this.onSubmit} className='account-information-form'/>

            </div>
        )
    }
}

export default AccountInformation;