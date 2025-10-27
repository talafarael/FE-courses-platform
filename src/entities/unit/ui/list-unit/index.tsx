import { IUnit } from "../../model/unit";
import { CardUnit } from "../card-unit";

export interface ListUnitsProps {
  units: IUnit[];
}
export const ListUnit = ({ units }: ListUnitsProps) => {
  return (
    <div className="mt-[32px] max-w-[1400px] w-[90%]">
      {units.map((unit) => (
        <CardUnit key={unit.id} unit={unit} />
      ))}
    </div>
  );
};
