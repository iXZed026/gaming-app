import React from 'react';
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="header-flex">
          <div className="header-logo">
            <img src="../../images/logo.png" alt="" />
          </div>
          <nav>
            <ul>
              <li><a href="#home">HOME</a></li>
              <li><a href="#tournament">TOURNAMENT</a></li>
              <li><a href="#news">NEWS</a></li>
              <li><a href="#contact">CONTACT</a></li>
            </ul>
          </nav>
          <div className="join-team-button">
            <button type="submit">join our team</button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header