import { FieldErrors, UseFormRegister } from "react-hook-form";
import { ICreateCourse } from "../../model/create-course";
import { inputsCourseData, inputsSmallCourseData } from "./input-course.data";
import { InputForm } from "@/src/shared/ui/input-form";
import { TextArea } from "@/src/shared/ui/text-area";
import { Button } from "@/src/shared/ui/button/button";

export interface InputsCourseProps {
	register: UseFormRegister<ICreateCourse>;
	errors?: FieldErrors<ICreateCourse>;
}
export const InputsCourse = ({ register, errors }: InputsCourseProps) => {
	return (
		<div className="mt-[20px] w-full flex flex-col items-center gap-[20px]">
			{inputsCourseData.map((elem) => {
				if (elem.state === "normal-input") {
					return (
						<div key={elem.name} className="w-[350px]">
							<InputForm<ICreateCourse>
								type={elem.name}
								placeholder={elem.name}
								name={elem.name}
								register={register}
								error={errors ? errors[elem.name] : undefined}
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
				return null;
			})}
			<div className="flex  w-[700px] justify-between">
				<div className="flex gap-[20px] ">
					{inputsSmallCourseData.map((elem) => {
						if (elem.state === "small-input") {
							return (
								<div key={elem.name} className="w-[150px]">
									<InputForm<ICreateCourse>
										type={elem.name}
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
										className="w-[150px] h-[50px] border-[2px] rounded-[10px] border-inputBorder"
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
					})}
				</div>

				<div>
					<Button label="Створити" type="submit" />
				</div>
			</div>
		</div>
	);
};
