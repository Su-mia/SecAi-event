import React, { useState, useEffect } from "react";
import FogEffect from "./FogEffect";
import eventLogo from "../../assets/Home/HnT_logo.svg";

import Binaries from "../../assets/Home/hero-binaries.svg";
import MagicalButton from "./MagicalButton";

export default function Hero() {
  const targetDate = new Date("2024-12-19T00:15:00").getTime(); // Set your target date here
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      const remainingTime = calculateTimeLeft();
      setTimeLeft(remainingTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  const animatedStyle = {
    transition: "all 0.5s ease-in-out",
    transform: "scale(1.1)",
  };

  const coordinates1 = { top: -12, left: 35 };
  const coordinates2 = { top: -12, right: 35 };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative gap-y-8  max-w-[100vw] z-10 overflow-x-clip">
      <img src={Binaries} alt="" className="absolute top-0 opacity-40 sm:opacity-20 z-0 min-w-min" />

      <div className="absolute -top-30 -right-[650px] sm:-right-[600px] md:-right-96">
        <FogEffect color="blue" coordinates={coordinates1} size={70} />
      </div>
      <div className="absolute -top-30 -left-[650px] sm:-left-[600px] md:-left-96">
        <FogEffect color="" coordinates={coordinates1} size={70} />
      </div>

      <div className="z-10 relative w-32 sm:w-full grid place-items-center mt-20">
        <img src={eventLogo} alt="" />
      </div>

      <div className="flex space-x-4 sm:space-x-12 md:space-x-16 z-10">
        <div className="w-20 h-24 sm:w-32 sm:h-32 md:h-40 md:w-40 flex items-center flex-col justify-center border border-dark text-center border-t-purple-600 border-x-purple-800 rounded-3xl bg-dark">
          <p
            className="text-2xl sm:text-5xl md:text-7xl cursor-default"
            style={animatedStyle}
          >
            {String(timeLeft.days).padStart(2, "0")}
          </p>
          <p className="pt-2 cursor-default text-md sm:text-2xl">Days</p>
        </div>
        <div className="w-20 h-24 sm:w-32 sm:h-32 md:h-40 md:w-40 flex items-center flex-col justify-center border border-dark text-center border-t-purple-600 border-x-purple-800 rounded-3xl bg-dark">
          <p
            className="text-2xl sm:text-5xl md:text-7xl cursor-default"
            style={animatedStyle}
          >
            {String(timeLeft.hours).padStart(2, "0")}
          </p>
          <p className="pt-2 cursor-default text-md sm:text-2xl">Hours</p>
        </div>
        <div className="w-20 h-24 sm:w-32 sm:h-32 md:h-40 md:w-40 flex items-center flex-col justify-center border border-dark text-center border-t-blue-500 border-x-blue-800 rounded-3xl bg-dark">
          <p
            className="text-2xl sm:text-5xl md:text-7xl cursor-default"
            style={animatedStyle}
          >
            {String(timeLeft.minutes).padStart(2, "0")}
          </p>
          <p className="pt-2 cursor-default text-md sm:text-2xl">Minutes</p>
        </div>
        <div className="w-20 h-24 sm:w-32 sm:h-32 md:h-40 md:w-40 flex items-center flex-col justify-center border border-dark text-center border-t-blue-500 border-x-blue-800 rounded-3xl bg-dark">
          <p
            className="text-2xl sm:text-5xl md:text-7xl cursor-default"
            style={animatedStyle}
          >
            {String(timeLeft.seconds).padStart(2, "0")}
          </p>
          <p className="pt-2 cursor-default text-md sm:text-2xl">Seconds</p>
        </div>
      </div>
      <MagicalButton variant="primary" />
    </div>
  );
}
