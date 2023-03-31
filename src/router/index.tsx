import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { store } from '../store/store';
import routes from './routes';

export const Router = () => {
	return (
		<Provider store={store}>
			<RouterProvider router={routes} />
		</Provider>
	);
};
