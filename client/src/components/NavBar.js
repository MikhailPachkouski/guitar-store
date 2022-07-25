import React, { useContext } from 'react';
import { Context } from '../index';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { SHOP_ROUTE } from '../utils/consts';
import { Button } from 'react-bootstrap';

const NavBar = () => {
	const { user } = useContext(Context);
	return (
		<>
			<Navbar bg='dark' variant='dark'>
				<Container>
					<NavLink style={{ color: 'green' }} to={SHOP_ROUTE}>
						Guitar Store
					</NavLink>
					{user.isAuth ? 
          <Nav className='ml-auto' style={{ color: 'white' }}>
						<Button variant={'outline-light'}>Админ панель</Button>
						<Button variant={'outline-light'} className="ms-2">Выйти</Button>
					</Nav>
          :
          <Nav className='ml-auto' style={{ color: 'white' }}>
						<Button variant={'outline-light'}>Авторизация</Button>
					</Nav>
          }
				</Container>
			</Navbar>
		</>
	);
};

export default NavBar;
