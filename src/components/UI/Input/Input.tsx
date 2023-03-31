import { ChangeEvent, FC, memo, useState } from 'react';

type InputType = {
	placeholder: string;
	value: string;
	type?: 'text' | 'password';
	name?: string;
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const TextInput: FC<InputType> = memo(
	({ value, placeholder, onChange, type = 'text', name }) => {
		const [innerValue, setInnerValue] = useState('');
		const handleOnChange = (event: ChangeEvent<HTMLInputElement>) =>
			setInnerValue(event.target.value);

		return (
			<input
				onChange={onChange ? onChange : handleOnChange}
				type={type}
				placeholder={placeholder}
				value={value ? value : innerValue}
				name={name}
			/>
		);
	}
);
