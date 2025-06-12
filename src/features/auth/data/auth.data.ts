import { AuthDataType } from "../type/auth";

export const loginData: AuthDataType<"login">[] = [
  {
    name: "login",
    placeholder: "Логін",
  },
  {
    name: "password",
    placeholder: "Пароль",
  },
];
export const registerData: AuthDataType<"register">[] = [
  {
    name: "email",
    placeholder: "Email",
  },
  {
    name: "firstName",
    placeholder: "Ім’я",
  },
  {
    name: "lastName",
    placeholder: "Прізвище",
  },
  {
    name: "login",
    placeholder: "Логін",
  },
  {
    name: "password",
    placeholder: "Пароль",
  },
];
