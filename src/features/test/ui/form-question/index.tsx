import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { FormQuestionSchema } from "../../model/schema";
import { ICraeteQuestionForm, ICraeteQuestionSelector, ICreateQuestionForm, ICreateQuestionSelect } from "../../model/api-question";
import { FactoryInputQuestion } from "../factory-input-question";
import { Button } from "@/src/shared/ui/button/button";
import { FactoryInputAnswer } from "../factory-input-answer";
import { FactoryInputSelect } from "../factory-select";

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
      <form
        onSubmit={form.handleSubmit((data) => handlerSubmit(data))}
        className="w-[70vw] "
      >
        <h1 className="text-[white] text-[14px]">Створення завдання для курсу</h1>
        <FactoryInputQuestion
          errors={form.formState.errors}
          register={form.register}
        />
        {form.watch("type") === "select-question" &&
          <div>
            <p>{`Example: Прізвище, ім’я: {Клиймович Кирило, 10}`}</p>
            <FactoryInputSelect
              errors={form.formState.errors}
              register={form.register}
            />
          </div>

        }


        <Button type="submit" label="Створити" />

      </form>
    </FormProvider>
  );
};
