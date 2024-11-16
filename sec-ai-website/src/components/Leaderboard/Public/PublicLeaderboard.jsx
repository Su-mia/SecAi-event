import React from "react";
import displayedMessages from "../../../assets/displayed_messages.json";
import LeaderboardTable from "../Common/LeaderboardTable";
function PublicLeaderboard({ data }) {
  return (
    
      <div className=" flex flex-col md:w-11/12 items-center"> 
          <div className="font-fira-code text-lg font-semibold  mt-4">
            <p className="hidden md:block mt-2">
              {displayedMessages.leaderboard_standing_calculation}
            </p>
          </div>
          <LeaderboardTable data={data} />
      </div>
  );
}

export default PublicLeaderboard;
