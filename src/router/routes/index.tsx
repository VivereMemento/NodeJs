import { GoogleOAuthProvider } from '@react-oauth/google';
import { createBrowserRouter } from 'react-router-dom';

import App from '../../App';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';
import Login from '../../pages/Login/Login';

import ProtectedRoute from './ProtectedRoute';

const routes = createBrowserRouter([
	{
		path: '/',
		element: (
			<ProtectedRoute>
				<App />
			</ProtectedRoute>
		),
		errorElement: <ErrorPage />,
	},
	{
		path: 'auth',
		element: (
			<GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
				<Login />
			</GoogleOAuthProvider>
		),
	},
]);

export default routes;
