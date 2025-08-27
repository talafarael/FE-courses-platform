import hits from "@/public/main-icons/hits.svg"
import Image from "next/image";
import {HitsItem} from "@/src/widgets/profile/ui/hits/hits-item";
import {useHits} from "@/src/entities/profile/hook/hits-hook";
import ClipLoader from "react-spinners/ClipLoader";

export const Hits=()=>{
    const {data, loading, error} = useHits();

    if(data?.data === 0){
         return(<></>)
     }
    return(
        <section className="flex flex-col  gap-2 w-[840px] h-[470px] bg-purplelight rounded-3xl border-2 border-purple p-2 ">
            <div className="flex flex-row items-center gap-2 p-2">
                <Image src={hits} alt="hits" width={50} height={50} />
                <span className="flex gap-1">
                    Ваші влучання:
                    <span className="font-bold undx1rline underline-offset-4 ">
                        {data?.data}
                    </span>
                </span>
            </div>
            <div className="flex flex-col self-center overflow-auto gap-6 p-2 h-full" >
                {
                    loading ? (<div className="flex justify-center items-center self-center"><ClipLoader color="#65558F"/></div>) :
                    error ? (<div>Error</div>) :
                    (
                        <div className="flex flex-col gap-2 ">
                            <HitsItem/>
                            <HitsItem/>
                            <HitsItem/>
                            <HitsItem/>
                        </div>)
                }
            </div>
        </section>
    )
}