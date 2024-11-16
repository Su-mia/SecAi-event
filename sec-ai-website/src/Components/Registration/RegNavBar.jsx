import React from "react";
import event_logo from "../../assets/event.svg";
import club_logo from "../../assets/logo.svg";

function RegNavBar() {
  return (
    <div className="flex justify-between p-8 ">
      <a href="/">
        <img className=" h-20" src={club_logo} alt="secai logo" />
      </a>
      <a href="/">
        <img className="w-16" src={event_logo} alt="event logo" />
      </a>
    </div>
  );
}

export default RegNavBar;
