import React, { useState, useEffect } from "react";
import eventLogo from "../../assets/Home/HnT_logo.svg";

const mentors = [
  {
    name: "John Doe",
    photo: eventLogo,
    description: [
      "John is an expert in JavaScript and React with 10 years of experience.",
    ],
  },
  {
    name: "Jane Smith",
    photo: eventLogo,
    description: [
      "Jane is a cybersecurity expert with 15 years of experience.",
      "She has worked with top companies like Google and Facebook.",
    ],
  },
  // Add more mentors here
];

export default function MentorCarousel({
  autoSlide = true,
  autoSlideInterval = 4000,
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (autoSlide) {
      const slideInterval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % mentors.length);
      }, autoSlideInterval);
      return () => clearInterval(slideInterval);
    }
  }, [autoSlide, autoSlideInterval, mentors.length]);

  const handlePrevClick = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + mentors.length) % mentors.length
    );
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % mentors.length);
  };

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div
      className="relative w-full   grid place-items-center bg-mainLighter h-auto "
      id="speakers"
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center w-full bg-dark py-9 font-bold">
        Speakers
      </h1>
      <div className="relative w-full py-8 px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-lg min-h-[60vh] lg:min-h-[70vh]">
          {mentors.map((mentor, index) => (
            <div
              key={index}
              className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
              data-carousel-item={index === activeIndex}
            >
              {/* Mentor Info */}
              <div className="flex flex-col md:flex-row items-center justify-center h-full text-center md:text-left gap-6 md:gap-9 ">
                <img
                  src={mentor.photo}
                  alt={mentor.name}
                  className="w-40 h-48 sm:w-52 sm:h-64 lg:w-64 lg:h-72 border-2 border-white p-3 rounded-xl object-cover mb-4 md:mb-0 "
                />
                <div
                  className=" px-2 py-6 md:px-12  bg-white mr-4 relative "
                  style={{
                    clipPath:
                      "polygon(17% 0, 80% 0, 100% 17%, 100% 100%, 85% 100%, 17% 100%, 0 81%, 0 0)",
                  }}
                >
                  <div className="absolute h-2 w-2 bg-dark rounded-full top-2 left-2"></div>
                  <div className="absolute h-2 w-2 bg-dark rounded-full bottom-2 right-2"></div>
                  <h3 className="text-xl text-center md:text-3xl font-bold text-Main mb-6 md:mb-12">
                    {mentor.name}
                  </h3>
                  {mentor.description.map((desc, index) => (
                    <p
                      key={index}
                      className="text-sm md:text-lg text-Main max-w-md"
                    >
                      {desc}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots for navigation */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-2 md:space-x-3">
          {mentors.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
                index === activeIndex ? "bg-purple-700" : "bg-gray-300"
              }`}
              aria-current={index === activeIndex}
              aria-label={`Slide ${index + 1}`}
              onClick={() => handleDotClick(index)}
            ></button>
          ))}
        </div>

        {/* Navigation buttons */}
        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-2 md:px-4 cursor-pointer group focus:outline-none"
          onClick={handlePrevClick}
        >
          <span className="inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-dark group-hover:bg-dark/50 group-focus:ring-4 group-focus:ring-white">
            <svg
              className="w-3 h-3 md:w-4 md:h-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>

        <button
          type="button"
          className="absolute top-0 right-5 z-30 flex items-center justify-center h-full px-2 md:px-4 cursor-pointer group focus:outline-none"
          onClick={handleNextClick}
        >
          <span className="inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-dark group-hover:bg-dark/50 group-focus:ring-4 group-focus:ring-white">
            <svg
              className="w-3 h-3 md:w-4 md:h-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
}
