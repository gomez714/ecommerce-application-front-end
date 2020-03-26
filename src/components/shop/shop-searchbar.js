import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

function FormSearchBar(props){
    return(
        <input {...props.input} className={`${props.className} form-search-bar`} type='text' placeholder={props.placeholder} />
    )
}

class ShopSearchBar extends Component {
    render(){
        const {className, handleSubmit } = this.props;
        return(
            <form className={`${className} shop-search-bar`} onSubmit={handleSubmit}>
                <Field name='query' className='shop-search-bar-form-search-bar' placeholder='search' component={FormSearchBar}/>
            </form>
        )
    }
}

ShopSearchBar = reduxForm({
    form: 'ShopSearchBar'
})(ShopSearchBar);

export default ShopSearchBar;