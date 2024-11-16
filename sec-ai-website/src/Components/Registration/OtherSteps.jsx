import React from "react";

function OtherSteps(props) {
  return (
    <div className="md:flex md:flex-col md:justify-end md:items-center relative w-[200px]  
                    hidden">
      <div className="w-[70px] h-[70px] rounded-full, bg-white flex justify-center items-center absolute bottom-2/3 rounded-full">
        <span className="flex justify-center items-center text-mainLighter text-xl font-fira-code font-bold">
          {props.num}
        </span>
      </div>
      <div className="w-[5px] h-full bg-white mt-[-4px]"></div>
    </div>
  );
}

export default OtherSteps;
