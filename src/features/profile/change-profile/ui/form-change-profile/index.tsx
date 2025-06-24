import { FormProvider, useForm } from "react-hook-form";
import { ProfileSchema } from "../../model/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { IFormChangeProfile } from "../../model/change-profile";

export const FormChangeProfile = () => {
  const form = useForm<IFormChangeProfile>({
    resolver: zodResolver(ProfileSchema),
  });
  const handlerSend = () => { };
  return (
    <FormProvider {...form}>
      <form
        className="w-[50%] max-lg:w-[100%]  flex flex-col items-end justify-center max-lg:items-center "
        onSubmit={form.handleSubmit(handlerSend)}
      ></form>
    </FormProvider>
  );
};
