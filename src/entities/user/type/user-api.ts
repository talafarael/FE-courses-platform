import { IUser } from "./user";

export interface IUserResponse {
  ok: boolean;
  message: string;
  data: IUser;
}
