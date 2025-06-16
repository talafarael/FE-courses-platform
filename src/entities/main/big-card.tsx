
interface BigCardProps {
    mainLable: string;
    secondaryLable: string;
}

export const BigCard = ({mainLable, secondaryLable}: BigCardProps) => {
    return(

            <div className="col-span-1 h-[270px] bg-[#E8DEF8] rounded-2xl p-4 flex flex-col justify-between shadow-md border-2 border-black">
                <div className="flex flex-col gap-4">
                    <div className="w-16 h-16 bg-purple rounded-full" />
                    <div>
                        <p className="font-semibold text-xl">{mainLable}</p>
                        <p className="text-lg">
                            {secondaryLable}
                        </p>
                    </div>
                </div>
                <div className="flex justify-end">
                    <button className="px-4 py-1 bg-purple text-white rounded-xl text-sm">Детальніше</button>
                </div>
            </div>

    )
}