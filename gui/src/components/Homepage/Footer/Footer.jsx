import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import logo from "../../../assets/Logo.png";
import "./footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="top-footer">
        <div className="about-us">
          <img className="footer-logo" src={logo} alt="logo" />
          <p className="aboutUs-text">
            At Angelic Food, we blend flavors from around the world into our own
            unique culinary creations. With our special preparation methods and
            a wide variety of quality ingredients, each dish is a delightful
            fusion of tastes. Come savor the difference at Angelic Food, where
            every bite is a delicious adventure.
          </p>
        </div>
        <div className="googleMaps-container">
          <iframe
            className="google-maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2424.130657781678!2d-2.1357607230244176!3d52.58533093139031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48709b8301d0caa1%3A0xf9d2c4bbd5cce580!2sANGELIC%20FOOD%20(AFRICAN%20%26%20CARIBBEAN%20ONESTOP%20SUPERSTORE)!5e0!3m2!1sen!2sro!4v1715878674342!5m2!1sen!2sro"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <hr className="footer-line" />
      <div className="contact-container">
        <p className="copyright">
          Copyright © {currentYear} Iulian Gabriel
          <a href="https://github.com/IulianGabriel">
            <IoLogoGithub
              style={{
                marginLeft: "0.5rem",
                width: "2rem",
                height: "2rem",
              }}
            />
          </a>
        </p>

        <div className="social-media">
          <a href="https://www.facebook.com/">
            <FaFacebook
              color="#1164f1"
              style={{ width: "2.4rem", height: "2.4rem" }}
            />
          </a>
          <a href="https://www.instagram.com/">
            <FaInstagram
              style={{
                background:
                  "linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)",
                color: "eee",
                width: "2.4rem",
                height: "2.4rem",
              }}
            />
          </a>
          <a href="https://twitter.com/">
            <FaXTwitter
              color="#e8e8e0"
              style={{ width: "2.4rem", height: "2.4rem" }}
            />
          </a>
          <a href="https://www.tiktok.com/">
            <FaTiktok
              color="#f0f0f0"
              style={{ width: "2.4rem", height: "2.4rem" }}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
