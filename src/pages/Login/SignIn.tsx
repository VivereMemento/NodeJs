import { Form, Navigate } from 'react-router-dom';
import { TextInput } from '../../components/UI/Input/Input';

import { useGoogleAuth } from '../../hooks/google';

const initialSignInFormState = {
	email: '',
	password: '',
};

type SignInFormKeys = keyof typeof initialSignInFormState;

const setInitialSignInFormState = (key: SignInFormKeys) => (value: string) => {
	initialSignInFormState[key] = value;
};

const SignIn = () => {
	const { profile, login } = useGoogleAuth();

	if (profile.user) {
		return <Navigate to="/" replace />;
	}

	return (
		<Form
			className="signin"
			method="post"
			onSubmit={() => console.log(initialSignInFormState)}
		>
			<label htmlFor="email">
				Email:
				<TextInput
					getValue={setInitialSignInFormState('email')}
					placeholder=""
					value=""
					name="email"
				/>
			</label>
			<label htmlFor="password">
				Password:
				<TextInput
					getValue={setInitialSignInFormState('password')}
					type="password"
					placeholder=""
					value=""
					name="password"
				/>
			</label>
			<button type="submit">Sign In</button>
			<button type="button" onClick={() => login()}>
				Sign In with Google
			</button>
		</Form>
	);
};

export default SignIn;
