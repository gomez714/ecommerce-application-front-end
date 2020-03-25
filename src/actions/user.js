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
                amount: 8.02
            },
            {
                id: 1,
                title: 'Purchase 2',
                amount: 19.02
            },
            {
                id: 2,
                title: 'Purchase 3',
                amount: 11.00
            }
        ]
    })
}