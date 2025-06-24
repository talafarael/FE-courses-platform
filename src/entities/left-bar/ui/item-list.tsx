import Link from "next/link";
import Image from "next/image";
import iconsLight from "@/public/menu/icon-light.svg";
import iconsDark from "@/public/menu/icon-dark.svg";

interface ItemListProps {
  title: string;
  link: string;
  isActive: boolean;
}

export const ItemList = ({ title, link, isActive }: ItemListProps) => {
  return (
    <Link className="flex flex-col items-center gap-2" href={link}>
      <div
        className={`${isActive ? "bg-purple" : "bg-purplelight"
          } rounded-2xl w-[60px] h-[30px] flex items-center justify-center`}
      >
        <Image
          width={20}
          height={20}
          src={isActive ? iconsLight : iconsDark}
          alt="icon"
        />
      </div>
      <span className="text-[14px] flex items-center justify-center text-center">
        {title}
      </span>
    </Link>
  );
};
