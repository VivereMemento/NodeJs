import { Provider } from 'react-redux';
import { createBrowserRouter } from 'react-router-dom';

import App from '../../App';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';
import Login from '../../pages/Login/Login';

import { store } from '../../store/store';
import ProtectedRoute from './ProtectedRoute';

const routes = createBrowserRouter([
	{
		path: '/',
		element: (
			<Provider store={store}>
				<ProtectedRoute>
					<App />
				</ProtectedRoute>
			</Provider>
		),
		errorElement: <ErrorPage />,
	},
	{
		path: 'login',
		element: <Login />,
	},
]);

export default routes;
