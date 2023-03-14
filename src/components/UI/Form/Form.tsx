import { FC, PropsWithChildren } from 'react';

type FormType = {
	submitCallback?: () => void;
} & PropsWithChildren;

export const Form: FC<FormType> = ({ children, submitCallback }) => {
	return <form onSubmit={submitCallback}>{children}</form>;
};
