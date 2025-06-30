import Image from "next/image";

export interface CoursePictureProps {
  img: string;
  style?: string;
}
export const CoursePicture = ({ img }: CoursePictureProps) => {
  return <Image alt="" src={img} height={50} width={50} />;
};
