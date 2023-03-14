import { FC, PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute: FC<PropsWithChildren> = ({ children }) => {
	const user = null;

	if (!user) {
		return <Navigate to="/login" replace />;
	}

	return <div>{children}</div>;
};

export default ProtectedRoute;
