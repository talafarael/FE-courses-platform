import Image from "next/image";

export interface CoursePictureProps {
	img: string;
	style?: string;
}
export const CoursePicture = ({ img, style }: CoursePictureProps) => {
	return (
		<Image
			height={60}
			width={70}
			className={`rounded-[50%] ${style}`}
			alt=""
			src={img}
		/>
	);
};
