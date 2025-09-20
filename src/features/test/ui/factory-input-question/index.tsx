import { FieldErrors, UseFormRegister } from "react-hook-form";
import {
  ICraeteQuestionForm,
  ICreateQuestionForm,
} from "../../model/api-question";
import { factoryInputQuestionData } from "./factory-input-question.data";
import { InputOptional } from "@/src/shared/ui/optional-input";

interface FactoryInputQuestionProps {
  register: UseFormRegister<ICreateQuestionForm>;
  errors?: FieldErrors<ICraeteQuestionForm>;
}

export const FactoryInputQuestion = ({
  register,
  errors,
}: FactoryInputQuestionProps) => {
  return (
    <div className="flex flex-row-reverse justify-end">
      {factoryInputQuestionData?.map((elem) => {
        if (elem.state === "optional-input") {
          return (
            <div key={elem.name} className="h-[50px]">
              <InputOptional<ICreateQuestionForm>
                placeholder={elem.name}
                name={elem.name}
                register={register}
                error={errors ? errors[elem.name] : undefined}
                optional={elem.optional}
              />
            </div>
          );
        }
      })}
    </div>
  );
};
