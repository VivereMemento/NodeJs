export const FETCH_STATUS_LIST = {
	Idle: 'Idle',
	Loading: 'Loading',
	Resolved: 'Resolved',
	Rejected: 'Rejected',
} as const;

const fetchStatus = Object.values(FETCH_STATUS_LIST);

export type FetchStatus = {
	fetchStatus: typeof fetchStatus[number];
};
