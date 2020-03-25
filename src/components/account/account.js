import React, {Component} from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';


import PurchaseHistory from './purchase-history';
import AccountInformation from './account-information';

class Account extends Component {


    componentDidMount() {

        const navbarLinks = [
            {
                id: 0,
                title: 'Purchase History',
                active: false,
                component: <PurchaseHistory />
                
            },
            {
                id: 1,
                title: 'Account Information',
                active: true,
                component: <AccountInformation />
            }
        ]

        this.props.setHeaderLinks([]);
        this.props.setNavbarLinks(navbarLinks);
    }

    renderContent = () => {
        let jsx;

        if(this.props.navbarLinks) {
            this.props.navbarLinks.map( link => {
                if(link.active) {
                    jsx = link.component;
                }
            })
        }

        return jsx;
    }

    render(){
        return(
            <div>
                { this.renderContent() }
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { headerLinks, navbarLinks} = state.headerNavbar;
    return { headerLinks, navbarLinks };
}

Account = connect(mapStateToProps, actions)(Account);

export default Account;