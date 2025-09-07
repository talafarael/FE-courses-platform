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
    <div className="w-[100%] flex flex-col items-center">
      <ListUnits units={unit} />

      {admin && (
        <div className="w-[90%] justify-center items-center mt-[20px]">
          <Button
            label="додати модуль"
            handlerEvent={handlerAdminAddModule}
            style="w-[180px]"
          />
        </div>
      )}
    </div>
  );
};
