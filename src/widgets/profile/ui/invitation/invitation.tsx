import { Iadmin } from "@/src/pages/profile/Iadmin";
import calendar from "@/public/main-icons/calendar.svg";
import Image from "next/image";

export const Invitation = ({ admin }: Iadmin) => {
    if (admin) {
        return <></>;
    }

    return (
        <div className="flex flex-col gap-4 w-[640px] h-[500px] bg-purplelight rounded-2xl border-2/ border-purple p-6">
            <h1 className="text-xl font-semibold text-center">
                Надіслати запрошення на прямий ефір
            </h1>

            <div className="flex flex-col gap-1">
                <label className="text-sm text-purple">посилання на прямий ефір</label>
                <input
                    type="text"
                    placeholder="вставте посилання"
                    className="border border-purple rounded-lg p-2 outline-none"
                />
            </div>

            <div className="flex flex-row gap-4">
                <p className="w-[300px] leading-6 text-base">
                    <span className="font-bold">Супровідний текст:</span> <br />
                    Вітаю вас! Сьогодні, за нашим планом, буде перший прямий ефір, тому нагадую вам завчасно та надаю посилання для нього. Успіхів!
                </p>

                <div className="flex flex-col gap-3 bg-milk rounded-2xl border border-purple p-4 w-[330px] h-[260px]">
                    <h3 className="text-sm text-gray-700">Оберіть дату для прямого ефіру</h3>

                    <div className="flex flex-row items-center justify-between">
                        <h1 className="text-lg font-medium">Введіть дату</h1>
                        <Image src={calendar} width={40} height={40} alt="calendar" />
                    </div>

                    <div className="w-full h-[1px] bg-purple"></div>

                    <div className="flex flex-row gap-2">
                        <input
                            type="text"
                            placeholder="мм/дд/рррр"
                            className="border border-purple rounded-lg p-2 w-1/2 outline-none text-sm"
                        />
                        <input
                            type="text"
                            placeholder="Час"
                            className="border border-purple rounded-lg p-2 w-1/2 outline-none text-sm"
                        />
                    </div>

                    <div className="flex justify-end mt-auto">
                        <button className="text-purple font-medium text-sm">ОК</button>
                    </div>
                </div>
            </div>

            <div className="flex justify-center mt-auto">
                <button className="bg-purple text-white rounded-full px-6 py-2 text-base">
                    Надіслати запрошення
                </button>
            </div>
        </div>
    );
};
