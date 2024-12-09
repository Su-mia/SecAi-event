import React, { useState, useEffect } from "react";
import eventLogo from "../../assets/Home/HnT_logo.svg";
import soumeya from "../../assets/Home/mentors-pics1/soumeya.jpg";
import idriss from "../../assets/Home/mentors-pics1/idriss.jpg";
import sara from "../../assets/Home/mentors-pics1/sara.png";
import houda from "../../assets/Home/mentors-pics/houda.jpg";
import lamine from "../../assets/Home/mentors-pics/lamine.jpg";
import bilel from "../../assets/Home/mentors-pics/bilel.jpg";


const mentors = [
  {
    name: "Mohammed El Amin Larabi",
    photo: lamine,
    description: [
      "Mohammed El Amin Larabi is a senior researcher at the Algerian Space Agency, specializing in AI, computer vision, remote sensing image processing, pattern recognition, deep transfer learning, and domain adaptation. He earned his PhD from Beihang University, China, and continues to contribute to cutting-edge research in the field of advanced methods for remote sensing data analysis (EarthAI). He can be reached at: malarabi@asal.dz",
    ],
  },
  {
    name: "Mohammed Bilel Amri",
    photo: bilel,
    description: [
      "Mohammed Bilel Amri is a Research Engineer at the Algerian Space Agency's Space Techniques Center in Arzew and a PhD student at the SIMPA Laboratory, University of Science and Technology of Oran Mohamed-Boudiaf. His research focuses on applying Artificial Intelligence techniques to Earth Observation data. He can be reached at bamri@cts.asal.dz or mohammedbilel.amri@univ-usto.dz.",
    ],
  },
  {
    name: "Mohamed Idris Hamadi Hamaidi",
    photo: idriss,
    description: [
      "A 4th-year ENSIA student with diverse experience in AI, cybersecurity, quantum computing, and software engineering, currently serving as the president of SecAi students club. Former intern at SLB and Current intern at CTC .",
    ],
  },
  {
    name: "Ouari Meriem",
    photo: eventLogo,
    description: [
      "4th-year student at the Higher School of Artificial Intelligence and an AI Manager at SECAI Club, with a strong focus on interdisciplinary AI applications.",

    ],
  },
  {
    name: "Soumia Bouyahiaoui",
    photo: soumeya,
    description: [
      "4th year student of AI and data science ENSIA. AI manager at SECAI students club. AI & ML enthusiast with experience in NLP, generative AI, and reinforcement learning.",
    ],
  },
  {
    name: "Sarra Arab",
    photo: sara,
    description: [
      "4th year student of AI and data science ENSIA. AI manager at SECAI students club. AI & ML enthusiast with experience in NLP, generative AI, and reinforcement learning.",
    ],
  },
  {
    name: "aya",
    photo: sara,
    description: [
      "",
    ],
  },
  {
    name: "Maarfi Imene Nour El Houda ",
    photo: houda,
    description: [
      "- 3rd year ENSIA student",
      "- cyber security team leader at SecAI student club", 
      "- cyber security and AI enthusiast" 

    ],
  },
  {
    name: "abdelhak",
    photo: sara,
    description: [
      "",
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
        Mentors
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
