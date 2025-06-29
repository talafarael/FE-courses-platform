import { ReactNode } from "react";

export interface ModalWindowProps {
	children: ReactNode;
}
export const ModalWindow = ({ children }: ModalWindowProps) => {
	return <div>{children}</div>;
};
