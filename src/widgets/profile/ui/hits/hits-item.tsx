
export const HitsItem = () => {
    return(
            <div className="bg-pink w-[750px] h-[150px] rounded-3xl border-2 border-purple p-2">
                <div className="flex flex-row items-center gap-2 p-2">
                        <span className="font-bold">
                            Тест #1:
                        </span>
                    <span className=" underline underline-offset-4 ">
                            Введення до легалізації. Основні поняття та терміни
                        </span>
                </div>
                <div className="flex flex-row items-center gap-2 p-2">
                        <span className="font-bold underline underline-offset-4 ">
                            Правильних відповідей:
                        </span>
                    <div className="bg-purple w-[100px] h-[15px] rounded-2xl">
                    </div>
                    <span className=" underline underline-offset-4 ">
                            100%
                        </span>
                </div>
                <div className="flex flex-row items-center gap-2 p-2">
                        <span className="font-bold underline underline-offset-4 ">
                            Бали за тест:
                        </span>
                    <div className="bg-purple w-[40px] h-[40px] rounded-2xl text-white flex justify-center items-center">5</div>
                </div>
            </div>
    )
}