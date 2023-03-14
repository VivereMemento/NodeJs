import {
	ChangeEvent,
	FormEventHandler,
	memo,
	useCallback,
	useState,
} from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { Memory, POST_UPDATING_TYPES_LIST } from '../../model/posts';
import { createPost } from '../../store/actions/posts';
import { getPostsUpdating } from '../../store/selectors/posts';
import { ErrorHandler } from '../ErrorHandler/ErrorHandler';
import { Button } from '../UI/Button/Button';
import { TextInput } from '../UI/Input/Input';

import './create-memory.css';

const memoryKeys: ReadonlyArray<keyof Memory> = ['title', 'message', 'creator'];

export const CreateMemory = memo(() => {
	const { isActive, type, isError } = useAppSelector(getPostsUpdating);
	const dispatch = useAppDispatch();
	const [memory, setMemory] = useState<Memory>({
		title: '',
		message: '',
		creator: '',
	});
	const isCreating = type === POST_UPDATING_TYPES_LIST.creating;

	const handleOnChange = useCallback(
		(key: keyof Memory) => (event: ChangeEvent<HTMLInputElement>) => {
			setMemory(prev => ({ ...prev, [key]: event.target.value }));
		},
		[]
	);

	const handleOnSubmit: FormEventHandler<HTMLButtonElement> = event => {
		event.preventDefault();
		dispatch(createPost({ ...memory, tags: [], selectedFile: 'Another file' }));
	};

	return (
		<form className="create-memory">
			{memoryKeys.map(memoryKey => (
				<TextInput
					key={memoryKey}
					value={memory[memoryKey]}
					placeholder={memoryKey}
					onChange={handleOnChange(memoryKey)}
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
