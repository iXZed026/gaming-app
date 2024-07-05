import React from 'react';
import "./Matches.css";
import { LuTwitch } from "react-icons/lu";
import { FaYoutube } from "react-icons/fa";

const Matches = (props) => {

    const { id, firstTeamName, firstTeamLogo, secoundTeamName, secoundTeamLogo } = props;
    const { matchTime,matchDate ,group} = props;

    return (
        <div className="matches">
            <div className="left-team">
                <div className="team-logo">
                    <img src={firstTeamLogo} alt="" />
                </div>
                <div className="team-info">
                    <div className="team-name">
                        <h2>{firstTeamName}</h2>
                    </div>
                    <div className="group-counter">
                        <button>GROUP 04 | MATCH D6TH</button>
                    </div>
                </div>
            </div>
            <div className="match-start">
                <h2>{matchTime}</h2>
                <h3>{matchDate}</h3>
                <div>
                <FaYoutube id="match-icon"/>
                <LuTwitch id="match-icon"/>
                </div>
            </div>
            <div className="right-team">
                
                <div className="team-info">
                    <div className="team-name">
                        <h2>{secoundTeamName}</h2>
                    </div>
                    <div className="group-counter">
                        <button>{group}</button>
                    </div>
                </div>
                <div className="team-logo">
                    <img src={secoundTeamLogo} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Matches