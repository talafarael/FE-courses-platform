import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { FormQuestionSchema } from "../../model/schema";
import { ICraeteQuestionForm } from "../../model/api-question";
import { FactoryInputQuestion } from "../factory-input-question";
import { Button } from "@/src/shared/ui/button/button";
import { useCreateQuestion } from "../../api/use-create-question";

interface FactoryQuestionProps {
  question?: ICraeteQuestionForm;
}
export const FormQuestion = ({ question }: FactoryQuestionProps) => {
  const form = useForm<ICraeteQuestionForm>({
    resolver: zodResolver(FormQuestionSchema),
    defaultValues: question,
  });
  //const { handlerCreateQuestion, error, loading } = useCreateQuestion();

  return (
    <FormProvider {...form}>
      <form>
        <FactoryInputQuestion
          errors={form.formState.errors}
          register={form.register}
        />
        <Button type="submit" label="Створити" />
      </form>
    </FormProvider>
  );
};
