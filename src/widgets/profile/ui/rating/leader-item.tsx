import { Avatar } from "@/src/shared/ui/avatar";
import Image from "next/image";
import Awards from "@/public/main-icons/awards.svg";
import WhiteAward from "@/public/main-icons/white-awards.svg";

interface LeaderItemProps {
    place: number;
    name: string | null;
    rating: string | null;
    userplace: number;
}

export const LeaderItem = ({ place, name, rating, userplace }: LeaderItemProps) => {
    const isCurrentUser = place === userplace;
    const newname:string|null="id_"+name?.slice(0, 8);
    return (
        <div className={`p-2 flex flex-row items-center gap-2 text-2xl rounded-2xl justify-between w-full ${isCurrentUser ? "bg-purple text-white" : ""}`}>
            <div className="flex flex-row items-center justify-around w-[50%] gap-4">
                <span>{place}</span>
                <Avatar width={75} height={75} />
                <span className="text-2xl">{newname ?? `Анонім`}</span>
            </div>
            <div className="flex items-center justify-center w-[100px] h-[40px] bg-pinky text-purple font-medium text-2xl rounded-2xl">
                {rating ?? "0"}
            </div>
            <Image
                src={isCurrentUser ? WhiteAward : Awards}
                alt="awards"
                width={40}
                height={40}
            />
        </div>
    );
};
