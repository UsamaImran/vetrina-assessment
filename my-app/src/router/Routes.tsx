import { Routes as RouterRoutes, Route } from 'react-router-dom'
import { SIDEBAR_MENUS } from '../constants/gobalConsts'
import Home from '../pages/Home'

//elements has to be from 'pages' directory
const Routes = () => {
    return (
        <RouterRoutes>
            {SIDEBAR_MENUS.map((menu) => (
                <Route path={menu.route} element={<Home />} key={menu.id} />
            ))}
        </RouterRoutes>
    )
}

export default Routes
