
function SwitchTabsButton({ActiveTabState, ActiveTabControl}) {

  return (
    <div className=" select-none bg-dark md:px-10 px-4 py-1 w-fit flex flex-row  text-lg md:text-3xl  md:gap-3 font-fira-code gap-3 rounded-[8rem] shadow-2xl border border-borderMain">
        <div className={" cursor-pointer px-4 py-2  flex md:w-44 justify-center "+((ActiveTabState == 0) && " text-mainLighter")} onClick={()=>ActiveTabControl(0)}>
            CTFs
        </div>
        <div className={" cursor-pointer px-4 py-2 md:w-44 flex justify-center  "+((ActiveTabState == 1) && " text-mainLighter")} onClick={()=>ActiveTabControl(1)}>
            Leaderboard
        </div>
    </div>
  );
}

export default SwitchTabsButton;
