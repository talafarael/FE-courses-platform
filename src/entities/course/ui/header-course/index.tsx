"use client";
import { CoursePicture } from "../course-picture";

export interface HeaderCourseProps {
	name: string;
	description: string;
	picture: string;
}
export const HeaderCourse = ({
	name,
	description,
	picture,
}: HeaderCourseProps) => {
	return (
		<div className="w-[90%] mt-[20px] flex">
			<CoursePicture img={picture} style="w-[100px]   " />
			<div className="flex flex-col justify-center ">
				<h1 className="text-[30px] w-auto ">{name}</h1>
				<h1 className="text-500 text-[18px] font-bold ">{description}</h1>
			</div>
		</div>
	);
};
