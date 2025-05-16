import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-about">
          <h3>ShubhVivah</h3>
          <p>We help make your wedding unforgettable with expert planning, trusted vendors, and elegant designs tailored just for you.</p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
         <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/vendors">Vendors</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact Info</h4>
          <p><FaMapMarkerAlt /> 123 Wedding Plaza, Bandra West, Mumbai</p>
          <p><FaPhoneAlt /> +91 9876543211</p>
          <p><FaEnvelope /> support@shubhvivah.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} ShubhVivah. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
