import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Context } from '..';
import Shop from '../pages/Shop';
import { authRotes, publicRoutes } from '../routes';


function AppRouter() {
const {user} = useContext(Context)

console.log(user);

	return (
		<Routes>
			{user.isAuth &&
				authRotes.map(({ path, Component }) => (
					<Route key={path} path={path} element={<Component />} exact />
				))}
			{publicRoutes.map(({ path, Component }) => (
				<Route key={path} path={path} element={<Component />} exact />
			))}
			<Route path='*' element={<Shop />} />
		</Routes>
	);
}

export default AppRouter;
