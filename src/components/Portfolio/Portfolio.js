import React from "react";
import instagram from "../../images/instagram.jpg";
import facebook from "../../images/facebook.jpg";
import idahogambling from "../../images/idahogambling.jpg"
// Fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
// REact pop-up box
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";
import { HashLink as Link } from 'react-router-hash-link';
import "../../App.css"

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
        <br />
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
        <br />
        <p className="popup-paragraph">
          Facebook is an American online social media and social networking service 
          based in Menlo Park, California, and a flagship service of the namesake 
          company Facebook, Inc.
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

  // Idaho Gambling
  const openPopupboxIdahoGambling = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={idahogambling}
          alt="Idaho Gambling"
        />
        <br /> 
        <p className="popup-paragraph">
          Idaho Gambling is a site I am currently working on for my Grandpa. He wishes to sell his Idaho Gambling book. Feel free to take a look at the Demo Link below!
        </p>
        <p><b>ReactJS for Front End</b></p>
        <a
          href="https://www.idaho-gambling.com/"
          target="_blank" 
          rel="noopener noreferrer"
          className="hyper-link"
        >
          <b>Demo</b>
        </a>
        <br />
        
        <b className="private">Github Repository is Private</b>
        
      </>
    );
    PopupboxManager.open({ content });
      PopupboxManager.update({
        content,
        config: {
          titleBar: {
            enable: true,
            text: "Idaho Gambling",
          }
        }
      })
  };

  const popupboxConfigIdahoGambling = {
    fadeIn: true,
    fadeInSpeed: 500,
  };
////////////////////////////////////////////////////
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -112; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
  }

  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="row container">
        <div className="column1">
          <h1 className="text-uppercase text-center py-5 text-5xl">PROJECTS</h1>
          {/* Instagram */}
          <div className="row image-box-wrapper row justify-content-center">
            <div className="portfolio-image-box" onClick={openPopupboxInstagram}>
              <img
                className="portfolio-image"
                src={instagram}
                alt="Instagram Clone Project"
              />
              <div className="overflow"></div>
              <i className="fab fa-instagram"></i>
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
              <i className="fab fa-facebook"></i>
              <FontAwesomeIcon className="portfolio-icon" icon={faFacebook} />
            </div>

            {/* Idaho Gambling */}
            <div className="portfolio-image-box" onClick={openPopupboxIdahoGambling}>
              <img
                className="portfolio-image"
                src={idahogambling}
                alt="Idaho Gambling"
              />
              <div className="overflow"></div>
            </div>
            {/* End */}
          </div>
        </div>
{/* /////////////////////////////////////////////////////////////////////////////////////////////// */}
        <div className="column2">
          <h1 className="text-uppercase text-center py-5 text-5xl">OTHER PROJECTS</h1>
          <div className="row image-box-wrapper row justify-content-center">
            <Link smooth={true} to="/blog/#blog" scroll={el => scrollWithOffset(el)} className="nav-link other-project-links cursive">
              My Blog
            </Link>
          </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigInstagram} />
      <PopupboxContainer {...popupboxConfigFacebook} />
      <PopupboxContainer {...popupboxConfigIdahoGambling} />
    </div>
  );
};

export default Portfolio;
