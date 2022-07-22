import Admin from "./pages/Admin"
import Auth from "./pages/Auth"
import Basket from "./pages/Basket"
import InstrumentPage from "./pages/InstrumentPage"
import Shop from "./pages/Shop"
import { ADMIN_ROUTE, BASKET_ROUTE, INSTRUMENT_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "./utils/consts"

export const authRotes = [
	{
		path: ADMIN_ROUTE,
		Component: Admin
	},
	{
		path: BASKET_ROUTE,
		Component: Basket
	},
]

export const publicRoutes = [
	{
		path: SHOP_ROUTE,
		Component: Shop
	},
	{
		path: LOGIN_ROUTE,
		Component: Auth
	},
	{
		path: REGISTRATION_ROUTE,
		Component: Auth
	},
	{
		path: INSTRUMENT_ROUTE + '/:id',
		Component: InstrumentPage
	},
]