import logo from "@/public/Logo.svg"
import Link from "next/link";
import Image from "next/image";
import {brandInfo} from "@/src/entities/footer/ui/brandInfo/Info";

export const BrandInfo = () => {
    return (
        <div className="flex justify-between w-[350px] md:w-[400px]">
            <Image className="md:w-[150px] md:h-[150px]" height={130} width={130} src={logo.src} alt=""/>
            <div className="flex flex-col justify-between">
                {brandInfo.map(({title, link})=>(
                    <Link key={title} href={link}>
                        {title}
                    </Link>
                ))}
            </div>
        </div>
        )
}