import { useState } from "react";
import ChallengeDisplay from "./ChallengeDisplay";
import ChallengesScrollbar from "./ChallengesScrollbar";
import ctf from '/src/assets/Leaderboard/CTF/ctf_model.json' //TODO: Remove when backend ready
import ctf_examples from '/src/assets/Leaderboard/CTF/ctfs_example.json' //TODO: Remove when backend ready
function CTFsTab(props){
    const [CurrentChallenge, SetCurrentChallenge] = useState(0)
    return (
        <div className={"flex gap-12  w-10/12 max-h-[80vh] my-10 transition-all ease-in-out opacity-0 " + (props.intransition ? "opacity-0" : "opacity-100")}>
            <ChallengesScrollbar  Challenges={ctf_examples.ctfs} CurrentChallenge={CurrentChallenge} SetCurrentChallenge={SetCurrentChallenge} />
            <ChallengeDisplay challengeData={ctf}/>
        </div>
    )
}

export default CTFsTab;