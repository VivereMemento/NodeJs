import { FC, FormEventHandler, memo, useEffect } from 'react';
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

const editMemoryFieldsState = {
	title: '',
	message: '',
};

export const EditMemory: FC<EditMemory> = memo(({ post }) => {
	const { isActive, type, id: editedPostId } = useAppSelector(getPostsUpdating);
	const dispatch = useAppDispatch();
	const { title, message, id } = post;

	const { fields, fieldsEntries, setFieldValue } = formFieldsState(
		editMemoryFieldsState
	);

	const isEditing = type === POST_UPDATING_TYPES_LIST.editing;
	const isCurrentPost = id === editedPostId;

	const handleOnSubmit: FormEventHandler<HTMLButtonElement> = event => {
		event.preventDefault();
		const { title, message } = fields;
		dispatch(editPost({ _id: id, title, message }));
	};

	useEffect(() => {
		setFieldValue('title')(title);
		setFieldValue('message')(message);
	}, []);

	return (
		<form className="edit-memory">
			{fieldsEntries.map(([key, value]) => (
				<TextInput
					key={key}
					value={fields[key]}
					placeholder={value}
					getValue={setFieldValue(key)}
				/>
			))}
			<Button type="button" onClick={handleOnSubmit}>
				{isActive && isEditing && isCurrentPost ? 'Editing...' : 'Edit'}
			</Button>
		</form>
	);
});
