import { CreateEntries } from "@/src/features/entries/ui/create-entries";
import { IUnit } from "../../model/unit";

export interface CardUnitProps {
	unit: IUnit;
}
export const gardUnit = ({ unit }: CardUnitProps) => {
	return (
		<div>
			<h1>{unit.name}</h1>
			{<CreateEntries order={0} unit_id={unit.id} />}
		</div>
	);
};
