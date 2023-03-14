import axios from 'axios';
import { BASE_URL } from '../model/api';
// import { Auth } from '../models/localStorage';

const $api = axios.create({
	withCredentials: true,
	baseURL: BASE_URL,
});

$api.interceptors.request.use(config => {
	// const auth = window.localStorage.getItem(AUTH);
	// const { accessToken } = JSON.parse(auth ?? '');

	// if (config.headers && accessToken) {
	// 	config.headers.Authorization = `Bearer ${accessToken}`;
	// }

	return config;
});

// $api.interceptors.response.use(
// 	response => {
// 		return response;
// 	},
// 	async function (error) {
// 		const originalRequest = error.config;

// 		if (error.response.status === 403 && !originalRequest._retry) {
// 			originalRequest._retry = true;
// 			const response = await $api.get<Auth>(`${BASE_URL}/api/refresh`);
// 			const { data } = response;
// 			const { accessToken, roles } = data;
// 			window.localStorage.setItem(AUTH, JSON.stringify({ accessToken, roles }));

// 			return $api(originalRequest);
// 		}
// 		return Promise.reject(error);
// 	}
// );

export default $api;
