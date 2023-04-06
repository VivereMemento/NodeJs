import { googleLogout } from '@react-oauth/google';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../../hooks/localStorage';
import { initialProfileState, PROFILE } from '../../model/localStorage';
import { Button } from '../UI/Button/Button';

export const LogoutButton = () => {
	const navigate = useNavigate();
	const { storedValue: profile, setValue: setProfile } = useLocalStorage(
		PROFILE,
		initialProfileState
	);

	const handleOnClick = () => {
		googleLogout();
		setProfile(initialProfileState);
	};

	useEffect(() => {
		if (!profile.user) {
			navigate('/auth');
		}
	}, [profile.user]);

	return (
		<Button type="button" onClick={handleOnClick}>
			Logout
		</Button>
	);
};
