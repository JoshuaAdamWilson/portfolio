import React from "react";
import logo from "../../images/logo.png";
// import { Link } from "react-scroll"
// React Fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { HashLink as Link } from 'react-router-hash-link';


const NavBar = () => {

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -112; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
      <div className="container">
        <div className="navbar-brand">
          <img className="logo" src={logo} alt="logo" />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link smooth={true} to="/#home" scroll={el => scrollWithOffset(el)} className="nav-link">
                Home 
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="/#aboutme" scroll={el => scrollWithOffset(el)} className="nav-link">
                  About Me
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link smooth={true} to="/blog/#blog" scroll={el => scrollWithOffset(el)} className="nav-link">
                Blog
              </Link>
            </li> */}
            <li className="nav-item">
              <Link smooth={true} to="/#services" scroll={el => scrollWithOffset(el)} className="nav-link">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="/#experience" scroll={el => scrollWithOffset(el)} className="nav-link">
                Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="/portfolio/#portfolio" scroll={el => scrollWithOffset(el)} className="nav-link">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="/#contactme" scroll={el => scrollWithOffset(el)} className="nav-link">
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
