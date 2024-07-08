import React from 'react';
import "./Social.css";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Social = () => {
    return (
        <div className="social">
            <img src="../../images/logo.png" alt="" />
            <h3>Our success in creating busines solutions is due in large part to our talented and highly commited team</h3>
            <div className="social-media-logos">
                <FaFacebook/>
                <FaTwitter/>
                <FaInstagram/>
                <FaYoutube/>
            </div>
        </div>
    )
}

export default Social