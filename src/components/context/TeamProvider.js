import React, { createContext, useState } from 'react';

const TeamContext = createContext();

const TeamProvider = ({children}) => {

    const [teams,setTeams] = useState([
        {id:1,firstTeamLogo:"../../images/Team-logo-1",firstTeamName:"PURPLE DEATH CADETS" , matchTime:"10:10",secoundTeamLogo:"../../images/Team-logo-2",secoundTeamName:"TRIGGER BRAIN SQUAD"},
        {id:1,firstTeamLogo:"../../images/Team-logo-1",firstTeamName:"PURPLE DEATH CADETS222" , matchTime:"10:10",secoundTeamLogo:"../../images/Team-logo-2",secoundTeamName:"TRIGGER BRAIN SQUAD"},
    ])

    return (
        <TeamContext.Provider value={{teams,setTeams}}>
            {children}
        </TeamContext.Provider>
    )
}

export {TeamContext,TeamProvider};
