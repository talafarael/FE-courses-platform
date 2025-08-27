import { IINputDataExtend } from "@/src/shared/model/input-data";
import { IFormUnit } from "../../model/unit";

export const inputsUnitData: IINputDataExtend<keyof IFormUnit>[] = [
  {
    name: "name",
    placeholder: "Прихований",
    state: "normal-input",
  },
  {
    name: "description",
    placeholder: "Прихований",
    state: "large-input",
  },
];
export const inputsPriceUnitData: IINputDataExtend<keyof IFormUnit> = {
  name: "price_in_pln",
  placeholder: "Ціна (PLN)",
  state: "small-input",
};
