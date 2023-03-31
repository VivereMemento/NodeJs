import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { initialUserState } from '../../model/user';
import { getGoogleUserBuilder } from '../thunks/auth';

export const userSlice = createSlice({
	name: 'auth',
	initialState: initialUserState,
	reducers: {
		setUserToken: (state, action: PayloadAction<string>) => {
			state.token = action.payload;
		},
	},
	extraReducers: builder => {
		getGoogleUserBuilder(builder);
	},
});

export default userSlice.reducer;
