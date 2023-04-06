import { User } from './user';

export type ProfileAccess = {
	access_token: string;
	expires_in: number;
};

export type Profile = {
	access: ProfileAccess;
	user?: User;
};

export const PROFILE = 'profile';

export const initialProfileState: Profile = {
	access: {
		access_token: '',
		expires_in: 0,
	},
};
