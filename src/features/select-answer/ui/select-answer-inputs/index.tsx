import { FieldErrors, UseFormRegister } from "react-hook-form";
import { ISelectAnswerForm } from "../../model/select-answer-form";
import { selectAnswerInputsData } from "./inputs-answer-inputs.data";
import { InputsForm } from "@/src/shared/ui/inputs-form";

export interface SelectAnswerInputsProps {
  register: UseFormRegister<ISelectAnswerForm>;
  errors?: FieldErrors<ISelectAnswerForm>;
}

export const SelectAnswerInputs = ({
  register,
  errors,
}: SelectAnswerInputsProps) => {
  return (
    <div>
      {selectAnswerInputsData.map((elem) => (
        <InputsForm<ISelectAnswerForm>
          key={elem.name}
          errors={errors}
          register={register}
          elem={elem}
        />
      ))}
    </div>
  );
};
