import { createAsyncThunk } from '@reduxjs/toolkit';
import { POST_UPDATING_TYPES_LIST } from '../../../model/posts';

import api$ from '../../../api';
import { BASE_URL } from '../../../model/api';
import { initialPostsState } from '../../reducers/posts';
import { PostsBuilder } from './types';

export const deletePost = createAsyncThunk(
	'posts/deletePost',
	async (data: Pick<Protocol.Post, '_id'>) => {
		const response = await api$.delete<Protocol.Post>(
			`${BASE_URL}/posts/${data._id}`
		);

		if (response.status === 204) {
			throw new Error('No content');
		}

		return data._id;
	}
);

export const deletePostBuilder = (builder: PostsBuilder) => {
	const updating = {
		...initialPostsState.postsUpdating,
		type: POST_UPDATING_TYPES_LIST.deleting,
	};

	builder.addCase(deletePost.pending, (state, action) => {
		state.postsUpdating = {
			...updating,
			isActive: true,
			id: action.meta.arg._id,
		};
	});
	builder.addCase(deletePost.fulfilled, (state, action) => {
		state.entities = state.entities.filter(
			entity => entity.id !== action?.payload
		);
		state.postsUpdating = initialPostsState.postsUpdating;
	});
	builder.addCase(deletePost.rejected, (state, action) => {
		state.postsUpdating = {
			...updating,
			isError: true,
			id: action.meta.arg._id,
		};
	});
};
