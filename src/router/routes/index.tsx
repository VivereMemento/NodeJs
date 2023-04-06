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
		element: <Login />,
	},
]);

export default routes;
