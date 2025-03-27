import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Reach Us</h3>
          <ul>
            <li>
              <i class="fi fi-sr-phone-call" style={{ color: "#2ECC40" }} /> +91
              9695777747 
            </li>
            <li>
              <i className="fi fi-sr-envelope" style={{ color: "#2ECC40" }}></i>
              support@newvindiagnostics.com
            </li>
            <li>
              <i className="fi fi-sr-marker" style={{ color: "#2ECC40" }}></i>
              New Delhi, Delhi
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li>
              <NavLink to="/about-us">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/contact-us">Contact Us</NavLink>
            </li>
            <li>
            <NavLink to="#">Events</NavLink>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Legal</h3>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms & Services</li>
            <li>Terms of Use</li>
            <li>Refund Policy</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Newvin Diagnostics. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
