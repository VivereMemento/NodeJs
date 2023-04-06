import { FC } from 'react';
import { LogoutButton } from '../../Logout/LogoutButton';

import './header.css';

type HeaderProps = {
	title: string;
};

const Header: FC<HeaderProps> = ({ title }) => {
	return (
		<header className="header">
			<h3>{title}</h3>
			<LogoutButton />
		</header>
	);
};

export default Header;
