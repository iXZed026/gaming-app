import React from 'react';
import "./Home.css";

const Home = () => {
    return (
        <div className='home' id='home'>
            <home-container>
                <div className="home-flex">
                    <div className="home-title">
                        <div className="home-title-flex">
                            <h4>ENJOY THE GAMES</h4>
                            <h1>Epic Games Made For True Gamers!</h1>
                            <button id='join-button'>join with us</button>
                        </div>
                    </div>
                    <div className="home-hero-bg">
                        <img id='banner-style-bg' src="../../images/home-hero-banner.png" alt="" />
                    </div>
                </div>
            </home-container>
        </div>
    )
}

export default Home