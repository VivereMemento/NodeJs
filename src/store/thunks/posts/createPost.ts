import { createAsyncThunk } from '@reduxjs/toolkit';
import {
	MemoryWithFiles,
	POST_UPDATING_TYPES_LIST,
} from '../../../model/posts';

import api$ from '../../../api';
import { BASE_URL } from '../../../model/api';
import { initialPostsState } from '../../reducers/posts';
import { mapPostFromServer } from './helpers';
import { PostsBuilder } from './types';

export const createPost = createAsyncThunk(
	'posts/createPost',
	async (data: MemoryWithFiles) => {
		const response = await api$.post<Protocol.Post>(`${BASE_URL}/posts`, data);

		// if (response.status === 400) {
		// 	throw new Error('Bad request');
		// }

		return mapPostFromServer(response.data);
	}
);

export const createPostBuilder = (builder: PostsBuilder) => {
	const updating = {
		...initialPostsState.postsUpdating,
		type: POST_UPDATING_TYPES_LIST.creating,
	};
	builder.addCase(createPost.pending, state => {
		state.postsUpdating = {
			...updating,
			isActive: true,
		};
	});
	builder.addCase(createPost.fulfilled, (state, action) => {
		state.entities.push(action.payload);
		state.postsUpdating = {
			...initialPostsState.postsUpdating,
		};
	});
	builder.addCase(createPost.rejected, state => {
		state.postsUpdating = {
			...updating,
			isError: true,
		};
	});
};
