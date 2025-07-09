import type { IEntriesTest } from "@/src/entities/entries/model/entries";
import { FormQuestion } from "../form-question";
import { FactoryQuestion } from "../factory-question";

export interface CreateTestProps {
	entry: Partial<IEntriesTest>;
}
export const CreateTest = ({ entry }: CreateTestProps) => {
	//{entry.test?.sections?.map()}

	return (
		<div className="w-[100%]">
			<FactoryQuestion />
		</div>
	);
};
