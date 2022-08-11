import React, { useContext } from 'react';
import { Context } from '../index';
import {observer} from 'mobx-react-lite'


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { Button } from 'react-bootstrap';

const NavBar = observer( () => {
	const { user } = useContext(Context);
	const navigate = useNavigate();

	const logout = () => {
		user.setUser({});
		user.setIsAuth(false);
	};

	return (
		<>
			<Navbar bg='dark' variant='dark'>
				<Container>
					<NavLink style={{ color: 'green' }} to={SHOP_ROUTE}>
						Guitar Store
					</NavLink>
					{user.isAuth ? (
						<Nav className='ml-auto' style={{ color: 'white' }}>
							<Button variant={'outline-light'} onClick={() => navigate(ADMIN_ROUTE)}>
								Админ панель
							</Button>
							<Button
								variant={'outline-light'}
								onClick={() => logout()}
								className='ms-2'>
								Выйти
							</Button>
						</Nav>
					) : (
						<Nav className='ml-auto' style={{ color: 'white' }}>
							<Button variant={'outline-light'} onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</Button>
						</Nav>
					)}
				</Container>
			</Navbar>
		</>
	);
});

export default NavBar;
