import React from "react";

function FirstStep(props) {
  return (
    <div
      className="md:flex md:flex-col md:justify-end md:items-center relative w-[200px] h-screen
                    hidden"
    >
      <div className="w-[70px] h-[70px] rounded-full, bg-white flex justify-center items-center  rounded-full relative">
        <span className="flex justify-center items-center text-mainLighter text-xl font-fira-code font-bold ">
          {props.num}
        </span>
      </div>
      <div className="w-[5px] h-3/4 bg-white mt-[-4px]"></div>
    </div>
  );
}

export default FirstStep;
