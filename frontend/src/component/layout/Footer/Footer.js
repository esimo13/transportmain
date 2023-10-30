import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>TRANSPORT.</h1>
        <p>Quality service is our first priority</p>

        <p>Copyrights 2023 &copy; JU</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://www.instagram.com/explore/locations/1024560577/jahangirnagar-university-/">
          Instagram
        </a>
        <a href="https://www.instagram.com/explore/locations/1024560577/jahangirnagar-university-/">
          Youtube
        </a>
        <a href="https://www.instagram.com/explore/locations/1024560577/jahangirnagar-university-/">
          Facebook
        </a>
      </div>
    </footer>
  );
};

export default Footer;
