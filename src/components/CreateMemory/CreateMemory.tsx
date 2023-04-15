import { FormEventHandler, memo } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { POST_UPDATING_TYPES_LIST } from '../../model/posts';
import { createPost } from '../../store/actions/posts';
import { getPostsUpdating } from '../../store/selectors/posts';
import { ErrorHandler } from '../ErrorHandler/ErrorHandler';
import { Button } from '../UI/Button/Button';
import { TextInput } from '../UI/Input/Input';
import { formFieldsState } from '../UI/Input/helpers';

import './create-memory.css';

const messageFormState = {
	title: '',
	message: '',
	creator: '',
};

export const CreateMemory = memo(() => {
	const { isActive, type, isError } = useAppSelector(getPostsUpdating);
	const dispatch = useAppDispatch();
	const { fields, setFieldValue, fieldsEntries } =
		formFieldsState(messageFormState);

	const isCreating = type === POST_UPDATING_TYPES_LIST.creating;

	const handleOnSubmit: FormEventHandler<HTMLButtonElement> = event => {
		event.preventDefault();
		dispatch(
			createPost({
				...messageFormState,
				tags: [],
				selectedFile: 'Another file',
			})
		);
	};

	return (
		<form className="create-memory">
			{fieldsEntries.map(([key, value]) => (
				<TextInput
					key={key}
					value={fields[key]}
					placeholder={value}
					passValueToParent={setFieldValue(key)}
				/>
			))}
			<Button type="button" onClick={handleOnSubmit}>
				{isActive && type === POST_UPDATING_TYPES_LIST.creating
					? 'Creating...'
					: 'Create'}
			</Button>
			{isError && isCreating && (
				<ErrorHandler status={400} message="Something went wrong" />
			)}
		</form>
	);
});
