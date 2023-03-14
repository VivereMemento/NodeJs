import { postsSlice } from '../reducers/posts';

export { createPost, deletePost, editPost, getAllPosts } from '../thunks/posts';
export const { example } = postsSlice.actions;
