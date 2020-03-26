import {
    // SET_SHOP_CATEGORIES
    SET_NAVBAR_LINKS
} from './types';

export function fetchShopCategories() {
    return({
        type: SET_NAVBAR_LINKS,
        payload: [
            {
                id: 0,
                title: 'All'
            },
            {
                id: 1,
                title: 'Javascript'
            },
            {
                id: 2,
                title: 'UI/UX'
            },
            {
                id: 3,
                title: 'Linux'
            },
            {
                id: 4,
                title: 'Python'
            },
            {
                id: 5,
                title: 'UML'
            },
            {
                id: 6,
                title: 'Ruby'
            }
        ]
    })
}