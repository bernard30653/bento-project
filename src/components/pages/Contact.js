import React from 'react';
import BackgroundImage from '../BackgroundImage';
import coverPhoto from '../../images/網站照片/首頁/Cover_photos/台灣便當.jpg';
import './Contact.css';
function Contact() {

    return (
        <div>
            <BackgroundImage text={"聯絡我們"} image={coverPhoto} />
            <div className="icons-outer">
            <div className="icons-container">

                <div id="email-box">
                    <i className="fas fa-phone fa-3x"></i>
                    <a href="tel:03-123-1234" id="phone-text">03-123-1234</a>
                </div>

                <div id="facebook-box">

                    <i class="fab fa-facebook fa-3x"></i>
                    <a href="https://www.facebook.com/VolunteeringEDU" id="facebook-text">林歡歡排骨店</a>
                </div>

                <div id="instagram-box">
                    <i className="fab fa-instagram-square fa-3x"></i>
                    <a href="https://www.instagram.com/explore/tags/%E6%AD%A3%E5%BF%A0%E4%BE%BF%E7%95%B6%E5%BA%97/" id="instagram-text">林歡歡排骨店</a>
                </div>

                <div id="youtube-box">
                    <i className="fab fa-youtube fa-3x"></i>
                    <a href="https://www.youtube.com/watch?v=20A1aL-aRNA" id="youtube-text">林歡歡排骨店</a>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Contact;
