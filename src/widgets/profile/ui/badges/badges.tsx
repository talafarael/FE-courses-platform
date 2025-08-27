import achieved from "@/public/main-icons/achieved.svg"
import Image from "next/image";
import { BadgesItem } from "./badges-item";
import {useBadges} from "@/src/entities/profile/hook/badges-hook";
import ClipLoader from "react-spinners/ClipLoader";

export const Badges = () => {
    const {data, loading, error} = useBadges();

    const badgeCount = data?.data?.length ?? 0;

    if(badgeCount === 0){
         return(<></>)
     }

    return (
        <section className="w-[640px] h-[320px] bg-purplelight rounded-3xl border-2 border-purple p-2 flex flex-col gap-5">
            <div className="flex flex-row items-center gap-2 p-2">
                <Image src={achieved} alt="achievements" width={50} height={50} />
                <span>
                    Бейджики:
                    <span className="font-bold underline underline-offset-4 ml-1">
                        {badgeCount}
                    </span>
                </span>
            </div>

            <div className="flex flex-col self-center overflow-y-auto gap-5 h-[220px] w-full px-2">
                {loading ? (
                    <div className="flex items-center justify-center h-full">
                        <div className="flex items-center justify-center self-center"><ClipLoader color="#65558F"/></div>
                    </div>
                ) : error ? (
                    <div className="flex items-center justify-center h-full">
                        <div className="text-gray-600">error: {error}</div>
                    </div>
                ) : (
                    data?.data?.map((badge, index) => (
                        <BadgesItem key={index} name={badge.name} description={badge.description}/>
                    ))
                )}
            </div>
        </section>
    );
};