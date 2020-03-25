import {
    SET_USER_PURCHASES
} from './types';

export function fetchUserPurchases(){
    return ({
        type: SET_USER_PURCHASES,
        payload: [
            {
                id: 0,
                title: 'Purchase 1',
                total: 8.02,
                orderNumber: 'A008275',
                orderDate: new Date(),
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
                orderDate: new Date(),
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
                orderDate: new Date(),
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
                orderDate: new Date(),
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
                orderDate: new Date(),
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
                orderDate: new Date(),
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
                orderDate: new Date(),
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
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Luis Gomez',
                    shippingAddress: '1234 W State st.'

                }
            }
        ]
    })
}