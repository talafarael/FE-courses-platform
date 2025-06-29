"use client";
import { FormProvider, useForm } from "react-hook-form";
import { ICreateCourse } from "../../model/create-course";
import { FormCourseSchema } from "../../model/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputsCourse } from "../inputs-course";
import { ImgInput } from "@/src/shared/ui/img-input";
import { useRef, useState } from "react";
import { InputForm } from "@/src/shared/ui/input-form";
import { inputNameData } from "../inputs-course/input-course.data";

export interface FormCourseProps {
	courseDefaultValue: ICreateCourse;
	handlerSend: (data: ICreateCourse) => void;
	setFile: React.Dispatch<React.SetStateAction<File | undefined>>;
	error?: string | undefined;
	loading?: boolean;
}

export const FormCourse = ({
	courseDefaultValue,
	handlerSend,
	setFile,
	error,
	loading,
}: FormCourseProps) => {
	const form = useForm<ICreateCourse>({
		resolver: zodResolver(FormCourseSchema),
		defaultValues: courseDefaultValue,
	});
	const [image, setImage] = useState<string | undefined>(undefined);
	const fileInputRef = useRef<HTMLInputElement>(null);

	const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const currentFile = e.target.files?.[0];
		if (currentFile) {
			setFile(currentFile);
			setImage(URL.createObjectURL(currentFile));
		} else {
			setFile(undefined);
			setImage(undefined);
		}
	};

	const handlerRemovePhoto = () => {
		setFile(undefined);
		setImage(undefined);
	};
	const handleClick = () => {
		fileInputRef.current?.click();
	};
	return (
		<FormProvider {...form}>
			<form
				className="w-auto bg-purplelight border-[#49454F] border-[2px] max-w-[800px] p-[30px] rounded-[10px]  flex flex-col items-center justify-center  "
				onSubmit={form.handleSubmit((data) => handlerSend(data))}
			>
				<div className=" flex w-[100%] justify-around items-center">
					<div className="w-[auto]">
						<InputForm<ICreateCourse>
							type={inputNameData.name}
							placeholder={inputNameData.name}
							name="name"
							register={form.register}
							error={
								form.formState.errors
									? form.formState.errors["name"]
									: undefined
							}
						/>
					</div>

					<ImgInput
						fileInputRef={fileInputRef}
						handleImageChange={handleImageChange}
						handlerRemovePhoto={handlerRemovePhoto}
						image={image}
						handleClick={handleClick}
						styleContainer="flex-row"
						styleButton="flex-col"
					/>
				</div>
				{loading && <div>Загрузка</div>}
				{error && <div>{error}</div>}
				<InputsCourse errors={form.formState.errors} register={form.register} />
			</form>
		</FormProvider>
	);
};
