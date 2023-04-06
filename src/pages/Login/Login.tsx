import { useCallback, useState } from 'react';
import { Button } from '../../components/UI/Button/Button';
import SignIn from './SignIn';
import SignUp from './SignUp';

import './login.css';

const Login = () => {
	const [isSignIn, toggleIsSignIn] = useState(true);
	const handleOnClick = useCallback(() => toggleIsSignIn(prev => !prev), []);
	return (
		<div className="login">
			{isSignIn ? (
				<>
					<SignIn />
					<div>
						Don't have an account
						<Button type="button" onClick={handleOnClick}>
							Sign Up
						</Button>
					</div>
				</>
			) : (
				<>
					<SignUp />
					<div>
						Already have an account
						<Button type="button" onClick={handleOnClick}>
							Sign In
						</Button>
					</div>
				</>
			)}
		</div>
	);
};

export default Login;
