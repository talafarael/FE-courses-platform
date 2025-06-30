import { Button } from "@/src/shared/ui/button/button";
import { useFactoryEntries } from "../../api/useFactoryEntries";
import { IFromEntries } from "../../model/form-entries";
import { FromEntries } from "../form-entries";
import { useState } from "react";

export interface CreateEntriesProps {
	unit_id: string;
	order: number;
}
export const CreateEntries = ({ unit_id, order }: CreateEntriesProps) => {
	const { handlerFactoryEntries, error, loading } = useFactoryEntries();
	const [state, setState] = useState<boolean>(false);
	const handlerToggleState = () => {
		setState(!state);
	};
	const handlerSend = async (data: IFromEntries) => {
		await handlerFactoryEntries({
			data,
			state: "create",
			unit_id,
			order,
			handlerCloseWindow: handlerToggleState,
		});
	};
	return (
		<div>
			{!state && (
				<Button label="Додати інпут" handlerEvent={handlerToggleState} />
			)}
			{state && (
				<FromEntries
					handlerSend={handlerSend}
					error={error}
					loading={loading}
				/>
			)}
		</div>
	);
};
