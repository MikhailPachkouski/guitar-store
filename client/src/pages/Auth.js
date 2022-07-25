import React from 'react';
import { Button, Card, Container, Form, FormControl } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';

function Auth() {
	const navigate = useNavigate()
	const location = useLocation()
	const isLogin = location.pathname === LOGIN_ROUTE


	return (
		<Container
			className='d-flex justify-content-center align-items-center'
			style={{ height: window.innerHeight - 54 }}>
			<Card style={{ width: 600 }} className='p-5'>
				<h2 style={{ textAlign: 'center' }}>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
				<Form className='d-flex flex-column'>
					<FormControl className='mt-3' placeholder='Введите имя пользователя...' />
					<FormControl className='mt-3' placeholder='Введите пароль...' />
					{isLogin ?
						<div className='d-flex justify-content-between'>
						<Button style={{ width: 180 }} className='mt-3' variant='outline-info'
						onClick={() => navigate(REGISTRATION_ROUTE)}>
							Зарегистрироваться
						</Button>
						<Button style={{ width: 180 }} className='mt-3' variant='outline-success'>
							Войти
						</Button>
					</div>
					:
					<div className='d-flex justify-content-between'>
						<Button style={{ width: 180 }} className='mt-3' variant='outline-info'
						onClick={() => navigate(LOGIN_ROUTE)}>
							Авторизация
						</Button>
						<Button style={{ width: 180 }} className='mt-3' variant='outline-success'>
							Регистрация
						</Button>
					</div>}
				</Form>
			</Card>
		</Container>
	);
}

export default Auth;
