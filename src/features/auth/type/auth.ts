import { LoginFormData, RegisterFormData } from "../model/auth";
import { LoginSchemaType, RegisterSchemaType } from "./schema";

export type AuthDataType<T> = {
  name: T extends "login" ? keyof LoginSchemaType : keyof RegisterSchemaType;
  placeholder: string;
};
export type ValidFieldNames<T extends "login" | "register"> = T extends "login"
  ? keyof LoginFormData
  : keyof RegisterFormData;
