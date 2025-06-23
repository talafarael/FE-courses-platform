import logo from "@/public/Logo.svg";
import { ItemList } from "@/src/entities/footer/ui/brandInfo/item-list";
import Image from "next/image";
import { navigationList } from "@/src/shared/lib/constants/navigation-list";

export const BrandInfo = () => {
  return (
    <div className="flex justify-between w-[350px]  md:w-[400px]">
      <Image
        className="md:w-[150px] md:h-[150px]"
        height={130}
        width={130}
        src={logo}
        alt="logo"
      />
      <div className="flex flex-col gap-3 items-center justify-center">
        {navigationList.map(({ title, link }) => (
          <ItemList key={title} title={title} link={link} />
        ))}
      </div>
    </div>
  );
};
