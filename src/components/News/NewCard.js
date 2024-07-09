import React, { useState, useEffect } from 'react';
import "./NewsCard.css";
import { FaCalendarWeek } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { GoDash } from "react-icons/go";

const NewCard = (props) => {

    const { id, img, title, date, more } = props;

    const [moreInfo, setMoreInfo] = useState(false);
    const [animation,setAnimation] = useState(false);

    const moreInfoHandler = () => {
        setMoreInfo(!moreInfo)
    }

    useEffect(() => {
        const scrollHandler = (e) => {

            const currentScroll = Math.round(window.scrollY);

            console.log(window.scrollY);

            if (currentScroll > 1400) {
                setAnimation(true);
            } else {
                setAnimation(false);
            }

            
        }
        window.addEventListener("scroll", scrollHandler);

    }, [])

    return (
        <>
            <div className={animation ? "news-card news-card-animation" : "news-card"} style={!animation ? {opacity:"0"}:{opacity:"1"}}>
                <div className="card-news-image">
                    <img src={img} alt="image not found!" />
                </div>
                <div className="card-header">
                    <div className="card-date" >
                        <FaCalendarWeek id='date-icon' />
                        {date}
                    </div>
                    <div className="card-name">
                        <FaUser id='date-icon' />
                        Elliot Alderson
                    </div>
                </div>
                <div className="card-body">
                    <h3>{title}</h3>
                    <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro vitae a dicta esse numquam sint consequuntur aliquid?</h5>
                </div>
                <div className="card-footer">
                    <div className="card-more" onClick={moreInfoHandler}>
                        <GoDash className={moreInfo && "dash-icon"} id='dash-icon' />
                        <span>READ MORE</span>
                    </div>
                    {
                        moreInfo && (
                            <div className="more">
                                <h4>{more}</h4>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default NewCard