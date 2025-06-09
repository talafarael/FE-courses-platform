import logo from "@/public/Logo.svg"
import Link from "next/link";
import Image from "next/image";
const brandInfo =[
    {
        title: "Головна",
        link: "/"
    },
    {
        title: "Профіль",
        link: "/profile"
    },
    {
        title: "Про спеціальність",
        link: "/specialty"
    },
]

export const BrandInfo = () => {
    return (
        <div className="flex justify-between w-[350px] md:w-[400px]">
            <Image className="md:w-[150px] w-[130px]" src={logo.src} alt=""/>
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