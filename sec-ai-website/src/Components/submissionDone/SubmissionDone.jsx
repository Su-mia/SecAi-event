import React from "react";
import RegNavBar from "../Registration/RegNavBar";
import background_image from "../../assets/backgrounds/background.jpg";

function SubmissionDone() {
  return (
    <div
      className="flex flex-col
                bg-cover bg-center bg-no-repeat
                  h-screen
                 "
      style={{ backgroundImage: `url(${background_image})` }}
    >
      <RegNavBar />
      <div className="text-2xl font-fira-code font-bold flex justify-center items-center h-full ">
        {" "}
        Registered successfully !
      </div>
    </div>
  );
}

export default SubmissionDone;
