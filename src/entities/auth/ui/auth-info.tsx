import { Logo } from "@/src/shared/ui/logo";
import { AuthText } from "./auth-text";
import { TAuthTextData } from "../type/auth-text-type";
import { authTextData } from "../data/auth-text.data";

export type AuthInfoProps = {
  state: keyof TAuthTextData;
};

export const AuthInfo = ({ state }: AuthInfoProps) => {
  return (
    <div className="flex flex-col w-auto max-[850px]:felx-row h-[85%] p-[20px] justify-around max-lg:items-center">
      <Logo />
      <AuthText {...authTextData[state]} />
    </div>
  );
};
