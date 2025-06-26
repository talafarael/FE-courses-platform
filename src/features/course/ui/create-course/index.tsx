"use client";
import { ICreateCourse } from "../../model/create-course";
import { mockCourse } from "../../model/mock-course";
import { FormCourse } from "../form-course";

export const CreateCourse = () => {
	const handlerSend = (data: ICreateCourse) => {
		console.log(data);
	};
	return (
		<div>
			<FormCourse handlerSend={handlerSend} courseDefaultValue={mockCourse} />
		</div>
	);
};
