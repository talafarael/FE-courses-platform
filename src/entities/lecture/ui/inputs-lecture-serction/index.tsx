import { InputForm } from "@/src/shared/ui/input-form";
import { IFormLectureSection } from "../../model/form-lecture-section";
import { FieldError, FieldErrors, UseFormRegister } from "react-hook-form";
import { inputsLectureSectionData } from "./inputs-lecture-section.data";
import { ICreateLectureSectionForm } from "@/src/features/lecture/type/create-form-lecture-section";
export interface IFromEntries {
  name: string;
  typeEntries: "lecture" | "test";
}

export interface InputEntriesProps {
  register: UseFormRegister<ICreateLectureSectionForm>
  errors?: FieldErrors<ICreateLectureSectionForm>;
}
export const InputsLectureSection = ({ register, errors }: InputEntriesProps) => {
  return (
    <>
      {inputsLectureSectionData.map((elem) => (
        <div key={elem.name}>
          <InputForm<ICreateLectureSectionForm>
            type="text"
            placeholder={elem.placeholder}
            name={elem.name}
            register={register}
            error={errors ? errors[elem.name] as FieldError : undefined}
          />
        </div>
      ))}
    </>
  );
};
