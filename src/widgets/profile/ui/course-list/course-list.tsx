import {Iadmin} from "@/src/pages/profile/Iadmin";
import Star from "@/public/main-icons/star.svg"
import Image from "next/image";
import {CourseListItem} from "@/src/widgets/profile/ui/course-list/course-list-item";

export const CourseList = ({admin}:Iadmin) => {
    if(admin){
        return(<></>)
    }
    return(
        <section className="w-[840px] h-[600px] bg-purplelight rounded-3xl border-2 border-purple p-2 flex flex-col gap-5 ">
            <div className="flex flex-col gap-2 p-2">
                <div className="flex flex-row gap-2 p-2">
                    <Image src={Star} alt="star" width={80} height={80}/>
                    <div>
                        <h1 className="text-2xl font-bold">Куточок магії</h1>
                        <p>
                            У цьому таємничому куточку розкриваються двері у світ знань. Тут, як у чарівному котлі, варяться курси, збагачуючи своїх учнів мудрістю. Лекції – це зілля, що пробуджує допитливість, а тести -випробування, що зміцнюють знання.
                        </p>
                    </div>
                </div>
                    <div className="flex flex-row justify-around gap-2 items-center ">
                        <span className="text-xl">Перелік освітніх курсів:</span>
                        <button className="bg-purple text-white w-[200px] h-[30px] rounded-xl">Створити новий курс</button>
                    </div>
            </div>
            <div className="flex flex-col gap-2 p-2 overflow-y-auto ">
                <CourseListItem/>
                <CourseListItem/>
                <CourseListItem/>
            </div>
        </section>
    )
}