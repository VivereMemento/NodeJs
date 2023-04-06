import { Form } from 'react-router-dom';
import { TextInput } from '../../components/UI/Input/Input';

const SIGN_UP_FORM = {
	firstname: 'firstname',
	lastname: 'lastname',
	email: 'email',
	password: 'password',
	repeatPassword: 'repeatPassword',
} as const;

type SignUpFormKeys = keyof typeof SIGN_UP_FORM;

const initialSignUpFormState: Record<SignUpFormKeys, string> = {
	firstname: '',
	lastname: '',
	email: '',
	password: '',
	repeatPassword: '',
};
const signUpFormEntries = Object.entries(
	initialSignUpFormState
) as ReadonlyArray<[SignUpFormKeys, string]>;

const setInitialSignUpFormState = (key: SignUpFormKeys) => (value: string) => {
	initialSignUpFormState[key] = value;
};

const SignUp = () => {
	return (
		<Form
			className="signup"
			method="post"
			onSubmit={() => console.log(initialSignUpFormState)}
		>
			{signUpFormEntries.map(([key, value]) => {
				return (
					<label key={key} htmlFor={key}>
						<span className="signup__label">{key}:</span>
						<TextInput
							getValue={setInitialSignUpFormState(key)}
							placeholder=""
							value={value}
							name={key}
						/>
					</label>
				);
			})}
			<button type="submit">Sign Up</button>
		</Form>
	);
};

export default SignUp;
