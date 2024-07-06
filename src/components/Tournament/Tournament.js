import React, { useContext } from 'react';
import "./Tournament.css";
import Matches from './Matches';
import { TeamContext } from '../context/TeamProvider';

const Tournament = () => {

    const teams = useContext(TeamContext).teams;
    const setTeams = useContext(TeamContext).setTeams;

    console.log(setTeams);

    return (
        <div className="tournament" id='tournament'>
            <div className="tournament-container">
                <div className="tournament-flex">
                    <div className="tournament-info">
                        <div>
                            <h4>UP COMING MATCHES</h4>
                            <h1>BATTLES EXTERME MASTERS <span>TOUTNAMENT</span></h1>
                            <h5>Our succes in creating bussines solutions is due in large part to our talented and highly committed team.</h5>
                        </div>
                    </div>
                    <div className="tournament-matchs">
                      <div className="tournament-matchs-container">
                        <div className="tournament-matchs-flex">
                            {
                                teams.map((team,key)=><Matches {...team} key={teams.id}/>)
                            }
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tournament