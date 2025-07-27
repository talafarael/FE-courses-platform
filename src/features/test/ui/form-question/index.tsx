import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { FormQuestionSchema } from "../../model/schema";
import { ICraeteQuestionForm, ICraeteQuestionSelector, ICreateQuestionForm, ICreateQuestionSelect } from "../../model/api-question";
import { FactoryInputQuestion } from "../factory-input-question";
import { Button } from "@/src/shared/ui/button/button";
import { FactoryInputAnswer } from "../factory-input-answer";

interface FactoryQuestionProps {
  question?: ICraeteQuestionForm;
  handlerSubmit: (data: ICreateQuestionForm) => void;
  onLoading: boolean;
  error?: string;
}
export const FormQuestion = ({
  question,
  handlerSubmit,
}: FactoryQuestionProps) => {
  const form = useForm<ICreateQuestionForm>({
    resolver: zodResolver(FormQuestionSchema),
    defaultValues: question,
  });

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit((data) => handlerSubmit(data))}>
        <FactoryInputQuestion
          errors={form.formState.errors}
          register={form.register}
        />
        {form.getValues("type") === "form-question" &&
          <FactoryInputAnswer
            errors={form.formState.errors}
            register={form.register}
          />

        }
        <Button type="submit" label="Створити" />

      </form>
    </FormProvider>
  );
};
