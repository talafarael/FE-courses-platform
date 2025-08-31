import { IUnitCreate } from "@/src/features/unit/model/unit";
import { IEntries } from "../../entries/model/entries";
export interface IUnit extends IUnitCreate {
  id: string;
  entries: IEntries[];
}
