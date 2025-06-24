import Image from "next/image";
import whiteAchievesd from "@/public/main-icons/white-achievesd.svg";

interface BadgesItemProps {
    name: string;
    description: string;
}

export const BadgesItem = ({name, description}: BadgesItemProps) => {
    return(
        <div className="flex flex-row self-center bg-purple w-[600px] h-[200px] rounded-3xl p-2 text-white gap-5">
            <div className="flex items-baseline justify-center w-[40px]">
                <Image src={whiteAchievesd} alt="achievements" width={40} height={40} />
            </div>
            <div className="flex flex-col gap-2 items-baseline flex-1">
                <h1 className="text-xl font-[400]">
                    {name}
                </h1>
                <div className="text-lg">
                    <p>
                        {description}
                    </p>
                    <p>Усією командою бажаємо вам успіхів 😇</p>
                </div>
            </div>
        </div>
    )
}