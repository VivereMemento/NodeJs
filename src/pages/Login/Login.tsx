import { useCallback, useState } from 'react';
import { Button } from '../../components/UI/Button/Button';
import SignIn from './SignIn';
import SignUp from './SignUp';

import './login.css';

const Login = () => {
	const [isAuth, setIsAuth] = useState(true);
	const handleOnClick = useCallback(() => setIsAuth(prev => !prev), []);
	return (
		<div className="login">
			;{isAuth ? <SignIn /> : <SignUp />}
			{isAuth ? (
				<div>
					Don't have an account
					<Button type="button" onClick={handleOnClick}>
						Sign Up
					</Button>
				</div>
			) : (
				<div>
					Already have an account
					<Button type="button" onClick={handleOnClick}>
						Sign In
					</Button>
				</div>
			)}
		</div>
	);
};

export default Login;
