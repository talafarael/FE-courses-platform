"use client";
import { Button } from "@/src/shared/ui/button/button";
import { FieldErrors, FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema, RegisterSchema } from "../model/auth-schema";
import { InputAuth } from "./auth-input";
import { RegisterUserApi } from "../api/auth";
import { RegisterFormData } from "../model/auth";

export type FormAuthProps<T extends "login" | "register"> = {
	state: T;
};
export const FormAuth = <T extends "login" | "register">({
	state,
}: FormAuthProps<T>) => {
	const schema = state === "login" ? LoginSchema : RegisterSchema;
	type AuthSchemaType = z.infer<typeof schema>;
	const form = useForm<AuthSchemaType>({
		resolver: zodResolver(schema),
	});
	const onSubmit = async (data: AuthSchemaType) => {
		console.log(data);
		if (state === "login") {
		} else {
			await RegisterUserApi(data as RegisterFormData);
		}
	};

	return (
		<FormProvider {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<InputAuth<T, AuthSchemaType>
					errors={form.formState.errors as FieldErrors}
					register={form.register}
					state={state}
				/>

				<div className="flex justify-end p-2">
					<Button type="submit" label="готово!" />
				</div>
			</form>
		</FormProvider>
	);
};
