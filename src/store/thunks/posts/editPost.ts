import { createAsyncThunk } from '@reduxjs/toolkit';
import { MemoryEditing, POST_UPDATING_TYPES_LIST } from '../../../model/posts';

import api$ from '../../../api';
import { BASE_URL } from '../../../model/api';
import { initialPostsState } from '../../reducers/posts';
import { mapPostFromServer } from './helpers';
import { PostsBuilder } from './types';

export const editPost = createAsyncThunk(
	'posts/editPost',
	async (data: MemoryEditing) => {
		const response = await api$.put<Protocol.Post>(`${BASE_URL}/posts`, data);

		if (response.status === 204) {
			throw new Error('No content');
		}

		return mapPostFromServer(response.data);
	}
);

export const editPostBuilder = (builder: PostsBuilder) => {
	const updating = {
		...initialPostsState.postsUpdating,
		type: POST_UPDATING_TYPES_LIST.editing,
	};
	builder.addCase(editPost.pending, (state, action) => {
		state.postsUpdating = {
			...updating,
			isActive: true,
			id: action.meta.arg._id,
		};
	});
	builder.addCase(editPost.fulfilled, (state, action) => {
		state.entities = state.entities.map(entity => {
			if (entity.id === action.meta.arg._id) {
				return action.payload;
			}

			return entity;
		});
		state.postsUpdating = {
			...initialPostsState.postsUpdating,
		};
	});
	builder.addCase(editPost.rejected, (state, action) => {
		state.postsUpdating = {
			...updating,
			id: action.meta.arg._id,
			isError: true,
		};
	});
};
