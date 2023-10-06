import { React } from "react";
import { generateDate, months } from "../util/Calendar";
import check from "../util/cn";
import dayjs from "dayjs";
import { useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

export default function Calendar() {
  console.log(generateDate());
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectdate] = useState(currentDate);

  return (
    <div className="Calendar-container w-96 h-98 p-5 pt-8">
      <div className="Calendar-header flex justify-between">
        <h1 className="font-semibold">
          {months[today.month()]} {today.year()}
        </h1>
        <div className="flex items-center gap-5">
          <GrFormPrevious
            className="w-5 h-5 cursor-pointer"
            onClick={() => {
              setToday(today.month(today.month() - 1));
            }}
          />

          <GrFormNext
            className="w-5 h-5 cursor-pointer"
            onClick={() => {
              setToday(today.month(today.month() + 1));
            }}
          />
        </div>
      </div>
      <div className="w-full grid grid-cols-7">
        {days.map((day, index) => {
          return (
            <h1 key={index} className="h-14 grid place-content-center">
              {day}
            </h1>
          );
        })}
      </div>
      <div className="w-full grid grid-cols-7">
        {generateDate(today.month(), today.year()).map(
          ({ date, currentMonth, today }, index) => {
            return (
              <div key={index} className="h-14 grid place-content-center">
                <h1
                  className={check(
                    currentMonth ? "" : "text-gray-400",
                    today ? "today-cercle" : "",
                    selectDate.toDate().toDateString() ===
                      date.toDate().toDateString()
                      ? "bg-cyan-300"
                      : "",
                    "h-10 w-10 grid place-content-center rounded-full hover:bg-cyan-300 hover:text-cyan-900 transition-all cursor-pointer"
                  )}
                  onClick={() => {
                    setSelectdate(date);
                  }}
                >
                  {date.date()}
                </h1>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}
