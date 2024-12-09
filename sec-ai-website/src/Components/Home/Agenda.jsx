import React, { useState } from "react";


import purpleBinaries from "../../assets/Home/purple_binaries.svg";
const scheduleData = {
  day1: [
    { time: "15:30 PM", event: "Check in" },
    { time: "16:00 PM", event: "Opening Ceremony " },
    { time: "17:30 PM", event: "coffee break" },
    { time: "18:00 PM", event: "Open Q&A about the event" },
    { time: "18:45 PM", event: "Launch of Sec and AI challenges" },
    { time: "20:30 PM", event: "Dinner break" },
    { time: "22:00PM", event: "Fun activities" },
    { time: "00:00 AM", event: "Continuing solving challenges" },
  ],
  day2: [
    { time: "08:00 AM", event: "Breakfast" },
    { time: "12:00 AM", event: "Launch break." },
    { time: "14:30 AM", event: "Continue tackling Problems" },
    { time: "16:30 PM", event: "coffee break" },
    { time: "17:00 PM", event: "Resume challenge-solving" },
    { time: "20:00 PM", event: "Dinner Break" },
    { time: "22:00 PM", event: "Fun activities" },
    { time: "00:00 AM", event: "Continuing solving challenges" },


  ],
  day3: [
    { time: "08:00 AM", event: "Breakfast" },
    { time: "12:00 AM", event: "Launch break." },
    { time: "13:00 AM", event: "Challenges submission " },
    { time: "16:00 AM", event: "Closing ceremony " },


  ],
};

export default function Agenda() {
  const [selectedDay, setSelectedDay] = useState("day1");

  const handleDayChange = (day) => {
    setSelectedDay(day);
  };

  return (
    <div className="p-8 w-full flex justify-center flex-col relative min-h-full py-32 overflow-x-hidden"
     id="agenda">
      <h2 className="text-2xl font-bold mb-4 text-center">Event Agenda</h2>
      <div className="w-full max-w-xl relative mx-auto">
        <img
          src={purpleBinaries}
          alt=""
          className="absolute -top-32 -right-52 z-10 animate-pulse"
        />
        <div className="border-2 border-white flex flex-col items-center justify-center w-full max-w-xl mx-auto rounded-2xl relative z-10 bg-dark/90">
          {/* the fog effect */}
          <div
            className="absolute top-auto right-auto w-full h-full bg-violetLight opacity-70 z-0"
            style={{
              background: `radial-gradient(circle,  ${"#3E0854"}  10%,  transparent 50%)`,
            }}
          ></div>

          <div className="flex justify-center my-6 z-20 max-w-lg">
            <button
              className={`px-4 py-2 mx-2 rounded-3xl border-violetMedium border text-sm sm:text-lg ${
                selectedDay === "day1"
                  ? "bg-gradient-to-r from-dark to-[#7002DD] "
                  : ""
              }`}
              onClick={() => handleDayChange("day1")}
            >
              Day 1
            </button>
            <button
              className={`px-4 py-2 mx-2 rounded-3xl border-violetMedium border text-sm sm:text-lg ${
                selectedDay === "day2"
                  ? "bg-gradient-to-r from-dark to-[#7002DD] "
                  : ""
              }`}
              onClick={() => handleDayChange("day2")}
            >
              Day 2
            </button>
            <button
              className={`px-4 py-2 mx-2 rounded-3xl border-violetMedium border text-sm sm:text-lg ${
                selectedDay === "day3"
                  ? "bg-gradient-to-r from-dark to-[#7002DD] "
                  : ""
              }`}
              onClick={() => handleDayChange("day3")}
            >
              Day 3
            </button>
          </div>

          <div className="shadow-md rounded-lg p-6 flex flex-col items-start z-20 max-w-lg">
            {scheduleData[selectedDay].map((item, index) => (
              <div key={index} className="flex  py-2 gap-3">
                <span className="font-semibold">{item.time}</span>
                <span className="text-sm sm:text-lg">{item.event}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}