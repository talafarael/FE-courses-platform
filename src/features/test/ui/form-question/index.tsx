import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm, UseFormRegister } from "react-hook-form";
import { FormQuestionSchema } from "../../model/schema";
import {
  ICraeteQuestionForm,
  ICraeteQuestionSelector,
  ICreateQuestionForm,
} from "../../model/api-question";
import { FactoryInputQuestion } from "../factory-input-question";
import { Button } from "@/src/shared/ui/button/button";
import { FactoryInputSelect } from "../factory-select";
import { InputForm } from "@/src/shared/ui/input-form";
import { ReactElement } from "react";

interface FactoryQuestionProps {
  question?: ICraeteQuestionForm;
  handlerSubmit: (data: ICreateQuestionForm) => void;
  onLoading: boolean;
  error?: string;
  childrenCancelButton?: ReactElement;
}

export const FormQuestion = ({
  question,
  handlerSubmit,
  childrenCancelButton,
}: FactoryQuestionProps) => {
  const form = useForm<ICreateQuestionForm>({
    resolver: zodResolver(FormQuestionSchema),
    defaultValues: question,
  });
  console.log(form.formState.errors);
  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit((data) => {
          handlerSubmit(data);
        })}
        className="w-[70vw] "
      >
        <h1 className="text-[white] text-[18px]">
          Створення завдання для курсу
        </h1>
        <FactoryInputQuestion
          errors={form.formState.errors}
          register={form.register}
        />
        {form.watch("type") === "form-question" ? (
          <div className="mt-[20px]">
            <p>{`Example: Прізвище, ім’я: {Клиймович Кирило, 10}`}</p>
            <FactoryInputSelect
              errors={form.formState.errors}
              register={form.register}
            />
          </div>
        ) : (
          <div className="mt-[15px]">
            <InputForm<ICraeteQuestionSelector>
              type="text"
              placeholder="question-text"
              name="question_text"
              styleError="!text-[white]"
              register={
                form.register as UseFormRegister<ICraeteQuestionSelector>
              }
              error={
                form.formState.errors
                  ? form.formState.errors["question_text"]
                  : undefined
              }
            />
          </div>
        )}
        <div>
          {childrenCancelButton}
          <Button type="submit" label="Створити" />
        </div>
      </form>
    </FormProvider>
  );
};
