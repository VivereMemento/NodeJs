export const STATUS_LIST = {
	400: 400,
	204: 204,
} as const;

export type StatusCode = keyof typeof STATUS_LIST;
