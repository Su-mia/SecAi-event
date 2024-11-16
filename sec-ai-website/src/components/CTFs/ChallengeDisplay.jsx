import CTFDecorator2 from "/src/assets/Leaderboard/CTF/CTFsDecorator_2.svg";
import LinkSVG from "/src/assets/Leaderboard/CTF/LinkSVG.svg";
import ExpandHintSVG from "/src/assets/Leaderboard/CTF/ExpandHintSVG.svg";
import HintIndicatorSVG from "/src/assets/Leaderboard/CTF/HintIndicatorSVG.svg";
import SendIndicatorSVG from "/src/assets/Leaderboard/CTF/SendIndicatorSVG.svg";
import { useState } from "react";
import SmoothCollapse from "react-smooth-collapse";

let ENABLE_HINT_FLAG = false

function ChallengeDisplay({ challengeData }) {
  const circleSizes = [8, 10, 12, 14];
  const [isExpanded, setExpanded] = useState(false);
  const [SubmitTextController, setText] = useState('');
  const [KeyTextController, setKey] = useState('');
  
  const [Error,  setError] = useState({
    'flag':'',
    'key':'',
  });
  function TextSubmitHandler(){
    if(!ENABLE_HINT_FLAG){
      return
    }
    if(SubmitTextController == ''){
      console.log('hit')
      setError({
        'flag' : "Flag cannot be empty!"
      })
      return;
    }
    
    const submitData = {
      'flag': SubmitTextController,
      }
    console.log({
      submitData
    })

    ClearTextController()
  }
  function ClearTextController(){
    setText('')
  }
  return (
    // The right side of CTF tab

    <div className={"bg-dark scrollbar-hidden overflow-y-scroll font-fira-code tracking-wide pt-8 border border-borderMain flex-grow-2  rounded-3xl flex flex-col items-center pb-8 " + (!ENABLE_HINT_FLAG && "justify-between")}>
      {/* For the title */}
      <div className="flex flex-col items-center">
        <span className="text-3xl">{challengeData.ctf_name}</span>
        {/* CTF Type and Difficulty */}
        <div className="flex mt-8 gap-5">
          <span className=" rounded-2xl bg-mainLighter text-lg w-[11rem] py-3 text-center">
            {challengeData.ctf_type}
          </span>
          <span className="flex items-center justify-center gap-4 rounded-2xl bg-mainLighter text-lg w-[11rem] py-3  text-center">
            {challengeData.ctf_difficulty[0]}
            <div className="flex items-center gap-1">
              {circleSizes.map((size, index) => (
                <div
                  key={index}
                  className="rounded-full bg-dark"
                  style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    opacity: index < challengeData.ctf_difficulty[1] ? 1 : 0.5, // Full opacity if index is less than difficulty
                  }}
                ></div>
              ))}
            </div>
          </span>
        </div>
      </div>
      {/* Challenge Description */}
      <div className="w-3/5 h-fit py-8 px-10 flex flex-col  items-center mt-4 rounded-3xl bg-gradient-to-b from-[#1573ff60] via-[#1573ff60] to-[#1e1e1e60]">
        {/* Body text */}
        <span className="text-xl w-2/3 text-center">
          {challengeData.ctf_body}
        </span>
        {/* line Decorator */}
        <img src={CTFDecorator2} className="my-7" alt="ctf_decoration" />
        {/* Prerequisites */}
        <div className="py-3 px-4 rounded-3xl flex flex-col items-center bg-[#0f1925]/40 bg-opacity-50 min-w-full">
          <span className="text-lg font-medium text-mainLighter">Prerequisities</span>
          {/* Actual prereqs container */}
          <div className=" gap-3 grid grid-cols-2 justify-center mt-4">
            {challengeData.ctf_prereq.map((prereq, i) => (
              <div className="bg-[#030a1c]/30 bg-opacity-50 px-5 py-2 rounded-full ">
                {prereq}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Link Section */}
      <a
        className="flex items-center justify-center gap-3 cursor-pointer my-3"
        href={challengeData.ctf_file_link}
      >
        <img src={LinkSVG} alt="" />
        <span className="text-lg font-medium text-mainLighter"> Link to the CTF file</span>
      </a>
      {/* Hint section */}
      { ENABLE_HINT_FLAG &&
        <div
        className={
          "hover:opacity-70 transition-all duration-75 cursor-pointer flex-col gap-4 items-center w-2/3 px-3 py-3 text-lg bg-gradient-to-b  from-[#1573ff70] via-[#1573ff70] to-[#1e1e1e70] " + (isExpanded ? "rounded-[2rem]" : "rounded-full")
        }
        onClick={() => setExpanded(!isExpanded)}
      >
        <div className="flex gap-4 items-center text-lg">
          <img
            src={ExpandHintSVG}
            alt=""
            style={{
              transform: isExpanded ? "rotate(-90deg)" : "rotate(0deg)",
              transition: "transform 0.5s ease",
            }}
          />
          <span className="flex-grow">Hint</span>
          <img className="pr-2" src={HintIndicatorSVG} alt="" />
        </div>
        <SmoothCollapse expanded={isExpanded}>
        <div>
          <div className="h-[2px] my-2 w-full bg-black bg-opacity-30">

          </div>
          {/* Actual hint content here */}
          <div className="px-8">This is the hint text you wanted to reveal.</div>
        </div>
        </SmoothCollapse>
      </div>
      }
      {/* Input section */}
      

      { ENABLE_HINT_FLAG &&
        <div className="w-2/3 flex flex-col gap-1 mb-6">
        <div className={" hover:opacity-70 transition-opacity ease duration-500 h-fit mt-3 flex gap-4 items-center rounded-full text-lg bg-gradient-to-b  from-[#1573ff70] via-[#1573ff70] to-[#1e1e1e70]"} >
          <input
            className="flex-grow px-5 py-3 caret-mainLighter bg-transparent focus:outline-none "
            type="text"
            placeholder="Submit your flag here..."
            onChange={(event)=>setText(event.target.value)}
            
            value={SubmitTextController}
            onKeyUp={(event)=>{
              if(event.key === "Enter")
                TextSubmitHandler()
            }}
            onFocus={()=>setError({
              ...Error,
              'flag' : ''
            })}
          />
          
          <div class=" cursor-pointer min-h-full py-4 px-4 bg-[#030a1c]/70 rounded-r-full" onClick={()=>TextSubmitHandler()}>
            <img src={SendIndicatorSVG} alt="send_indicator" />
          </div>
        </div>
        <div className="text-sm text-violetLight">{Error['flag']}</div>
      </div>}
    </div>
  );
}

export default ChallengeDisplay;
