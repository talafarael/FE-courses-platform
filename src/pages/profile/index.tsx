import {HelloBar} from "@/src/widgets/main-page/ui/hellow-bar";
import {Streak} from "@/src/widgets/profile/ui/streak/streak";
import {Rating} from "@/src/widgets/profile/ui/rating/rating";
import {Hits} from "@/src/widgets/profile/ui/hits/hits";
import {Badges} from "@/src/widgets/profile/ui/badges/badges";
import {Notifications} from "@/src/widgets/profile/ui/notifications/notifications";
import {Iadmin} from "@/src/pages/profile/Iadmin";
import {CourseList} from "@/src/widgets/profile/ui/course-list/course-list";
import {Invitation} from "@/src/widgets/profile/ui/invitation/invitation";

export const ProfilePage = ({admin}:Iadmin) => {

    return(
        <div className="flex flex-col items-center p-2 gap-5  m-10">
            <HelloBar/>
            <div className="flex flex-row gap-5 w-[1500px]">
                <div className="flex flex-col gap-6">
                    <CourseList admin={admin}/>
                    <Streak admin={admin}/>
                    <Hits admin={admin}/>
                    <Notifications/>
                </div>
                <div className="flex flex-col gap-5">
                    <Rating/>
                    <Invitation admin={admin}/>
                    <Badges admin={admin}/>
                </div>
            </div>


        </div>
    )
}