import { createAsyncThunk } from '@reduxjs/toolkit';

import api$ from '../../../api';
import { BASE_URL } from '../../../model/api';
import { FETCH_STATUS_LIST } from '../../../model/fetch-status';
import { mapPostFromServer } from './helpers';
import { PostsBuilder } from './types';

export const getAllPosts = createAsyncThunk('posts/fetchPosts', async () => {
	const response = await api$.get<ReadonlyArray<Protocol.Post>>(
		`${BASE_URL}/posts`
	);
	return response.data.map(mapPostFromServer);
});

export const getAllPostsBuilder = (builder: PostsBuilder) => {
	builder.addCase(getAllPosts.pending, state => {
		state.fetchStatus = FETCH_STATUS_LIST.Loading;
	});
	builder.addCase(getAllPosts.fulfilled, (state, action) => {
		state.fetchStatus = FETCH_STATUS_LIST.Resolved;
		state.entities = action.payload;
	});
	builder.addCase(getAllPosts.rejected, state => {
		state.fetchStatus = FETCH_STATUS_LIST.Rejected;
	});
};
