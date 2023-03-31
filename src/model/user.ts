export type User = {
	email: string;
	family_name: string;
	given_name: string;
	id: string;
	name: string;
	picture: string;
};

export type UserState = {
	token: string;
	user: User;
};

export const initialUserState: UserState = {
	user: {
		email: '',
		family_name: '',
		given_name: '',
		id: '',
		name: '',
		picture: '',
	},
	token: '',
};
