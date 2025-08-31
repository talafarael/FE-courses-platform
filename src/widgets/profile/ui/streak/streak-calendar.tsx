import { Fire } from "@/src/shared/ui/fire";
import Calendar from "react-calendar";
import { useState } from "react";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

type StreakCalendarProps = {
    availableDays: Set<string>;
};

export const StreakCalendar = ({ availableDays }: StreakCalendarProps) => {
    const [value, onChange] = useState<Value>(new Date());

    return (
        <div className="calendar-container">
            <Calendar
                value={value}
                onChange={onChange}
                showNeighboringMonth={true}
                tileContent={({ date }) => {
                    const key = date.toISOString().split("T")[0];
                    const hasData = availableDays.has(key);
                    const isNeighboringMonth = date.getMonth() !== (value instanceof Date ? value.getMonth() : (Array.isArray(value) && value[0] instanceof Date ? value[0].getMonth() : date.getMonth()));

                    return (
                        <div className="flex justify-center items-center">
                            <Fire
                                color={isNeighboringMonth ? "blackFire" : hasData ? "redFire" : "fire"}
                                width={35}
                                height={35}
                            />
                        </div>
                    );
                }}
                nextLabel={null}
                prevLabel={null}
                next2Label={null}
                prev2Label={null}
                showNavigation={false}
                formatShortWeekday={() => ''}
            />
            <style jsx global>{`
                .calendar-container {
                    width: 100%;
                    max-width: 1000px; 
                }

                .react-calendar {
                    background: transparent;
                    border: none;
                    width: 100%;
                    height: auto;
                    max-height: 300px;
                }

                .react-calendar__tile abbr {
                    display: none;
                }

                .react-calendar__tile {
                    background: transparent;
                    width: 50px; 
                    height: 50px; 
                    padding: 0;
                }

                .react-calendar__month-view__days {
                    gap: 10px; 
                }

                .react-calendar__month-view__weekdays {
                    display: none;
                }

                .react-calendar__tile--active,
                .react-calendar__tile--now,
                .react-calendar__tile:focus,
                .react-calendar__tile:active,
                .react-calendar__tile:enabled:hover {
                    background: transparent !important;
                    color: inherit !important;
                    outline: none !important;
                }
                .react-calendar__tile {
                    background: transparent;
                    width: 50px;
                    height: 50px;
                    padding: 5px; 
                    box-sizing: border-box;
                }
                .react-calendar__month-view__days {
                    display: grid;
                    grid-template-columns: repeat(7, auto); 
                    justify-content: center; 
                }
                .react-calendar__month-view__days {
                    display: grid;
                    grid-template-columns: repeat(7, 60px); 
                    justify-content: center; 
                    gap: 10px;
                }
                .react-calendar__month-view__days {
                    display: grid;
                    grid-template-columns: repeat(7, 60px); 
                    gap: 10px; 
                    justify-content: flex-start; 
                }
            `}</style>
        </div>
    );
};
