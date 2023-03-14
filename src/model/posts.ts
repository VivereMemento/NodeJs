import { StatusCode } from './error';

export type Post = Omit<Protocol.Post, '_id'> & { id: number };
export type Posts = ReadonlyArray<Post>;
export type PostUpdatingTypes = 'idle' | 'creating' | 'deleting' | 'editing';

export type PostsState = {
	entities: Posts;
	postsUpdating: {
		id: Post['id'] | undefined;
		type: PostUpdatingTypes;
		isActive: boolean;
		isError: boolean;
	};
};

export type Memory = Omit<
	Protocol.Post,
	'_id' | 'selectedFile' | 'likeCount' | 'createdAt' | 'tags'
>;

export type MemoryWithFiles = Memory & {
	tags: [];
	selectedFile: string;
};

export type MemoryEditing = Omit<Memory, 'creator'> &
	Pick<Protocol.Post, '_id'>;

export const POST_UPDATING_TYPES_LIST: Record<
	PostUpdatingTypes,
	PostUpdatingTypes
> = {
	idle: 'idle',
	creating: 'creating',
	deleting: 'deleting',
	editing: 'editing',
};
