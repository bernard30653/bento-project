import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom'; 
function Footer() {
    return (
        <>
        <div className="footer">
            <div className="footer-container">
                <div className="footer-header">
                    <Link to="/contact"><h2 id="contact-text">聯絡我們</h2></Link>
                </div>
                
                <div className="social-icons">
                    <a href="tel:03-123-1234"><i className="fas fa-phone circle-icon"></i></a>
                    <a href="https://www.facebook.com/jengjong.tw/"><i className="fab fa-facebook circle-icon"></i></a>
                    <a href="https://www.instagram.com/explore/tags/%E6%AD%A3%E5%BF%A0%E6%8E%92%E9%AA%A8%E9%A3%AF/"><i className="fab fa-instagram-square circle-icon"></i></a>
                    <a href="https://www.youtube.com/watch?v=20A1aL-aRNA"><i className="fab fa-youtube circle-icon"></i></a>
                </div>
            </div>
        </div>
        <div className="copyright">
            Copyright © 2023 All Right Reserved. IEEM Mid-term Project Group1
        </div>
        </>
    )
}

export default Footer;
