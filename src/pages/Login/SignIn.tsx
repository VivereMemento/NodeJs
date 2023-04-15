import { Form, Navigate } from 'react-router-dom';
import { TextInput } from '../../components/UI/Input/Input';
import { formFieldsState } from '../../components/UI/Input/helpers';

import { useGoogleAuth } from '../../hooks/google';

const initialSignInFormState = {
	email: '',
	password: '',
};

const { fields, fieldsEntries, setFieldValue } = formFieldsState(
	initialSignInFormState
);

const SignIn = () => {
	const { profile, login } = useGoogleAuth();

	if (profile.user) {
		return <Navigate to="/" replace />;
	}

	return (
		<Form className="signin" method="post" onSubmit={() => console.log(fields)}>
			{fieldsEntries.map(([key, value]) => (
				<label key={key} htmlFor="email">
					<span className="signup__label">{key}:</span>
					<TextInput
						passValueToParent={setFieldValue(key)}
						placeholder=""
						value={value}
						name={key}
						type={key === 'password' ? 'password' : 'text'}
					/>
				</label>
			))}
			<button type="submit">Sign In</button>
			<button type="button" onClick={() => login()}>
				Sign In with Google
			</button>
		</Form>
	);
};

export default SignIn;
