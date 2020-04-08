import {
    SET_USER_PURCHASES,
    SET_PURCHASE_DETAIL,
    SET_CART_PRODUCTS,
    ADD_CART_PRODUCT,
    AUTHENTICATE_USER
} from './types';

export function signIn({email, password}) {
    console.log({email, password});
    return ({
        type: AUTHENTICATE_USER,
        payload: {
            user:{
                id: 0,
                name: 'Luis Gomez',
                address: '123 Address st.',
                cartProducts: []
            }
        }
    })
}

export function setPurchaseDetail(id){
    return({
        type: SET_PURCHASE_DETAIL,
        payload: id
    })
}

export function addCartProduct(product){
    return({
        type: ADD_CART_PRODUCT,
        payload: product
    })
}

export function fetchCartProducts() {
    return({
        type: SET_CART_PRODUCTS,
        payload: [
            {
                id: 0,
                product: {
                    id: 0,
                    title: 'Javascript in the browser',
                    description: 'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start. The running speed starts slowly, but gets faster each minute after you hear this signal',
                    price: 1.99,
                    belongsTo: [0, 1],
                    imageUrl: 'http://via.placeholder.com/80x80'
                },
                quantity: 2
                
            },
            {
                id:1,
                product: {
                    id: 1,
                    title: 'Graph Database',
                    description: 'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start. The running speed starts slowly, but gets faster each minute after you hear this signal',
                    price: 1.99,
                    belongsTo: [0, 6],
                    imageUrl: 'http://via.placeholder.com/80x80'
                },
                quantity: 1
            }
        ]
    })
}

export function fetchUserPurchases(){
    return ({
        type: SET_USER_PURCHASES,
        payload: [
            {
                id: 0,
                title: 'Purchase 1',
                total: 8.02,
                orderNumber: 'A008275',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Luis Gomez',
                    shippingAddress: '1234 W State st.'

                }

            },
            {
                id: 1,
                title: 'Purchase 2',
                total: 19.02,
                orderNumber: 'A008276',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Luis Gomez',
                    shippingAddress: '1234 W State st.'

                }
            },
            {
                id: 2,
                title: 'Purchase 3',
                total: 11.00,
                orderNumber: 'A008277',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Luis Gomez',
                    shippingAddress: '1234 W State st.'

                }
            },
            {
                id: 3,
                title: 'Purchase 4',
                total: 1.69,
                orderNumber: 'A008278',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Luis Gomez',
                    shippingAddress: '1234 W State st.'

                }
            },
            {
                id: 4,
                title: 'Purchase 5',
                total: 19.60,
                orderNumber: 'A008279',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Luis Gomez',
                    shippingAddress: '1234 W State st.'

                }
            },
            {
                id: 5,
                title: 'Purchase 6',
                total: 17.00,
                orderNumber: 'A008280',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Luis Gomez',
                    shippingAddress: '1234 W State st.'

                }
            },
            {
                id: 6,
                title: 'Purchase 7',
                total: 13.00,
                orderNumber: 'A008281',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Luis Gomez',
                    shippingAddress: '1234 W State st.'

                }
            },
            {
                id: 7,
                title: 'Purchase 8',
                total: 1.00,
                orderNumber: 'A008282',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Luis Gomez',
                    shippingAddress: '1234 W State st.'

                }
            }
        ]
    })
}

