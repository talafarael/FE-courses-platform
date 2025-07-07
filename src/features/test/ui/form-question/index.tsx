import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

export const FormQuestion = () => {
  const form = useForm<>({
    resolver: zodResolver(),
  });

  return <FormProvider {...form}>
    <form>

    </form>
  </FormProvider>;
};
