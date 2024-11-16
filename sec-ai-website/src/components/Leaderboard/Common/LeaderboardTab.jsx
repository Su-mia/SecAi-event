import { useState } from "react";
import LeaderboardChallengeSelectionButton from "./LeaderboardChallengeSelectionButton";
import  displayedMessages from '../../../assets/displayed_messages.json';
import leaderBoardMockData from '/src/assets/Leaderboard/teams_leaderboard.json'
import LeaderboardTable from "./LeaderboardTable";
import PublicLeaderboard from "../Public/PublicLeaderboard";
import PrivateLeaderboard from "../Private/PrivateLeaderboard";
const challenges = [
  { name: "Total" },
  { name: "Challenge" },
  { name: "Challenge" },
  { name: "Challenge" },
  { name: "Challenge" },
  { name: "Challenge" },
  { name: "Challenge" },
  { name: "Challenge" },
  { name: "Challenge" },
  { name: "Challenge" },
  { name: "Challenge" },
]; //TODO : remove after testing
const leaderboards = [
  {
    name: "Public",
  },
  {
    name: "Private",
  },
];
function LeaderBoardTab(props) {
  const [activeChallenge, setActiveChallenge] = useState(0);
  const [activeLeaderboard, setActiveLeaderboard] = useState(0); // 0 for public 1 for private
  return (
    
    <div className={"flex h-lvh flex-col w-full items-center mt-10 transition-all ease-in-out opacity-0 " + (props.intransition ? "opacity-0" : "opacity-100")}>
        {/* This shows total, challenge1, .... buttons */ }
      <div className="flex no-scrollbar flex-row items-start gap-8 font-fira-code overflow-x-scroll whitespace-nowrap md:w-full py-2 px-2 scroll-m-20 scrollbar-hidden">
        {challenges.map((button, index) => (
          <LeaderboardChallengeSelectionButton
            key={index}
            id={index}
            buttonInfo={button}
            active={activeChallenge === index}
            setActive={setActiveChallenge}
          />
        ))}
      </div>
        {/* This shows Public , Private selection  */}
      <div className="flex flex-row md:justify-start justify-center  gap-14 w-5/6 md:w-11/12 mt-10">
        {leaderboards.map((leaderboard, index) => (
          <span id={index} className={` cursor-pointer  font-fira-code text-center text-2xl md:text-[2rem] ${(activeLeaderboard == index )&& "text-mainLighter font-semibold"}`} onClick={()=>setActiveLeaderboard(index)}>{leaderboard.name}</span>
        ))}
        
      </div>
      {/* This shows Public leaderboard content or private leaderboard content  */}
      {!activeLeaderboard?  <PublicLeaderboard data={leaderBoardMockData}/> : <PrivateLeaderboard/>}
    </div>
  );
}

export default LeaderBoardTab;
