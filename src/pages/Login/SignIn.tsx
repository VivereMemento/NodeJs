import { useGoogleLogin } from '@react-oauth/google';
import { useEffect } from 'react';
import { Form, Navigate } from 'react-router-dom';
import { googleAuth } from '../../api/googleApi';
import { TextInput } from '../../components/UI/Input/Input';
import { useLocalStorage } from '../../hooks/localStorage';
import {
	initialProfileAccessState,
	PROFILE,
	Profile,
} from '../../model/localStorage';

const SignIn = () => {
	const { storedValue: profile, setValue: setProfile } =
		useLocalStorage<Profile>(PROFILE, {
			access: initialProfileAccessState,
			user: undefined,
		});

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

	if (profile.user) {
		return <Navigate to="/" replace />;
	}

	return (
		<Form className="signin" method="post" action="/events">
			<label htmlFor="email">
				Email:
				<TextInput placeholder="" value="" name="email" />
			</label>
			<label htmlFor="password">
				Password:
				<TextInput type="password" placeholder="" value="" name="password" />
			</label>
			<button type="submit">Sign In</button>
			<button type="button" onClick={() => login()}>
				Sign In with Google
			</button>
		</Form>
	);
};

export default SignIn;
