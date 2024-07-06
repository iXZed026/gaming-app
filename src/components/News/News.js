import React from 'react';
import "./News.css";
import NewCard from './NewCard';

const News = () => {
    return (
        <div className="news">
            <div className="news-container">
                <div className="news-flex">
                    <div className="news-title">
                        <h4>WHAT'S ON OUR MIND</h4>
                        <h2>NEWS AND <span>HEADLINES</span></h2>
                        <h5>Our success in creating bussines solutions is due in large part to our talented and highly committed team.</h5>
                    </div>
                    <div className="card-flex">
                    <NewCard />
                    <NewCard />
                    <NewCard />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News