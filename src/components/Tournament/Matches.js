import React,{useEffect, useState} from 'react';
import "./Matches.css";
import { LuTwitch } from "react-icons/lu";
import { FaYoutube } from "react-icons/fa";

const Matches = (props) => {

    const { id, firstTeamName, firstTeamLogo, secoundTeamName, secoundTeamLogo } = props;
    const { matchTime,matchDate ,group} = props;

    const [scAnimation,setScAnimation] = useState(false);

    const animationLeftStyle = {
        animation: "matchLeftAni 1s ease-in-out 1",
    }

    const animationRightStyle = {
        animation: "matchRightAni 1s ease-in-out 1",
    }

    useEffect(()=>{

        const scrollHandler = (e)=>{

            const currentScroll = Math.round(window.scrollY);

            if(currentScroll > 370){
                setScAnimation(true);
            } else {
                setScAnimation(false);
            }
        }

         window.addEventListener("scroll",scrollHandler);

    },[])

    return (
        <div className="matches">
            <div className="left-team" style={scAnimation ? animationLeftStyle:{opacity:"0"}}>
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
            <div className={scAnimation ? "match-start matchStartAnimation":"match-start"}>
                <h2>{matchTime}</h2>
                <h3>{matchDate}</h3>
                <div>
                <FaYoutube id="match-icon"/>
                <LuTwitch id="match-icon"/>
                </div>
            </div>
            <div className="right-team" style={scAnimation ? animationRightStyle:{opacity:"0"}}>
                
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