import {
  FieldError,
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";
import { IINputDataExtend } from "../../model/input-data";
import { InputForm } from "../input-form";
import { TextArea } from "../text-area";
import { InputOptional } from "../optional-input";

export interface InputsFormProps<T extends FieldValues> {
  elem: IINputDataExtend<Path<T>>;
  register: UseFormRegister<T>;
  errors?: FieldErrors<T>;
}

export const InputsForm = <T extends FieldValues>({
  elem,
  register,
  errors,
}: InputsFormProps<T>) => {
  const error = errors
    ? (errors[elem.name] as FieldError | undefined)
    : undefined;
  const nameKey = String(elem.name);

  if (elem.state === "normal-input") {
    return (
      <div key={nameKey} className="w-[350px]">
        <InputForm<T>
          type={elem.name as string}
          placeholder={elem.placeholder}
          name={elem.name}
          register={register}
          error={error}
        />
      </div>
    );
  }

  if (elem.state === "large-input") {
    return (
      <div className="" key={nameKey}>
        <TextArea<T>
          placeholder={elem.placeholder}
          name={elem.name}
          register={register}
          error={error}
        />
      </div>
    );
  }

  if (elem.state === "small-input") {
    return (
      <div key={nameKey} className="w-[150px]">
        <InputForm<T>
          type={elem.name as string}
          placeholder={elem.placeholder}
          name={elem.name}
          register={register}
          error={error}
          valueAsNumber={true}
        />
      </div>
    );
  }

  if (elem.state === "boolean-input") {
    return (
      <div key={nameKey}>
        <select
          className="w-[150px] h-[50px] border-[2px] rounded-[10px] border-inputBorder"
          {...register(elem.name, {
            setValueAs: (value) => value === "true",
          })}
        >
          <option value="true">True</option>
          <option value="false">False</option>
        </select>
        {error?.message && <h1>{error.message}</h1>}
      </div>
    );
  }

  if (elem.state === "optional-input" && "optional" in elem) {
    return (
      <div key={nameKey}>
        <InputOptional<T>
          placeholder={elem.placeholder}
          name={elem.name}
          register={register}
          error={error}
          optional={elem.optional}
        />
      </div>
    );
  }

  return null;
};
