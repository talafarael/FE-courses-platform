"use client";
import { FormProvider, useForm } from "react-hook-form";
import { ICreateCourse } from "../../model/create-course";
import { FormCourseSchema } from "../../model/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputsCourse } from "../inputs-course";
import { Button } from "@/src/shared/ui/button/button";

export interface FormCourseProps {
	courseDefaultValue: ICreateCourse;
	handlerSend: (data: ICreateCourse) => void;
}

export const FormCourse = ({
	courseDefaultValue,
	handlerSend,
}: FormCourseProps) => {
	const form = useForm<ICreateCourse>({
		resolver: zodResolver(FormCourseSchema),
		defaultValues: courseDefaultValue,
	});
	return (
		<FormProvider {...form}>
			<form
				className="w-[50%] max-lg:w-[100%]  flex flex-col items-end justify-center max-lg:items-center "
				onSubmit={form.handleSubmit((data) => handlerSend(data))}
			>
				<InputsCourse errors={form.formState.errors} register={form.register} />
				<div>
					<Button label="Створити" type="submit" />
				</div>
			</form>
		</FormProvider>
	);
};
