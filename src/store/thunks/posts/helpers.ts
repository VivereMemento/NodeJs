import { Post } from '../../../model/posts';

export const mapPostFromServer = (entity: Protocol.Post): Post => {
	const keys = Object.keys(entity) as ReadonlyArray<keyof Protocol.Post>;

	const mappedEntity = keys.reduce((acc, key) => {
		if (key === '_id') {
			return { ...acc, id: entity[key] };
		}
		return { ...acc, [key]: entity[key] };
	}, {} as Post);

	return mappedEntity;
};
