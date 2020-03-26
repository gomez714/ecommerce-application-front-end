import {
    SET_SHOP_CATEGORIES,
    SET_SHOP_PRODUCTS,
    SET_NAVBAR_LINKS,
    FILTER_PRODUCTS_WITH_ID,
    FILTER_PRODUCTS_WITH_QUERY
} from './types';

export function filterProductsWithCategoryId(id) {
    return({
        type: FILTER_PRODUCTS_WITH_ID,
        payload: id
    })
}

export function filterWithQuery(fields){
    return({
        type: FILTER_PRODUCTS_WITH_QUERY,
        payload: fields
    })
}

export function fetchShopCategories() {
    return({
        type: SET_SHOP_CATEGORIES, 
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

export function fetchShopProducts() {
    return({
        type: SET_SHOP_PRODUCTS,
        payload: [
            {
                id: 0,
                title: 'Javascript in the browser',
                description: 'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start. The running speed starts slowly, but gets faster each minute after you hear this signal',
                amount: 1.99,
                belongsTo: [0, 1]
                
            },
            {
                id: 1,
                title: 'Graph Database',
                description: 'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start. The running speed starts slowly, but gets faster each minute after you hear this signal',
                amount: 1.99,
                belongsTo: [0, 6]
            },
            {
                id: 2,
                title: 'Full Stack Development',
                description: 'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start. The running speed starts slowly, but gets faster each minute after you hear this signal',
                amount: 1.99,
                belongsTo: [0, 1, 4]
            },
            {
                id: 3,
                title: 'User interface Design',
                description: 'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start. The running speed starts slowly, but gets faster each minute after you hear this signal',
                amount: 1.99,
                belongsTo: [0, 2]
            },
            {
                id: 4,
                title: 'Javascript Development',
                description: 'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start. The running speed starts slowly, but gets faster each minute after you hear this signal',
                amount: 1.99,
                belongsTo: [0, 1]
            },
            {
                id: 5,
                title: 'User Experience Design',
                description: 'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start. The running speed starts slowly, but gets faster each minute after you hear this signal',
                amount: 1.99,
                belongsTo: [0, 2]
            },
            {
                id: 6,
                title: 'Advanced OOP',
                description: 'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start. The running speed starts slowly, but gets faster each minute after you hear this signal',
                amount: 1.99,
                belongsTo: [0, 6]
            }
        ]
    })
}