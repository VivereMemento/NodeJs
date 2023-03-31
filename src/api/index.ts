import axios from 'axios';
import { BASE_URL } from '../model/api';
import { Profile, PROFILE } from '../model/localStorage';

const $api = axios.create({
	withCredentials: true,
	baseURL: BASE_URL,
});

$api.interceptors.request.use(config => {
	const profile: Profile = JSON.parse(
		window.localStorage.getItem(PROFILE) ?? ''
	);
	const { access } = profile;
	const { access_token } = access;

	if (config.headers && access_token) {
		config.headers.Authorization = `Bearer ${access_token}`;
	}

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
