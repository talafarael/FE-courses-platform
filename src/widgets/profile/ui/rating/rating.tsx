import { useEffect, useState } from "react";
import { leaderBoardQuery } from "@/src/entities/profile/api/leader-board";
import { LeaderItem } from "./leader-item";
import { TopRatingResponse } from "@/src/entities/profile/type/leader-board-api";


export const Rating = () => {
    const [data, setData] = useState<TopRatingResponse | null>(null);

    useEffect(() => {
        (async () => {
            const response = await leaderBoardQuery();
            if (response) setData(response);
        })();
    }, []);

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <section className="w-[640px] h-[1100px] bg-purplelight rounded-3xl border-2 border-purple p-2 flex flex-col gap-5">
            <div className="p-2">
                <h2 className="text-2xl">Рейтинг</h2>
                <p className="w-[500px]">
                    Наразі, ви посідаєте {data.data.user_place} місце в загальному рейтингу серед усіх користувачів 👀
                </p>
            </div>
            <div className="flex flex-col gap-1">
                {data.data.top.map(([name, rating], index) => (
                    <LeaderItem key={index} place={index+1}  name={name} rating={rating} userplace={data.data.user_place} />
                ))}
            </div>
        </section>
    );
};
