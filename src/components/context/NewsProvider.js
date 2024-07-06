import React, { createContext, useState } from 'react';

const NewsContext = createContext();

const NewsProvider = ({ children }) => {

    const [news, setNews] = useState([
        { id: 1, img: "../../images/news-1.jpg", date: "JAN 01 2023", title: "Innovative Business All Over The World.",more:"More News 1" },
        { id: 2, img: "../../images/news-2.jpg", date: "FEB 03 2023", title: "How to Start Initializing An Startup In Few Days.",more:"More News 2" },
        { id: 3, img: "../../images/news-3.jpg", date: "MAY 23 2023", title: "Financial Experts Suport Help You To Find Out.",more:"More News 3" },
    ])

    return (
        <NewsContext.Provider value={{ news, setNews }}>
            {children}
        </NewsContext.Provider>
    )
}

export { NewsProvider, NewsContext};