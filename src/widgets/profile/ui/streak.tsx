import {Fire} from "@/src/shared/ui/fire";

export const Streak = () => {
    return (
        <section className="w-[840px] h-[600px] bg-purplelight rounded-3xl border-2 border-purple p-2 flex flex-col gap-5 justify-between">
            <div className="flex flex-col gap-2 p-2 w-[600px]">
                <h1 className="text-2xl ">Щоденний страйк</h1>
                <p>Проходьте завдання кожен день та отримайте в кінці щоденноо страйку рідкісний бейдж </p>
            </div>
            <div className=" flex flex-row justify-evenly w-full  items-center gap-2 p-2 ">
                <div className="grid grid-cols-7 gap-4 w-[75%] items-center">
                    <Fire color={"fire"} />
                    <Fire color={"fire"} />
                    <Fire color={"fire"} />
                    <Fire color={"fire"} />
                    <Fire color={"fire"} />
                    <Fire color={"fire"} />
                    <Fire color={"fire"} />
                    <Fire color={"fire"} />
                    <Fire color={"fire"} />
                    <Fire color={"fire"} />
                    <Fire color={"fire"} />
                    <Fire color={"fire"} />
                    <Fire color={"fire"} />
                    <Fire color={"fire"} />
                    <Fire color={"fire"} />
                    <Fire color={"fire"} />
                    <Fire color={"fire"} />
                    <Fire color={"fire"} />
                    <Fire color={"fire"} />
                    <Fire color={"fire"} />
                    <Fire color={"fire"} />
                    <Fire color={"fire"} />
                    <Fire color={"fire"} />
                    <Fire color={"fire"} />
                    <Fire color={"fire"} />
                    <Fire color={"fire"} />
                    <Fire color={"fire"} />
                    <Fire color={"fire"} />
                    <Fire color={"fire"} />
                    <Fire color={"fire"} />
                    <Fire color={"fire"} />
                    <Fire color={"fire"} />
                    <Fire color={"fire"} />
                    <Fire color={"fire"} />
                    <Fire color={"fire"} />
                    <Fire color={"fire"} />
                    <Fire color={"fire"} />
                    <Fire color={"fire"} />
                    <Fire color={"fire"} />
                    <Fire color={"fire"} />
                    <Fire color={"fire"} />
                    <Fire color={"fire"} />
                </div>
                <div className="flex flex-col items-center gap-2">
                    <Fire color={"redFire"} width={80} height={80}/>
                    <span>0</span>
                </div>
            </div>

            <button className="flex self-end px-4 py-2 bg-purple text-white rounded-2xl text-sm p-2">
                Продовжити навчання
            </button>
        </section>
    )
}