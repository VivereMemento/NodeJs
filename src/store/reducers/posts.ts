import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { FetchStatus, FETCH_STATUS_LIST } from '../../model/fetch-status';
import { Post, PostsState } from '../../model/posts';
import {
	createPostBuilder,
	deletePostBuilder,
	editPostBuilder,
	getAllPostsBuilder,
} from '../thunks/posts';

export const initialPostsState: PostsState & FetchStatus = {
	entities: [],
	postsUpdating: {
		type: 'idle',
		id: undefined,
		isActive: false,
		isError: false,
	},
	fetchStatus: FETCH_STATUS_LIST.Idle,
};

export const postsSlice = createSlice({
	name: 'posts',
	initialState: initialPostsState,
	reducers: {
		example: (state, action: PayloadAction<Post>) => {
			state.entities.push(action.payload);
		},
	},
	extraReducers: builder => {
		getAllPostsBuilder(builder);
		deletePostBuilder(builder);
		createPostBuilder(builder);
		editPostBuilder(builder);
	},
});

export default postsSlice.reducer;
