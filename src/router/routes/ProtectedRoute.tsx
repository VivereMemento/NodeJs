import { FC, PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { useLocalStorage } from '../../hooks/localStorage';
import { PROFILE } from '../../model/localStorage';
import { getUser } from '../../store/selectors/auth';

const ProtectedRoute: FC<PropsWithChildren> = ({ children }) => {
	const { storedValue: profile } = useLocalStorage(PROFILE, { user: null });

	if (!profile.user) {
		return <Navigate to="/auth" replace />;
	}

	return <div>{children}</div>;
};

export default ProtectedRoute;
