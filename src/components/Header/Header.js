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
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">TOURNAMENT</a></li>
                    <li><a href="#">NEWS</a></li>
                    <li><a href="#">CONTACT</a></li>
                  </ul>
                  <div className="join-team-button">
                    <button type="submit">join our team</button>
                  </div>
                </nav>
            </div>
        </div>
    </header>
  )
}

export default Header