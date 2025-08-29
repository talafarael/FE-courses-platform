import jobCase from "@/public/main-icons/job-case.svg"
import Image from "next/image";

export const CourseListItem = () => {
    return(
        <div className="flex flex-row gap-2 p-2 bg-pink rounded-3xl border-2 border-purple ">
            <div>
                <Image src={jobCase} alt="job-case" width={40} height={40}/>
            </div>
            <div className="flex flex-col gap-2">
                <h1 className="text-2xl">Спеціаліст з легалізації (повний курс з нуля)</h1>
                <p><span className="font-bold">Опис курсу:</span> завдяки цьому курсу ви з повного нуля станете повноцінним спеціалістом з легалізації, який повністю самостійно зможе </p>
                <button className="bg-purple text-white w-[150px] h-[30px] rounded-xl self-end">Редагувати курс</button>
            </div>
        </div>
    )
}