import React from 'react'
import ini_logo from "../../assets/ini_logo.png"
import "./Footer.css"

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="gpt__footer section__padding" id="footer">
      <div className="gpt__footer-heading">
        <h1 className="gradient__text">
          Do you want to step into the future before others
        </h1>
      </div>
      <div className="gpt__footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="gpt__footer-links">
        <div className="gpt__footer-links-logo">
          <img src={ini_logo} alt="ini_logo"/>
          <p>Bakery Junction Ozuoba, All Rights Reserved</p>
        </div>
        <div className="gpt__footer-links_div">
          <h4>Links</h4>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contacts</p>
        </div>
        <div className="gpt__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Condition</p>
          <p>Privacy Policy</p>
          <p>Contacts</p>
        </div>
        <div className="gpt__footer-links_div">
          <h4>Get in touch</h4>
          <p>Github</p>
          <p>+234 703 6565 532</p>
          <p>iniobongjosetim@gmail.com</p>
        </div>
      </div>
      <div className="gpt__footer-copyright">
       <p> © 2022 - {currentYear} iniGPT-3, All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer;
