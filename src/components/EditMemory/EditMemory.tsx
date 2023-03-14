import {
	ChangeEvent,
	FC,
	FormEventHandler,
	memo,
	useCallback,
	useState,
} from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { Memory, Post, POST_UPDATING_TYPES_LIST } from '../../model/posts';
import { getPosts, getPostsUpdating } from '../../store/selectors/posts';
import { editPost } from '../../store/thunks/posts';
import { Button } from '../UI/Button/Button';
import { TextInput } from '../UI/Input/Input';

import './edit-memory.css';

type MemoryForEditing = Omit<Memory, 'creator'>;
const memoryKeys: ReadonlyArray<keyof MemoryForEditing> = ['title', 'message'];
type EditMemory = {
	id: Post['id'];
};
export const EditMemory: FC<EditMemory> = memo(({ id }) => {
	const { isActive, type, id: editedPostId } = useAppSelector(getPostsUpdating);
	const posts = useAppSelector(getPosts);
	const editedPost = posts.find(post => post.id === id);
	const dispatch = useAppDispatch();
	const [memory, setMemory] = useState<MemoryForEditing>({
		title: editedPost?.title ?? '',
		message: editedPost?.message ?? '',
	});
	const isEditing = type === POST_UPDATING_TYPES_LIST.editing;
	const isCurrentPost = id === editedPostId;

	const handleOnChange = useCallback(
		(key: keyof Memory) => (event: ChangeEvent<HTMLInputElement>) => {
			setMemory(prev => ({ ...prev, [key]: event.target.value }));
		},
		[]
	);

	const handleOnSubmit: FormEventHandler<HTMLButtonElement> = event => {
		event.preventDefault();
		const { title, message } = memory;
		dispatch(editPost({ _id: id, title, message }));
	};

	return (
		<form className="edit-memory">
			{memoryKeys.map(memoryKey => (
				<TextInput
					key={memoryKey}
					value={memory[memoryKey]}
					placeholder={memoryKey}
					onChange={handleOnChange(memoryKey)}
				/>
			))}
			<Button type="button" onClick={handleOnSubmit}>
				{isActive && isEditing && isCurrentPost ? 'Editing...' : 'Edit'}
			</Button>
		</form>
	);
});
