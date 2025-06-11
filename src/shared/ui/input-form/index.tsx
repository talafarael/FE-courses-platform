"use client";
import { useState } from "react";
import {
  FieldError,
  FieldErrors,
  FieldValues,
  Path,
  useFormContext,
  UseFormRegister,
} from "react-hook-form";

export type FormFieldProps<T extends FieldValues> = {
  type: string;
  placeholder: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  error?: FieldError;
  valueAsNumber?: boolean;
};

export const InputForm = <T extends FieldValues>({
  type,
  placeholder,
  name,
  register,
  error,
  valueAsNumber,
}: FormFieldProps<T>) => {
  const [isFocused, setIsFocused] = useState(false);
  const { watch } = useFormContext();
  const watchedValue = watch(name);
  const isLabelFloating =
    isFocused || (watchedValue !== undefined && watchedValue !== "");

  return (
    <>
      <div className="relative">
        <input
          className="h-14 w-[500px] border-2 border-purple rounded px-4 py-2 outline-none focus:border-purple-600 transition-all duration-200"
          type={type}
          {...register(name, { valueAsNumber })}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <label
          className={`absolute left-4 pointer-events-none transition-all duration-200 ease-in-out bg-pinklight px-1 ${isLabelFloating
              ? "top-[-6px] text-xs text-purple"
              : "top-2 text-base text-gray-600"
            }`}
        >
          {placeholder}
        </label>
        {error && <span className="error-message">{error?.message}</span>}
      </div>
    </>
  );
};
