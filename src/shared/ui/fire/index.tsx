import fire from "@/public/main-icons/fire.svg";
import redFire from "@/public/main-icons/red-fire.svg";
import blackFire from "@/public/main-icons/black-fire.svg";
import opacityFire from "@/public/main-icons/opacity-fire.svg";
import Image from "next/image";

type FireColor = "fire" | "redFire" | "blackFire" | "opacityFire";

type FireProps = {
    color: FireColor;
    width?:number;
    height?:number;
};

const iconMap = {
    fire,
    redFire,
    blackFire,
    opacityFire,
};

export const Fire = ({ color = "fire",width=40,height=40 }: FireProps) => {
    const image = iconMap[color];

    return (
        <div>
            <Image width={width} height={height} src={image} alt={color} />
        </div>
    );
};