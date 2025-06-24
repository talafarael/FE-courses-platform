import {BigCard} from "@/src/widgets/main-page/ui/big-card";
import {SmallCard} from "@/src/widgets/main-page/ui/small-card";

interface CoursesProps {
    autosize: boolean;
}

export const Courses = ({autosize}: CoursesProps) => {
    return(
                <div className="grid grid-cols-1 gap-4 w-[800px] bg-[#f5eaff] p-4 rounded-3xl border-2 border-purple">
                    <div className="text-2xl font-bold">
                        <h1>Інші навчальні курси</h1>
                    </div>
                    {autosize ? null :<BigCard mainLable="Повний курс:" secondaryLable="Завдяки нашому курсу, який ми розробили з командою спеціалістів, ви станете мастером з легалізації іностранців в Польші"/>}

                    <div className="grid grid-cols-2 gap-4">
                        <SmallCard mainLable="Карта побиту:" secondaryLable="(короткий опис курсу)"/>
                        <SmallCard mainLable="Карта побиту:" secondaryLable="(короткий опис курсу)"/>
                        <SmallCard mainLable="Карта побиту:" secondaryLable="(короткий опис курсу)"/>
                        <SmallCard mainLable="Карта побиту:" secondaryLable="(короткий опис курсу)"/>
                    </div>
                </div>
    )
}