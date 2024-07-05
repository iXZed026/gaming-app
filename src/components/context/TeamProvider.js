import React, { createContext, useState } from 'react';

const TeamContext = createContext();

const TeamProvider = ({children}) => {

    const [teams,setTeams] = useState([
        {id:1,firstTeamLogo:"../../images/Team-logo-1.png",firstTeamName:"PURPLE DEATH CADETS" ,group:"GROUP 04 | MATCH 06TH",cmatchDate:"25TH MAY 2025", matchTime:"10:10",secoundTeamLogo:"../../images/Team-logo-2.png",secoundTeamName:"TRIGGER BRAIN SQUAD"},
        {id:2,firstTeamLogo:"../../images/Team-logo-3.png",firstTeamName:"THE BLACK HAT HACKERS" ,group:"GROUP 05 | MATCH 02ND",matchDate:"10TH JAN 2025", matchTime:"12:30",secoundTeamLogo:"../../images/Team-logo-4.png",secoundTeamName:"YOUR WORST NIGHTMARE"},
        {id:3,firstTeamLogo:"../../images/Team-logo-5.png",firstTeamName:"WITCHERS AND QUIZARD" ,group:"GROUP 02 | MATCH 03RD",matchDate:"15TH DEC 2025", matchTime:"16:00",secoundTeamLogo:"../../images/Team-logo-6.png",secoundTeamName:"RESTING BITCH FACES"},
    ])

    return (
        <TeamContext.Provider value={{teams,setTeams}}>
            {children}
        </TeamContext.Provider>
    )
}

export {TeamContext,TeamProvider};
