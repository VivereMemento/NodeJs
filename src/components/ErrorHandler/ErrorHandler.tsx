import { FC } from 'react';
import { StatusCode, STATUS_LIST } from '../../model/error';

const COLORS_LIST = {
	yellow: 'yellow',
	red: 'red',
} as const;

const MESSAGE_COLOR: Record<StatusCode, keyof typeof COLORS_LIST> = {
	[STATUS_LIST[204]]: COLORS_LIST['red'],
	[STATUS_LIST[400]]: COLORS_LIST['yellow'],
};

type ErrorHandlerProps = {
	status: StatusCode;
	message: string;
};

export const ErrorHandler: FC<ErrorHandlerProps> = ({ status, message }) => {
	return <div style={{ background: MESSAGE_COLOR[status] }}>{message}</div>;
};
