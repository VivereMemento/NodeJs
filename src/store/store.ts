import { configureStore } from '@reduxjs/toolkit';
import auth from './reducers/auth';
import posts from './reducers/posts';

export const store = configureStore({
	reducer: {
		posts,
		auth,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
