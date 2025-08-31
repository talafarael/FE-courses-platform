import jobCase from "@/public/main-icons/job-case.svg"
import Image from "next/image";

interface CourseListItemProps {
    name: string | undefined;
    description: string |undefined;
}

export const CourseListItem = ({name, description}:CourseListItemProps) => {
    return(
        <div className="flex flex-row gap-2 p-2 bg-pink rounded-3xl border-2 border-purple ">
            <div>
                <Image src={jobCase} alt="job-case" width={40} height={40}/>
            </div>
            <div className="flex flex-col gap-2">
                <h1 className="text-2xl">{name}</h1>
                <p><span className="font-bold">Опис курсу:</span> {description}</p>
                <button className="bg-purple text-white w-[150px] h-[30px] rounded-xl self-end">Редагувати курс</button>
            </div>
        </div>
    )
}