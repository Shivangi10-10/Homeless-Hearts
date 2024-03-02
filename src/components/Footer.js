import React, { useContext } from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css';
import FooterContext from './FooterContext';
import cat from '../pages/cat_doodle.png'

const Footer = () => {
  const footerRef =  useContext(FooterContext);
  return (
    <footer ref={footerRef}  className="footer amatic-sc-regular">
    <div className="contact-us">
      
        <div className='footer-image'>
          <img src={cat} alt='footer image'/>
        </div>
        
        <div className='footer-quote'>
          <p>Helping one paw at a time...</p>
        </div>

      <div className='after-quote'>
          <div className="contact-header">
            <h2>Contact Us</h2>
            <p>We'd love to hear from you!</p>
          </div>
          <div className="contact-social-media">
            <a href="#" className="social-icon facebook">
              <FaFacebook />
            </a>
            <a href="#" className="social-icon twitter">
              <FaTwitter />
            </a>
            <a href="#" className="social-icon instagram">
              <FaInstagram />
            </a>
          </div>
          <div className="contact-form">
            <button className="contact-button" style={{fontFamily: 'amatic sc'}}>Send Message</button>
          </div>
          <footer className="footer">
            <p>&copy; 2024 Contact Us. All rights reserved.</p>
          </footer>
        </div>
    </div>
    </footer>
  );
};

export default Footer;
