import { SocialLinks } from "@/src/entities/footer/ui/socialLinks/social-links";
import { BrandInfo } from "@/src/entities/footer/ui/brandInfo/brand-info";

export const Footer = () => {
  return (
    <footer className=" z-20 w-full h-[190px] md:h-[170px] bg-purplelight flex justify-center items-center p-2">
      <div className="flex w-10/12 md:flex-row gap-5 flex-col justify-between items-center">
        <BrandInfo />
        <SocialLinks />
      </div>
    </footer>
  );
};
