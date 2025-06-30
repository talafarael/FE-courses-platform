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
		<div className="">
			<CoursePicture img={picture} />
			<h1 className="text-[30px]">{name}</h1>
			<h1 className="text-500 text-[20px]">{description}</h1>
		</div>
	);
};
