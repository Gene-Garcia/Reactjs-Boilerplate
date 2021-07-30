
const r = {
    HOME: {
        name: 'Home',
        path: '/home'
    },
    SHOP: {
        name: 'Shop',
        path: '/shop',
        subroutes: {
            ITEM_DETAILS: {
                name: 'Item Details',
                path: '/shop/details/item/:id'
            }
        }
    },
    ABOUT: {
        name: 'About',
        path: '/about'
    }
}

export default r