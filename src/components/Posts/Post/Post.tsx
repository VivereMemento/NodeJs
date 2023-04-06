import { FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import {
	POST_UPDATING_TYPES_LIST,
	Post as PostType,
} from '../../../model/posts';
import { deletePost } from '../../../store/actions/posts';
import { getPostsUpdating } from '../../../store/selectors/posts';
import { EditMemory } from '../../EditMemory/EditMemory';
import { Button } from '../../UI/Button/Button';

import './post.css';

type PostProps = Readonly<{
	post: PostType;
}>;

export const Post: FC<PostProps> = ({ post }) => {
	const [isUpdating, setIsUpdating] = useState(false);
	const {
		id: updatedPostID,
		type,
		isActive,
		isError,
	} = useAppSelector(getPostsUpdating);
	const dispatch = useAppDispatch();
	const { id, title, message, createdAt, creator } = post;

	const handleDelete = () => dispatch(deletePost({ _id: id }));
	const handleUpdate = () => setIsUpdating(prev => !prev);
	const isDeleting = type === POST_UPDATING_TYPES_LIST.deleting;
	const isEditing = type === POST_UPDATING_TYPES_LIST.editing;
	const isCurrentPost = id === updatedPostID;
	return (
		<div className="post">
			<h3>This is post {title}</h3>
			<span>{message}</span>
			<span>
				Created by <b>{creator}</b> at <time>{createdAt}</time>
			</span>
			{isUpdating && <EditMemory post={post} />}
			<div>
				<Button type="button" onClick={handleDelete}>
					{isActive && isDeleting && isCurrentPost ? 'Deleting...' : 'Delete'}
				</Button>
				<Button type="button" onClick={handleUpdate}>
					{isUpdating ? 'Close' : 'Update'}
				</Button>
			</div>
			{isError && (isDeleting || isEditing) && isCurrentPost && (
				<mark>Something went wrong</mark>
			)}
		</div>
	);
};
