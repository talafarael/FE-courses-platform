import {BigCard} from "@/src/entities/main/big-card";
import {SmallCard} from "@/src/entities/main/small-card";
export const Courses = () => {
    return(


                <div className="grid grid-cols-1 gap-4 w-[800px] bg-[#f5eaff] p-4 rounded-3xl border-2 border-purple">
                    <div className="text-2xl font-bold">
                        <h1>Інші навчальні курси</h1>
                    </div>

                    <BigCard mainLable="Повний курс:" secondaryLable="Завдяки нашому курсу, який ми розробили з командою спеціалістів, ви станете мастером з легалізації іностранців в Польші"/>

                    <div className="grid grid-cols-2 gap-4">
                        <SmallCard mainLable="Карта побиту:" secondaryLable="(короткий опис курсу)"/>
                        <SmallCard mainLable="Карта побиту:" secondaryLable="(короткий опис курсу)"/>
                        <SmallCard mainLable="Карта побиту:" secondaryLable="(короткий опис курсу)"/>
                        <SmallCard mainLable="Карта побиту:" secondaryLable="(короткий опис курсу)"/>
                    </div>
                </div>
    )
}