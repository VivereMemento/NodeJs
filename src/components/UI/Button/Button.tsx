import {
	FC,
	FormEventHandler,
	memo,
	MouseEventHandler,
	PropsWithChildren,
} from 'react';

export const BUTTON_TYPE_LIST = {
	button: 'button',
	submit: 'submit',
	reset: 'reset',
} as const;

type ButtonType = (
	| {
			type: typeof BUTTON_TYPE_LIST.button;
			onClick: MouseEventHandler<HTMLButtonElement>;
	  }
	| {
			type: typeof BUTTON_TYPE_LIST.submit;
			onSubmit: FormEventHandler<HTMLButtonElement>;
	  }
) &
	PropsWithChildren;

export const Button: FC<ButtonType> = memo(props => {
	const { children, type } = props;
	return type === BUTTON_TYPE_LIST.submit ? (
		<button type={type} onSubmit={props.onSubmit}>
			{children}
		</button>
	) : (
		<button type={type} onClick={props.onClick}>
			{children}
		</button>
	);
});
