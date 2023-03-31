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

export const initialProfileAccessState: ProfileAccess = {
	access_token: '',
	expires_in: 0,
};
