import { userSlice } from '../reducers/auth';
export { getGoogleUser } from '../thunks/auth';

export const { setUserToken } = userSlice.actions;
