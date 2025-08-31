import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IFromEntries } from "../../model/form-entries";
import { FormEntriesSchema } from "../../model/schema";
import { InputEntries } from "../inputs-entries";
export interface FromEntriesProps {
  handlerSend: (data: IFromEntries) => void;
  loading: boolean;
  defValue?: undefined | IFromEntries;
  error?: string;
}
export const FromEntries = ({
  handlerSend,
  loading,
  error,
  defValue,
}: FromEntriesProps) => {
  const form = useForm<IFromEntries>({
    resolver: zodResolver(FormEntriesSchema),
    defaultValues: defValue,
  });

  return (
    <FormProvider {...form}>
      <form
        className="w-auto bg-purplelight border-[#49454F] border-[2px] max-w-[800px] p-[30px] rounded-[10px]  flex flex-col items-center justify-center  "
        onSubmit={form.handleSubmit((data) => handlerSend(data))}
      >
        <InputEntries errors={form.formState.errors} register={form.register} />
        {loading && <h1>Завантаження</h1>}
        {error && <h1>{error}</h1>}
      </form>
    </FormProvider>
  );
};
