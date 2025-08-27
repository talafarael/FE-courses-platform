import { IINputData } from "@/src/shared/model/input-data";
import { IFormChangeProfile } from "../../model/change-profile";

export const inputsChagneProfileData: IINputData<keyof IFormChangeProfile>[] = [
  {
    name: "nickname",
    placeholder: "Нікнейм",
  },
  {
    name: "telegram",
    placeholder: "Телеграм",
  },
  {
    name: "full_name",
    placeholder: "Повне ім’я",
  },
  {
    name: "instagram",
    placeholder: "Інстаграм",
  },
];
