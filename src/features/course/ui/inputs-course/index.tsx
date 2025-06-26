import { FieldErrors, UseFormRegister } from "react-hook-form";
import { ICreateCourse } from "../../model/create-course";
import { inputsCourseData } from "./input-course.data";
import { InputForm } from "@/src/shared/ui/input-form";
import { TextArea } from "@/src/shared/ui/text-area";

export interface InputsCourseProps {
	register: UseFormRegister<ICreateCourse>;
	errors?: FieldErrors<ICreateCourse>;
}
export const InputsCourse = ({ register, errors }: InputsCourseProps) => {
	return (
		<div className="w-[350px] flex flex-col gap-[20px]">
			{inputsCourseData.map((elem) => {
				if (elem.state === "normal-input" || elem.state === "small-input") {
					return (
						<div
							key={elem.name}
							className={`${
								elem.state === "small-input" ? "w-[200px]" : "w-auto"
							}`}
						>
							<InputForm<ICreateCourse>
								type={elem.name}
								placeholder={elem.name}
								name={elem.name}
								register={register}
								error={errors ? errors[elem.name] : undefined}
								style={elem.state === "small-input" ? "w-200px" : ""}
							/>
						</div>
					);
				}
				if (elem.state === "large-input") {
					return (
						<div className="" key={elem.name}>
							<TextArea
								placeholder={elem.name}
								name={elem.name}
								register={register}
								error={errors ? errors[elem.name] : undefined}
							/>
						</div>
					);
				}
				if (elem.state === "boolean-input") {
					return (
						<div key={elem.name}>
							<select
								{...register(elem.name, {
									setValueAs: (value) => value === "true",
								})}
							>
								<option value="true">True</option>
								<option value="false">False</option>
							</select>
							{errors?.[elem.name]?.message && (
								<h1>{errors[elem.name]?.message}</h1>
							)}
						</div>
					);
				}
				return null;
			})}
		</div>
	);
};
