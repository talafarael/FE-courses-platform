import { useState } from "react";
import {
  FieldError,
  FieldValues,
  Path,
  useFormContext,
  UseFormRegister,
} from "react-hook-form";

export interface TextAreaProps<T extends FieldValues> {
  placeholder: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  error?: FieldError | undefined;
}
export const TextArea = <T extends FieldValues>({
  placeholder,
  name,
  register,
  error,
}: TextAreaProps<T>) => {
  const [isFocused, setIsFocused] = useState(false);
  const { watch } = useFormContext();
  const watchedValue = watch(name);
  const isLabelFloating =
    isFocused || (watchedValue !== undefined && watchedValue !== "");

  return (
    <div className="relative max-w-[771px]  h-[354px] w-full ">
      <textarea
        className="min-h-[100px] h-[354px] p-[5px] w-[700px] pt-[10px]  max-w-[771px] border-[2px] rounded-[10px] border-inputBorder"
        {...register(name)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <label
        className={`absolute max-w-[771px]  w-auto max-h-[354px] left-4 pointer-events-none transition-all duration-200 ease-in-out bg-pinklight px-1 ${isLabelFloating
            ? "top-[-6px] text-xs text-purple"
            : "top-2 text-base text-gray-600"
          }`}
      >
        {placeholder}
      </label>
      {error && (
        <span className="error-message text-darkPurple">{error.message}</span>
      )}
    </div>
  );
};
