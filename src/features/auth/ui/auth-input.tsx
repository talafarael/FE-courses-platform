"use client";
import { InputForm } from "@/src/shared/ui/input-form";
import { FormAuthProps } from "./auth-form";
import {
	FieldErrors,
	FieldValues,
	Path,
	UseFormRegister,
} from "react-hook-form";
import { LoginSchemaType, RegisterSchemaType } from "../type/schema";
import { loginData, registerData } from "../data/auth";

export type InputAuthProps<
	T extends "login" | "register",
	Y extends FieldValues,
> = FormAuthProps<T> & {
	register: UseFormRegister<Y>;
	errors?: FieldErrors<Y>;
};

export const InputAuth = <
	T extends "login" | "register",
	Y extends FieldValues,
>({
	state,
	errors,
	register,
}: InputAuthProps<T, Y>) => {
	const authData = state === "login" ? loginData : registerData;
	console.log(authData);
	return (
		<div className="flex flex-col gap-2">
			{authData?.map((elem) => {
				const error =
					state === "login"
						? (errors as FieldErrors<LoginSchemaType>)[
								elem.name as keyof LoginSchemaType
						  ]
						: (errors as FieldErrors<RegisterSchemaType>)[
								elem.name as keyof RegisterSchemaType
						  ];
				return (
					<InputForm<Y>
						key={elem.name}
						type={elem.name}
						placeholder={elem.name}
						name={elem.name as Path<Y>}
						register={register}
						error={error}
					/>
				);
			})}
		</div>
	);
};
