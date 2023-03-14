import { RootState } from '../store';
export const getPosts = (state: RootState) => state.posts.entities;
export const getFetchStatus = (state: RootState) => state.posts.fetchStatus;
export const getPostsUpdating = (state: RootState) => state.posts.postsUpdating;
