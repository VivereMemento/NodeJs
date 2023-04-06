import { useGoogleLogin } from '@react-oauth/google';
import { useEffect } from 'react';
import { googleAuth } from '../api/googleApi';
import { PROFILE, Profile, initialProfileState } from '../model/localStorage';
import { useLocalStorage } from './localStorage';

export const useGoogleAuth = () => {
	const { storedValue: profile, setValue: setProfile } =
		useLocalStorage<Profile>(PROFILE, initialProfileState);

	const login = useGoogleLogin({
		onSuccess: async codeResponse => {
			const { user } = profile;
			setProfile({ access: codeResponse, user });
		},
	});

	useEffect(() => {
		const { access } = profile;
		const { access_token } = access;
		const getGoogleUser = async (token: string) => {
			const { data: user } = await googleAuth(token);
			setProfile({ access, user });
		};

		if (access_token) {
			getGoogleUser(access_token);
		}
	}, [profile.access]);

	return {
		profile,
		login,
	};
};
