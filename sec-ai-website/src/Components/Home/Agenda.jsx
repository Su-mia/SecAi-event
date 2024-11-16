import React, { useState } from "react";


import purpleBinaries from "../../assets/Home/purple_binaries.svg";
const scheduleData = {
  day1: [
    { time: "9:00 AM", event: "Opening Ceremony" },
    { time: "10:00 AM", event: "Keynote Speaker" },
    { time: "11:00 AM", event: "Workshop 1" },
    { time: "12:00 PM", event: "Lunch Break" },
    { time: "1:00 PM", event: "Panel Discussion" },
    { time: "2:00 PM", event: "Workshop 2" },
    { time: "3:00 PM", event: "Networking" },
    { time: "4:00 PM", event: "Tech Talk" },
    { time: "5:00 PM", event: "Closing Ceremony" },
  ],
  day2: [
    { time: "9:00 AM", event: "Morning Yoga" },
    { time: "10:00 AM", event: "Session 1" },
    { time: "11:00 AM", event: "Session 2" },
    { time: "12:00 PM", event: "Lunch Break" },
    { time: "1:00 PM", event: "Workshop A" },
    { time: "2:00 PM", event: "Workshop B" },
    { time: "3:00 PM", event: "Meet the Experts" },
    { time: "4:00 PM", event: "Tech Expo" },
    { time: "5:00 PM", event: "Evening Wrap-up" },
  ],
  day3: [
    { time: "9:00 AM", event: "Breakfast Networking" },
    { time: "10:00 AM", event: "Demo Sessions" },
    { time: "11:00 AM", event: "Hackathon" },
    { time: "12:00 PM", event: "Lunch Break" },
    { time: "1:00 PM", event: "Final Presentations" },
    { time: "2:00 PM", event: "Judging Panel" },
    { time: "3:00 PM", event: "Award Ceremony" },
    { time: "4:00 PM", event: "Closing Speech" },
    { time: "5:00 PM", event: "Farewell" },
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