import logof from '../../assets/navlogo.png'
import React from 'react';
import './Footer.css'; 
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-section contact-info-container">
          <div className="footer-logo-container">
            <img src={logof} alt="HouseLiv Logo" className="footer-logo" />
          </div>
        </div>
        <div className="footer-section quick-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#testimonial">Testimonials</a></li>
          </ul>
        </div>
        <div className="footer-section our-programs">
          <h4>Our Programs</h4>
          <ul>
            <li>Joining the forces</li>
            <li>Joining the swapta swara</li>
            <li>JTD Enginnering program</li>
            <li>Joing the atoms</li>
          </ul>
        </div>
        <div className="footer-section newsletter">
          <div className="social-links">

            <a href="https://www.linkedin.com/company/jtdfoundation/?originalSubdomain=in" target="_blank" ><FaLinkedin /></a>
            <a href="https://www.facebook.com/jtdfoundation/" target="_blank"><FaSquareFacebook /></a>

          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© DOT FOUNDATION - All rights reserved</p>
        <ul>
          <li><Link target="_blank" to='/terms'>Terms and Conditions</Link></li>
          <li><Link target="_blank" to='/privacy'>Privacy Policy</Link></li>
        </ul>
      </div>
      <div className="end">
      </div>
    </footer>
  );
};

export default Footer;
