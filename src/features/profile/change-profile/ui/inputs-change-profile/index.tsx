"use client";
import { InputForm } from "@/src/shared/ui/input-form";
import { inputsChagneProfileData } from "./inputs-change-profile.data";
import { IFormChangeProfile } from "../../model/change-profile";
import { FieldErrors, UseFormRegister } from "react-hook-form";

export interface InputsChangeProfileProps {
  register: UseFormRegister<IFormChangeProfile>;
  errors?: FieldErrors<IFormChangeProfile>;
}
export const InputsChangeProfile = ({
  errors,
  register,
}: InputsChangeProfileProps) => {
  return (
    <div className="w-[350px] flex flex-col gap-[20px]">
      {inputsChagneProfileData.map((elem) => (
        <InputForm<IFormChangeProfile>
          key={elem.name}
          type={elem.name}
          placeholder={elem.name}
          name={elem.name}
          register={register}
          error={errors ? errors[elem.name] : undefined}
        />
      ))}
    </div>
  );
};
