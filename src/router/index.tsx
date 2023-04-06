import { GoogleOAuthProvider } from '@react-oauth/google';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { store } from '../store/store';
import routes from './routes';

export const Router = () => {
	return (
		<GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
			<Provider store={store}>
				<RouterProvider router={routes} />
			</Provider>
		</GoogleOAuthProvider>
	);
};
