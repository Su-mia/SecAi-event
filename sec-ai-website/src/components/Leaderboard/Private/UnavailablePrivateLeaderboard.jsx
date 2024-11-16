import React from "react";
import EventLogo from "/src/assets/Frame.svg"
import displayedMessages from '/src/assets/displayed_messages.json'
function UnavailablePrivateLeaderboard(params) {
    return (
        <React.Fragment>
            <div className='flex flex-col items-center w-lvw px-10 md:mt-10 mt-10 font-fira-code'>
            <img src={EventLogo} />

            <p className='text-center font-semibold max-w-full md:leading-10 text-3xl spac md:text-[2.5rem] mt-10 md:mt-10' >
                {displayedMessages.private_leaderboard_currently_unavailable}
            </p>
            <p className='md:text-3xl text-lg    mt-6 md:w-[50rem]  text-center' >
                {displayedMessages.private_leaderboard_unavailable_clarification}
            </p>
        </div>
        </React.Fragment>
    )
}

export default UnavailablePrivateLeaderboard;