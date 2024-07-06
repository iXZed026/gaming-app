import React from 'react';
import "./NewsCard.css";
import { FaCalendarWeek } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { GoDash } from "react-icons/go";

const NewCard = () => {
    return (
        <>
            <div className="news-card">
                <div className="card-news-image">
                    <img src="../../images/news-1.jpg" alt="image not found!" />
                </div>
                <div className="card-header">
                    <div className="card-date" >
                        <FaCalendarWeek id='date-icon' />
                        jan 2024
                    </div>
                    <div className="card-name">
                        <FaUser id='date-icon' />
                        Elliot Alderson
                    </div>
                </div>
                <div className="card-body">
                    <h3>inovaavctive</h3>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, facere!</h5>
                </div>
                <div className="card-footer">
                    <div className="card-more">
                        <GoDash id='dash-icon' />
                        <span>READ MORE</span>
                    </div>
                    <div className="more">
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewCard