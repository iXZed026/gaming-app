import React, { useState, useEffect } from 'react';
import "./Header.css";

const Header = () => {

  const [humburgerStyle, setHumburgerStyle] = useState(false)

  const activeHumburger = () => {
    setHumburgerStyle(!humburgerStyle);
  }

  useEffect(() => {

    const closeHumburger = () => {
      setHumburgerStyle(false);
    }

    const liElems = document.querySelectorAll("#list");

    liElems.forEach(elem => {
      elem.addEventListener("click", closeHumburger);
    });

    return ()=>{
      liElems.forEach(elem => {
        elem.removeEventListener("click", closeHumburger);
      });
    }

  }, [])

  return (
    <header>
      <div className="header-container">
        <div className="header-flex">
          <div className="header-logo">
            <img src="../../images/logo.png" alt="" />
          </div>
          <nav className={humburgerStyle ? "active" : ""}>
            <ul className={humburgerStyle ? "active" : ""}>
              <li><a href="#home" id='list'>HOME</a></li>
              <li><a href="#tournament" id='list'>TOURNAMENT</a></li>
              <li><a href="#news" id='list'>NEWS</a></li>
              <li><a href="#contact" id='list'>CONTACT</a></li>
            </ul>
          </nav>
          <div className={humburgerStyle ? "join-team-button active" : "join-team-button"}>
            <button type="submit">join our team</button>
          </div>
          <div className="humburger" onClick={activeHumburger}>
            <div className={humburgerStyle ? "top-line" : "humb-line"}></div>
            <div className='humb-line' style={{ display: humburgerStyle ? "none" : "block" }}></div>
            <div className={humburgerStyle ? "bottom-line" : "humb-line"}></div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header