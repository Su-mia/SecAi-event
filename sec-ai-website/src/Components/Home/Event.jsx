import React from 'react'
import secaiLogo from '../../assets/Home/secailogo.svg'
import eventLogo from '../../assets/Home/HnT_logo.svg'
import purpleBinaries from '../../assets/Home/purple_binaries.svg'
import blueBinaries from '../../assets/Home/blue_binaries.svg'
export default function Event() {
  return (
    <section
      className="flex flex-col items-center max-w-screen py-20 sm:py-32 overflow-hidden gap-y-7 min-h-screen px-4 sm:px-0"
      id="about"
    >
      <div
        className="relative border-violetMedium border-4 rounded-2xl w-full  sm:mx-0 sm:w-2/3  bg-dark z-10"
        
      >
        <img
          src={purpleBinaries}
          alt=""
          className=" absolute -top-32 -left-64 opacity-45"
        />
        <div className="  w-full p-6 rounded-2xl">
          <h1 className="font-open-sans text-2xl sm:text-3xl md:text-5xl  text-center font-bold pt-2 pb-12 text-violetMedium">
            WHAT IS HACK&TRAIN ?
          </h1>
          <div className="flex items-center flex-col-reverse sm:flex-row gap-8">
            <p className="w-full sm:w-4/5 text-sm sm:text-md md:text-lg  sm:px-6">
              the event as i told you will be a mix of cyber security and Ai so
              participants will try to solve CTFs (challenges that are related
              to cyber security ) by the end of the challenge they will find a
              flag to pass in to the Ai challenge
            </p>
            <div className="w-full grid place-items-center sm:w-1/5">
              <img src={eventLogo} alt="" className="h-36 sm:h-52" />
            </div>
          </div>
        </div>
      </div>

      <div className="border-mainLighter border-4 p-6 w-full sm:w-2/3 relative rounded-2xl">
        <img
          src={blueBinaries}
          alt=""
          className=" absolute -bottom-32 -right-52 opacity-45 "
        />
        <h1 className="font-open-sans text-2xl sm:text-3xl md:text-5xl   text-center font-bold pt-2 pb-12 text-mainLighter">
          WHO ARE WE ?
        </h1>
        <div className="flex flex-col sm:flex-row items-center gap-8">
          <div className="w-full sm:w-1/5 grid place-items-center">
            <img src={secaiLogo} alt="" className="h-36 sm:h-52" />
          </div>
          <p className="w-full sm:w-4/5 text-sm sm:text-md md:text-lg px-2 sm:px-6">
            the event as i told you will be a mix of cyber security and Ai so
            participants will try to solve CTFs (challenges that are related to
            cyber security ) by the end of the challenge they will find a flag
            to pass in to the Ai challenge
          </p>
        </div>
      </div>
    </section>
  );
}
