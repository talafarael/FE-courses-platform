import { IUnit } from "../../model/unit";
import { UnitCard } from "../unit-card";

export interface ListUnitsProps {
  units: IUnit[];
}
export const ListUnit = ({ units }: ListUnitsProps) => {
  return (
    <div className="w-[100%]">
      {units.map((unit) => (
        <UnitCard key={unit.id} unit={unit} />
      ))}
    </div>
  );
};
