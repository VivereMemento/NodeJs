import $api from '.';
import { User } from '../model/user';

export const googleAuth = async (access_token: string) => {
	const response = await $api.get<User>(
		`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${access_token}`,
		{
			withCredentials: false,
			headers: {
				Accept: 'application/json',
			},
		}
	);

	return response;
};
