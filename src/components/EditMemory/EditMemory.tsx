import { FC, FormEventHandler, memo } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { POST_UPDATING_TYPES_LIST, Post } from '../../model/posts';
import { getPostsUpdating } from '../../store/selectors/posts';
import { editPost } from '../../store/thunks/posts';
import { Button } from '../UI/Button/Button';
import { TextInput } from '../UI/Input/Input';
import { formFieldsState } from '../UI/Input/helpers';

import './edit-memory.css';

type EditMemory = Readonly<{
	post: Post;
}>;

const editMemoryFieldsState: Pick<Post, 'title' | 'message'> = {
	title: '',
	message: '',
};

const { fields, fieldsEntries, setFieldValue } = formFieldsState(
	editMemoryFieldsState
);

export const EditMemory: FC<EditMemory> = memo(({ post }) => {
	const {
		isActive: isPostUpdatingActive,
		type,
		id: editedPostId,
	} = useAppSelector(getPostsUpdating);
	const dispatch = useAppDispatch();
	const { id } = post;

	const isEditing = type === POST_UPDATING_TYPES_LIST.editing;
	const isCurrentPost = id === editedPostId;

	const handleOnSubmit: FormEventHandler<HTMLButtonElement> = event => {
		event.preventDefault();
		const { title, message } = fields;
		dispatch(editPost({ _id: id, title, message }));
	};

	fields.message = post.message;
	fields.title = post.title;

	return (
		<form className="edit-memory">
			{fieldsEntries.map(([key]) => (
				<TextInput
					key={key}
					value={fields[key]}
					placeholder=""
					passValueToParent={setFieldValue(key)}
				/>
			))}
			<Button type="button" onClick={handleOnSubmit}>
				{isPostUpdatingActive && isEditing && isCurrentPost
					? 'Editing...'
					: 'Edit'}
			</Button>
		</form>
	);
});
