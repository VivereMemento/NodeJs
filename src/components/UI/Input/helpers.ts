export const formFieldsState = <T extends Record<PropertyKey, string>>(
	fields: T
) => {
	const setFieldValue = (key: keyof T) => (value: T[keyof T]) => {
		fields[key] = value;
	};

	const fieldsEntries = Object.entries(fields) as ReadonlyArray<
		[keyof T, string]
	>;

	return {
		fields,
		setFieldValue,
		fieldsEntries,
	};
};
