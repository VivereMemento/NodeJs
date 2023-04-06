import { ChangeEvent, FC, memo, useState } from 'react';

type InputType = {
	placeholder: string;
	value: string;
	getValue: (value: string) => void;
	type?: 'text' | 'password';
	name?: string;
};

export const TextInput: FC<InputType> = memo(
	({ value, placeholder, getValue, type = 'text', name }) => {
		const [innerValue, setInnerValue] = useState('');
		const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
			setInnerValue(event.target.value);
			getValue(event.target.value);
		};
		return (
			<input
				onChange={handleOnChange}
				type={type}
				placeholder={placeholder}
				value={value ? value : innerValue}
				name={name}
			/>
		);
	}
);
