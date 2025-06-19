import {Avatar} from "@/src/shared/ui/avatar";
import Link from "next/link";
import {ROUTES} from "@/src/shared/lib/constants/routes";
interface HelloBarProps {
    mainLable: string;
    secondaryLable: string;
    authorized: boolean;
}

export const HelloBar = ({mainLable, secondaryLable,authorized=false}: HelloBarProps) => {
    return(
        <div className="w-[1500px] h-[170px] bg-purplelight rounded-3xl border-2 border-purple p-2 flex items-center gap-5 justify-between">
            <div className="flex items-center flex-row gap-4">
                <Avatar/>
                <div className="">
                    <h1 className="text-2xl ">
                        {mainLable}
                    </h1>
                    <p>
                        {secondaryLable}
                    </p>
                </div>
            </div>
            {!authorized && (
                <Link className="px-4 py-2 bg-purple text-white rounded-2xl text-sm font-medium hover:opacity-90 transition" href={ROUTES.register} >
                   Реєстрація
                </Link>

            )}
        </div>
    )
}