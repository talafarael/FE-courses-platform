import instagram from "@/public/icons/instagram.svg"
import telegram from "@/public/icons/telegram.svg"
import email from "@/public/icons/email.svg"
import phone from "@/public/icons/phone.svg"
import Link from "next/link";

const icons = [
    {
        name: "instagram",
        img: instagram.src,
        href: "https://www.instagram.com"
    },
    {
        name: "telegram",
        img: telegram.src,
        href: "https://www.telegram.com"
    },
    {
        name: "email",
        img: email.src,
        href: "mailto"
    },
    {
        name: "phone",
        img: phone.src,
        href: "tel:+380991234567"
    }
]

export const SocialLinks = () => {
    return (
        <div className={`flex flex-row justify-between w-[400px] p-2`}>
            {icons.map(({ name, img, href }) => (
                <Link key={name} href={href}>
                    <img className="w-[40px] h-[40px] md:w-[48px] md:h-[48px]" src={img} alt={name}/>
                </Link>
            ))}
        </div>
    )
}