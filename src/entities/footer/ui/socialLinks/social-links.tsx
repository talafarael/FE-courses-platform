import {icons} from "@/src/entities/footer/ui/socialLinks/Icons";
import Link from "next/link";
import Image from "next/image";

export const SocialLinks = () => {
    return (
        <div className={`flex flex-row justify-between w-[400px] p-2`}>
            {icons.map(({ name, img, href }) => (
                <Link key={name} href={href}>
                    <Image  className=" md:w-[48px] md:h-[48px]" width={40} height={40} src={img} alt={name}/>
                </Link>
            ))}
        </div>
    )
}