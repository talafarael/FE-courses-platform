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
		<div className="w-[90%] mt-[20px]">
			<div className="flex justify-between items-center  h-auto">
				<CoursePicture img={picture} style="w-[100px]   " />
				<h1 className="text-[24px] w-auto ml-[10px]">{name}</h1>
			</div>

			<h1 className="text-500 text-[14px] font-bold mt-[8px]">{description}</h1>
		</div>
	);
};
