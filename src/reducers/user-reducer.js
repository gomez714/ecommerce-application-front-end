import {
    SET_USER_PURCHASES,
    SET_PURCHASE_DETAIL,
    SET_CART_PRODUCTS,
    ADD_CART_PRODUCT
} from '../actions/types';

const INITIAL_STATE = {
    purchases: [],
    purchaseDetail: {
        id: null,
        title: '',
        total: null,
        orderNumber: '',
        orderDate: null,
        creditCard: '',
        user: {
            name: '',
            shippingAddress: ''

        }
    },
    
    cartProducts: []
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_USER_PURCHASES:
            return{
                ...state,
                purchases: action.payload
            }

        case SET_PURCHASE_DETAIL:
            let  purchaseDetail;
            state.purchases.map(purchase => {
                if (purchase.id == action.payload) {
                    purchaseDetail = purchase
                }
                
            })

            return {
                ...state,
                purchaseDetail
            }
            
        case SET_CART_PRODUCTS:
            return {
                ...state,
                cartProducts: action.payload
            }

        case ADD_CART_PRODUCT:
            var exists = false;
            const newCP = action.payload;
            var cartProducts = [];
            state.cartProducts.map( cartProduct => {
                if(cartProduct.product.id == newCP.id) {
                    exists = true;
                    cartProduct.quantity += 1;
                } 
                cartProducts.push(cartProduct);
            })
            if (exists == false){
                cartProducts.push({
                    id: state.cartProducts.length + 1,
                    product: newCP,
                    quantity: 1
                });
            }
            return {
                ...state,
                cartProducts: cartProducts
            }
        
        default: return state
    }
}