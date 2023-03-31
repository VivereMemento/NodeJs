import { Form } from 'react-router-dom';
import { TextInput } from '../../components/UI/Input/Input';

const SignUp = () => {
	return (
		<Form className="signup" method="post" action="/events">
			<label htmlFor="firstname">
				Firstname:
				<TextInput placeholder="" value="" name="firstname" />
			</label>
			<label htmlFor="lastname">
				Lastname:
				<TextInput placeholder="" value="" name="lastname" />
			</label>
			<label htmlFor="email">
				Email:
				<TextInput placeholder="" value="" name="email" />
			</label>
			<label htmlFor="password">
				Password:
				<TextInput type="password" placeholder="" value="" name="password" />
			</label>
			<label htmlFor="repeat-password">
				Repeat password:
				<TextInput
					type="password"
					placeholder=""
					value=""
					name="repeat-password"
				/>
			</label>
			<button type="submit">Sign Up</button>
		</Form>
	);
};

export default SignUp;
