import { $host, $authHost } from '.';
import jwt_decode from 'jwt-decode';

export const registration = async (email, password) => {
	try {
		const  response = await $host.post('api/user/registration', { email, password, role: 'ADMIN' });
		console.log(response);
		return jwt_decode(response.data);
	} catch (error) {
		console.log(error);
	}
};

export const login = async (email, password) => {
	const {data}  = await $host.post('api/user/login', { email, password });
	localStorage.setItem('token', data)
	return jwt_decode(data);
};

export const check = async () => {
	const {data} = await $authHost.get('api/user/auth')
	localStorage.setItem('token', data)
	return jwt_decode(data)
}
