import React from "react";
import instagram from "../../images/instagram.jpg";
// Fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
// REact pop-up box
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {
  const openPopupboxInstagram = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={instagram}
          alt="Instagram Clone Project"
        />
        <p>
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
  };

  const popupboxConfigInstagram = {
    titleBar: {
      enable: true,
      text: "Instagram Clone Project",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">PORTFOLIO</h1>
        <div className="image-box-wrapper row justify-content-center">
          {/* dfsgdfg */}
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
          {/*asdfasdf*/}
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigInstagram} />
    </div>
  );
};

export default Portfolio;
