import { LeaderItem } from "./leader-item";
import {useLeaderBoard} from "@/src/entities/profile/hook/leader-board-hook";
import ClipLoader from "react-spinners/ClipLoader";

export const Rating = () => {
    const {data, loading, error} = useLeaderBoard();

    return (
        <section className="w-[640px] h-[1100px] bg-purplelight rounded-3xl border-2 border-purple p-2 flex flex-col gap-5">
            {
                loading ? <div className=" flex items-center justify-center self-center"><ClipLoader color="#65558F"/></div>
                : error ? <div>Error</div>
                        : (
                        <div>
                            <div className="p-2">
                                <h2 className="text-2xl">Рейтинг</h2>
                                <p className="w-[500px]">
                                    Наразі, ви посідаєте {data?.data.user_place} місце в загальному рейтингу серед усіх користувачів 👀
                                </p>
                            </div>
                            <div className="flex flex-col gap-1">
                                {data?.data.top.map(([name, rating], index) => (
                                    <LeaderItem key={index} place={index+1}  name={name} rating={rating} userplace={data?.data.user_place} />
                                ))}
                            </div>
                        </div>
                    )
            }

        </section>
    );
};
