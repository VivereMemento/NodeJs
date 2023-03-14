import { Form } from 'react-router-dom';

const Login = () => {
	return (
		<Form method="post" action="/events">
			<label htmlFor="email">
				Email:
				<input type="text" name="email" />
			</label>
			<label htmlFor="password">
				Password:
				<input type="password" name="password" />
			</label>
			<button type="submit">Create</button>
		</Form>
	);
};

export default Login;
