import { IUnit } from "../../model/unit";
import { CardUnit } from "../card-unit";

export interface ListUnitsProps {
  units: IUnit[];
}
export const ListUnits = ({ units }: ListUnitsProps) => {
  return (
    <div>
      {units.map((elem) => (
        <CardUnit unit={elem} key={elem.id} />
      ))}
    </div>
  );
};
