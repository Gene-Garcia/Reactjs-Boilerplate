import routeConsts from '../../../../shared/constants/routes'
import Shop from './index'

import itemDetailsRoute from './screens/Item_Details/route';

export default {
    path: routeConsts.SHOP.path,
    component: Shop,
    exact: true,
    routes: [
        itemDetailsRoute
    ]
}