import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import { images } from "../../constants";
import { FooterOverlay, Newsletter } from "../../components";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">9H83+FC3, Nishola, Kutani, Bhimtal, Mahargaon, Uttarakhand 263136</p>
        <p className="p__opensans">+91 7042091460</p>
 
      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">
          &quot;The best way to find yourself is to lose yourself in the service
          of others.&quot;
        </p>
        <img
          src={images.spoon}
          className="spoon__img"
          style={{ marginTop: 15 }}
        />
      <div className="app__footer-links_icons">
  <a href="http://facebook.com/p/Gouras-Bistro-61552697533561/" target="_blank" rel="noopener noreferrer">
    <FiFacebook />
  </a>
  <a href="https://www.instagram.com/gourasbistro/" target="_blank" rel="noopener noreferrer">
    <FiInstagram />
  </a>
</div>

      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Sunday:</p>
        <p className="p__opensans">09:00 am - 09:00 am</p>

      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">2025 Aliado. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
