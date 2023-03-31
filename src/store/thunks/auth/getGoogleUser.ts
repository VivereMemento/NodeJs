import { createAsyncThunk } from '@reduxjs/toolkit';

import { googleAuth } from '../../../api/googleApi';
import { PostsBuilder } from './types';

export const getGoogleUser = createAsyncThunk(
	'auth/getGoogleUser',
	async (token: string) => {
		const { data } = await googleAuth(token);
		return data;
	}
);

export const getGoogleUserBuilder = (builder: PostsBuilder) => {
	builder.addCase(getGoogleUser.fulfilled, (state, action) => {
		state.user = action.payload;
	});
};
