"use client";
import { useState } from "react";
import {
	FieldError,
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
	error?: FieldError | undefined;
	valueAsNumber?: boolean;
	style?: string;
};

export const InputForm = <T extends FieldValues>({
	type,
	placeholder,
	name,
	register,
	error,
	valueAsNumber,
	style,
}: FormFieldProps<T>) => {
	const [isFocused, setIsFocused] = useState(false);
	const { watch } = useFormContext();
	const watchedValue = watch(name);
	const isLabelFloating =
		isFocused || (watchedValue !== undefined && watchedValue !== "");

	return (
		<div className={`relative  max-w-[494px] w-[100%] !${style}`}>
			<input
				className={`h-[50px] max-w-[494px] w-[100%]  border-2 border-purple rounded-[10px] px-4 py-2 outline-none focus:border-purple-600 transition-all duration-200 !${style}`}
				type={type}
				{...register(name, { valueAsNumber })}
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
			/>
			<label
				className={`absolute left-4 pointer-events-none transition-all duration-200 ease-in-out bg-pinklight px-1 ${
					isLabelFloating
						? "top-[-6px] text-xs text-purple"
						: "top-2 text-base text-gray-600"
				}`}
			>
				{placeholder}
			</label>
			{error && (
				<span className="error-message text-darkPurple ">{error?.message}</span>
			)}
		</div>
	);
};
