import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IFromEntries } from "../../model/form-entries";
import { FormEntriesSchema } from "../../model/schema";
import { InputEntries } from "../inputs-entries";
import { Button } from "@/src/shared/ui/button/button";
export interface FromEntriesProps {
  handlerSend: (data: IFromEntries) => void;
  loading: boolean;
  defValue?: undefined | IFromEntries;
  error?: string;
  title?: string;
}
export const FromEntries = ({
  handlerSend,
  loading,
  error,
  defValue,
  title,
}: FromEntriesProps) => {
  const form = useForm<IFromEntries>({
    resolver: zodResolver(FormEntriesSchema),
    defaultValues: defValue,
  });

  return (
    <FormProvider {...form}>
      <form
        className="w-[500px] h-[300px]
        bg-purplelight border-[#49454F] border-[2px] max-w-[800px] p-[30px] rounded-[10px]  flex flex-col items-center justify-around  "
        onSubmit={form.handleSubmit((data) => handlerSend(data))}
      >
        <h1 className="text-[25px] text-bold">{title}</h1>
        <InputEntries errors={form.formState.errors} register={form.register} />
        {loading && <h1>Завантаження</h1>}
        {error && <h1>{error}</h1>}
        <Button label="Створити" type="submit" />
      </form>
    </FormProvider>
  );
};
