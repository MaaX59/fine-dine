import React from "react";
import { FooterOverlay, Newsletter } from "../../components";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import {images} from "../../constants";

import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">10 Boulevard de la Chapelle, 75010, Paris</p>
        <p className="p__opensans">+1 234-567-890</p>
        <p className="p__opensans">+0 987-654-321</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer-logo" />
        <p className="p__opensans">"The best way to find yourself is to lose yourself in the service of others."</p>
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiInstagram />
          <FiTwitter />
        </div>
        <img src={images.spoon} alt="spoon" className="spoon__img" style={{marginTop:15}} />
      </div>
      <div className="app__footer-links_work">
      <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday - Friday:</p>
        <p className="p__opensans">10:00 - 21:00</p>
        <p className="p__opensans">Saturday - Sunday:</p>
        <p className="p__opensans">10:00 - 01:00</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">2023 Gerícht. All Rights Reserved.</p>
    </div>
  </div>
);

export default Footer;
