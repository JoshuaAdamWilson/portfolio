import React from "react";
import instagram from "../../images/instagram.jpg";
import facebook from "../../images/facebook.jpg";
// Fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
// REact pop-up box
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {

  // Instagram
  const openPopupboxInstagram = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={instagram}
          alt="Instagram Clone Project"
        />
        <p className="popup-paragraph">
          Instagram is an American photo and video-sharing social networking
          service owned by Facebook, Inc.
        </p>
        <p><b>ReactJS for Front End, Firebase for Back End</b></p>
        <a
          href="https://instagram-clone-edc17.web.app/"
          target="_blank" 
          rel="noopener noreferrer"
          className="hyper-link"
        >
          <b>Demo</b>
        </a>
        <br />
        
        <a 
          href="https://github.com/JoshuaAdamWilson/InstagramClone"
          target="_blank" 
          rel="noopener noreferrer"
          className="hyper-link"
        >
          <b>Github</b>
        </a>
      </>
    );
    PopupboxManager.open({ content });
      PopupboxManager.update({
        content,
        config: {
          titleBar: {
            enable: true,
            text: "Instagram Clone Project",
          }
        }
      })
  };

  const popupboxConfigInstagram = {
    fadeIn: true,
    fadeInSpeed: 500,
  };

  // Facebook
  const openPopupboxFacebook = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={facebook}
          alt="Facebook Clone Project"
        />
        <p className="popup-paragraph">
          Facebook is an American online social media and social networking service based in Menlo Park, California, and a flagship service of the namesake company Facebook, Inc.
        </p>
        <p><b>ReactJS for Front End, Firebase for Back End</b></p>
        <a
          href="https://facebook-clone-5a681.web.app/"
          target="_blank" 
          rel="noopener noreferrer"
          className="hyper-link"
        >
          <b>Demo</b>
        </a>
        <br />
        
        <a 
          href="https://github.com/JoshuaAdamWilson/FacebookClone"
          target="_blank" 
          rel="noopener noreferrer"
          className="hyper-link"
        >
          <b>Github</b>
        </a>
      </>
    );
    PopupboxManager.open({ content });
      PopupboxManager.update({
        content,
        config: {
          titleBar: {
            enable: true,
            text: "Facebook Clone Project",
          }
        }
      })
  };

  const popupboxConfigFacebook = {
    fadeIn: true,
    fadeInSpeed: 500,
  };
////////////////////////////////////////////////////
  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">PORTFOLIO</h1>
        <div className="image-box-wrapper row justify-content-center">
          {/* Instagram */}
          <div className="portfolio-image-box" onClick={openPopupboxInstagram}>
            <img
              className="portfolio-image"
              src={instagram}
              alt="Instagram Clone Project"
            />
            <div className="overflow"></div>
            <i class="fab fa-instagram"></i>
            <FontAwesomeIcon className="portfolio-icon" icon={faInstagram} />
          </div>
          {/* Facebook */}
          <div className="portfolio-image-box" onClick={openPopupboxFacebook}>
            <img
              className="portfolio-image"
              src={facebook}
              alt="Facebook Clone Project"
            />
            <div className="overflow"></div>
            <i class="fab fa-facebook"></i>
            <FontAwesomeIcon className="portfolio-icon" icon={faFacebook} />
          </div>
          {/* End */}
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigInstagram} />
      <PopupboxContainer {...popupboxConfigFacebook} />
    </div>
  );
};

export default Portfolio;
