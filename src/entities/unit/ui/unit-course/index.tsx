import { Button } from "@/src/shared/ui/button/button";
import { IUnit } from "../../model/unit";
import { ListUnits } from "../list-unit";

export interface UnitCourseProps {
	admin: boolean | undefined;
	unit: IUnit[];
	handlerAdminAddModule: () => void;
}
export const UnitCourse = ({
	admin,
	unit,
	handlerAdminAddModule,
}: UnitCourseProps) => {
	return (
		<div>
			<ListUnits units={unit} />

			{admin && (
				<Button label="додати модуль" handlerEvent={handlerAdminAddModule} />
			)}
		</div>
	);
};
