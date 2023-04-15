import { ChangeEvent, FC, memo, useState } from 'react';

type InputType = {
	placeholder: string;
	passValueToParent: (value: string) => void;
	value?: string;
	type?: 'text' | 'password';
	name?: string;
};

export const TextInput: FC<InputType> = memo(
	({ value, placeholder, passValueToParent, type = 'text', name }) => {
		const [innerValue, setInnerValue] = useState(value);
		const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
			console.log(event.target.value);
			setInnerValue(event.target.value);
			passValueToParent(event.target.value);
		};
		return (
			<input
				onChange={handleOnChange}
				type={type}
				placeholder={placeholder}
				value={innerValue}
				name={name}
			/>
		);
	}
);
