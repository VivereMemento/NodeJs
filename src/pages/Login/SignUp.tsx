import { Form } from 'react-router-dom';
import { TextInput } from '../../components/UI/Input/Input';
import { formFieldsState } from '../../components/UI/Input/helpers';

const initialSignUpFormState = {
	firstname: '',
	lastname: '',
	email: '',
	password: '',
	repeatPassword: '',
};

const { fields, fieldsEntries, setFieldValue } = formFieldsState(
	initialSignUpFormState
);

const SignUp = () => {
	return (
		<Form className="signup" method="post" onSubmit={() => console.log(fields)}>
			{fieldsEntries.map(([key, value]) => {
				return (
					<label key={key} htmlFor={key}>
						<span className="signup__label">{key}:</span>
						<TextInput
							passValueToParent={setFieldValue(key)}
							placeholder=""
							value={value}
							name={key}
							type={
								key === 'password' || key === 'repeatPassword'
									? 'password'
									: 'text'
							}
						/>
					</label>
				);
			})}
			<button type="submit">Sign Up</button>
		</Form>
	);
};

export default SignUp;
