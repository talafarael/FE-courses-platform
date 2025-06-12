import Image from "next/image";
import logo from "@/public/Logo.svg";

export type LogoProps = {
  style?: string;
};

export const Logo = ({ style }: LogoProps) => {
  return <Image src={logo} alt="Company logo" width={120} className={style} />;
};
