import { $host, $authHost } from '.';

export const createType = async (type) => {
	const { data } = await $authHost.post('api/type', type);
	return data;
};

export const fetchTypes = async () => {
	const { data } = await $host.get('api/type');
	return data;
};

export const createBrand = async (brand) => {
	const { data } = await $authHost.post('api/brand', brand);
	return data;
};

export const fetchBrands = async () => {
	const { data } = await $host.get('api/brand');
	return data;
};

export const createInstrument = async (instrument) => {
	const { data } = await $authHost.post('api/instrument', instrument);
	return data;
};

export const fetchInstruments = async () => {
	const { data } = await $host.get('api/instrument');
	return data;
};

export const fetchOneInstrument = async (id) => {
	const { data } = await $host.get('api/instrument/' + id);
	return data;
};