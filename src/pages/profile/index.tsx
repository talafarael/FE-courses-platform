import {HelloBar} from "@/src/widgets/main-page/ui/hellow-bar";
import {Streak} from "@/src/widgets/profile/ui/streak";
import {Rating} from "@/src/widgets/profile/ui/rating/rating";
import {Hits} from "@/src/widgets/profile/ui/hits";
import {Badges} from "@/src/widgets/profile/ui/badges/badges";

export const ProfilePage = () => {

    return(
        <div className="flex flex-col items-center p-2 gap-5  m-10">
            <HelloBar mainLable="Павле, ось ваш профіль 👇" secondaryLable="Саме в цьому місці ви можете більш детально ознайомитись зі своїм прогресом та досягненнями 🙌" authorized={false}/>
            <div className="flex flex-row gap-5 w-[1500px]">
                <div className="flex flex-col gap-5">
                    <Streak/>
                    <Hits/>
                </div>
                <div className="flex flex-col gap-5">
                    <Rating/>
                    <Badges/>
                </div>
            </div>


        </div>
    )
}