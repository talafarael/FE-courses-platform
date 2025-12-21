import { ISelectAnswerForm } from "../../model/select-answer-form";
import { SelectAnswerSchema } from "../../model/schema";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SelectAnswerInputs } from "../select-answer-inputs";
import { Button } from "@/src/shared/ui/button/button";

export interface SelectAnswerFormProps {
  defValue?: ISelectAnswerForm;
  handlerSubmit: (data: ISelectAnswerForm) => void;
  error?: string;
  loading: boolean;
}

export const SelectAnswerForm = ({
  defValue,
  handlerSubmit,
}: SelectAnswerFormProps) => {
  const form = useForm<ISelectAnswerForm>({
    resolver: zodResolver(SelectAnswerSchema),
    defaultValues: defValue,
  });

  return (
    <FormProvider {...form}>
      <form
        className="w-[500px] h-[300px]
        bg-purplelight border-[#49454F] border-[2px] max-w-[800px] p-[30px] rounded-[10px]  flex flex-col items-center justify-around  "
        onSubmit={form.handleSubmit((data) => handlerSubmit(data))}
      >
        <SelectAnswerInputs
          errors={form.formState.errors}
          register={form.register}
        />
        <Button type="submit" label="Create" />
      </form>
    </FormProvider>
  );
};
