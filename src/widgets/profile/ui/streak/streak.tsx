import {StreakCalendar} from "@/src/widgets/profile/ui/streak/streak-calendar";
import { useCheckins } from "@/src/entities/profile/hook/checkins-hook";
import { useLastWeek } from "@/src/entities/profile/hook/last-week-hook";
import 'react-calendar/dist/Calendar.css';
import { Fire } from "@/src/shared/ui/fire";
import ClipLoader from "react-spinners/ClipLoader";

export const Streak = () => {
    const { dataWeek, loadingWeek, errorWeek } = useCheckins();
    const { data, loading, error } = useLastWeek();

    console.log(dataWeek)
    const availableDays = new Set(Object.keys(data?.data ?? {}));

    return (
        <section className="w-[840px] h-[600px] bg-purplelight rounded-3xl border-2 border-purple p-2 flex flex-col gap-5 justify-around">
            <div className="flex flex-col gap-2 p-2 w-[600px]">
                <h1 className="text-2xl">Щоденний страйк</h1>
                <p>
                    Проходьте завдання кожен день та отримайте в кінці щоденного страйку
                    рідкісний бейдж
                </p>
            </div>

            <div className="flex flex-row justify-evenly w-full items-center gap-2 p-2 mb-10">
                {
                    loadingWeek || loading ? <div><ClipLoader color="#65558F"/></div>
                    : errorWeek || error ? <div>{error}</div>
                    : (<>
                            <div className="flex flex-col ">
                            <StreakCalendar availableDays={availableDays} />
                            </div>
                            <div className="flex flex-col items-center gap-2">
                            <Fire color={"redFire"} width={100} height={100}/>
                            <span>{Object.values(data?.data ?? {})[0]}</span>
                            </div>
                    </>)
                }


            </div>

            <button className="flex self-end px-4 py-2 bg-purple text-white rounded-2xl text-sm p-2 mt-10">
                Продовжити навчання
            </button>


        </section>
    );
};
