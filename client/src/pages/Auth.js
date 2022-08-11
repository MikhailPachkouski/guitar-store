import React, { useContext, useState } from 'react';
import { Button, Card, Container, Form, FormControl } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { login, registration } from '../http/userAPI';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';

const Auth = observer(() => {
	const { user } = useContext(Context);
	const navigate = useNavigate();
	const location = useLocation();
	const isLogin = location.pathname === LOGIN_ROUTE;

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const click = async () => {
		try {
			let data;
			if (isLogin) {
				data = await login(email, password);
			} else {
				data = await registration(email, password);
			}
			user.setUser(user); // data.user
			user.setIsAuth(true);
			navigate(SHOP_ROUTE);
		} catch (error) {
			console.log(error);
			alert(error.message);
		}
	};

	return (
		<Container
			className='d-flex justify-content-center align-items-center'
			style={{ height: window.innerHeight - 54 }}>
			<Card style={{ width: 600 }} className='p-5'>
				<h2 style={{ textAlign: 'center' }}>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
				<Form className='d-flex flex-column'>
					<FormControl
						className='mt-3'
						placeholder='Введите ваш email...'
						value={email}
						onChange={e => setEmail(e.target.value)}
						type='email'
					/>
					<FormControl
						className='mt-3'
						placeholder='Введите пароль...'
						value={password}
						onChange={e => setPassword(e.target.value)}
						type='password'
					/>
					{isLogin ? (
						<div className='d-flex justify-content-between'>
							<Button
								style={{ width: 180 }}
								className='mt-3'
								variant='outline-info'
								onClick={() => navigate(REGISTRATION_ROUTE)}>
								Зарегистрироваться
							</Button>
							<Button
								style={{ width: 180 }}
								className='mt-3'
								variant='outline-success'
								onClick={() => click()}>
								Войти
							</Button>
						</div>
					) : (
						<div className='d-flex justify-content-between'>
							<Button
								style={{ width: 180 }}
								className='mt-3'
								variant='outline-info'
								onClick={() => navigate(LOGIN_ROUTE)}>
								Авторизация
							</Button>
							<Button
								style={{ width: 180 }}
								className='mt-3'
								variant='outline-success'
								onClick={() => click()}>
								Регистрация
							</Button>
						</div>
					)}
				</Form>
			</Card>
		</Container>
	);
});

export default Auth;
