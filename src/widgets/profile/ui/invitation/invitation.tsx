import { Iadmin } from "@/src/pages/profile/Iadmin";
import {useState} from "react";
import {getBrodcastQuery} from "@/src/entities/profile/api/brodcast"

export const Invitation = ({ admin }: Iadmin) => {
    const [link, setLink] = useState<string>("");

    const handleSendInvitation = async () => {
        try {
            const response = await getBrodcastQuery(link);
            setLink("");
            console.log(response);
        } catch (error) {
            console.error("Error sending invitation:", error);
        }
    };
    if(admin){
        return (
            <div className="flex flex-col gap-4 w-[640px] h-[350px] bg-purplelight rounded-2xl border-2/ border-purple p-6">
                <h1 className="text-xl font-semibold text-center">
                    Надіслати запрошення на прямий ефір
                </h1>

                <div className="flex flex-col gap-1">
                    <label className="text-sm text-purple">посилання на прямий ефір</label>
                    <input
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                        type="text"
                        placeholder="вставте посилання"
                        className="border border-purple rounded-lg p-2 outline-none"
                    />
                </div>

                <div className="flex flex-row gap-4 items-center text-center justify-center">
                    <p className="w-[300px] leading-6 text-base">
                        <span className="font-bold">Супровідний текст:</span> <br />
                        Вітаю вас! Сьогодні, за нашим планом, буде перший прямий ефір, тому нагадую вам завчасно та надаю посилання для нього. Успіхів!
                    </p>

                </div>

                <div className="flex justify-center mt-auto">
                    <button onClick={handleSendInvitation} className="bg-purple text-white rounded-full px-6 py-2 text-base">
                        Надіслати запрошення
                    </button>
                </div>
            </div>
        );
    }
        return <></>;


};
