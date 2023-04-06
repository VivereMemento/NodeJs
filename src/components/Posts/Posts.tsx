import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../hooks/redux';
import { FETCH_STATUS_LIST } from '../../model/fetch-status';
import { getAllPosts } from '../../store/actions/posts';
import { getFetchStatus, getPosts } from '../../store/selectors/posts';
import { Loading } from '../Loading/Loading';
import { Post } from './Post/Post';

export function Posts() {
	const entities = useSelector(getPosts);
	const fetchStatus = useSelector(getFetchStatus);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getAllPosts());
	}, []);

	if (fetchStatus === FETCH_STATUS_LIST.Loading) {
		return <Loading />;
	}

	return (
		<ul className="posts">
			{entities.map(entity => (
				<li key={entity.id}>
					<Post post={entity} />
				</li>
			))}
		</ul>
	);
}
