import Image from "next/image";
import avatar from "@/public/avatar.svg";

export type AvatarProps = {
    width?: number;
    height?: number;
};

export const Avatar = ({width=130, height=130}: AvatarProps ) => {
    return(
        <Image width={width} height={height} src={avatar} alt="avatar" />
    )
}