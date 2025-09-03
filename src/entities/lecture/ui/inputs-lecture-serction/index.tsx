import { InputForm } from "@/src/shared/ui/input-form";
import { IFormLectureSection } from "../../model/form-lecture-section";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { inputsLectureSectionData } from "./inputs-lecture-section.data";
export interface IFromEntries {
  name: string;
  typeEntries: "lecture" | "test";
}

export interface InputEntriesProps {
  register: UseFormRegister<IFormLectureSection>
  errors?: FieldErrors<IFormLectureSection>;
}
export const InputsLectureSection = ({ register, errors }: InputEntriesProps) => {
  return (
    <>
      {inputsLectureSectionData.map((elem) => (
        <div key={elem.name}>
          <InputForm<IFormLectureSection>
            type="text"
            placeholder={elem.placeholder}
            name={elem.name}
            register={register}
            error={errors ? errors[elem.name] : undefined}
          />
        </div>
      ))}
    </>
  );
};
