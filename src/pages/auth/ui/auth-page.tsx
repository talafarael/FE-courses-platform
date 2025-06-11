import { AuthInfo } from "@/src/entities/auth/ui/auth-info";
import { FormAuth } from "@/src/features/auth/ui/auth-form";
export type AuthPageProps = {
  state: "register" | "login";
};
export const AuthPage = ({ state }: AuthPageProps) => {
  return (
    <div className="bg-milk  flex justify-center h-screen w-screen">
      <div
        className="p-2 flex w-[90%]  flex-col  justify-center self-center items-center bg-pinklight   h-2/3 border-2 border-purple rounded-2xl relative max-lg:min-h-max

        "
      >
        <div className="flex w-full justify-around max-lg:flex-col">
          <AuthInfo state={state} />
          <FormAuth state={state} />
        </div>
      </div>
    </div>
  );
};
