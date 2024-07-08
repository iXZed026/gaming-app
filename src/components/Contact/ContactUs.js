import React from 'react';
import "./ContactUs.css";

const ContactUs = () => {
    return (
        <div className="contact-us">
            <div className="contact-us-title">
            <h5>Contact Us</h5>
            <div></div>
        </div>
        <div className="contact-us-info">
            <div className="location">
                <span>Location</span>
                <p>Karaj, Fardis, 110 street,14 Golestanm,Mahdi Apartemant</p>
            </div>
            <div className="join-us">
                <span>JOIN US</span>
                <p>danyal.titanka24@gmail.com</p>
            </div>
            <div className="phone">
                <span>PHONE</span>
                <p>+98 9044****31</p>
            </div>
        </div>
        </div>
    )
}

export default ContactUs