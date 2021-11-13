import React from 'react'
import { 
  FacebookShareButton, 
  FacebookIcon, 
  TwitterShareButton, 
  TwitterIcon, 
  LinkedinShareButton, 
  LinkedinIcon } from "react-share"

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div id="updown" className="row">
          <div id="leftside" className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex align-content-center">
              <p>Snohomish, Washington</p>
              <br />
            </div>
            <div className="d-flex">
              <p>JoshuaAdamWilson1@gmail.com</p>
            </div>
            <div className="d-flex justify-content-center">
              <a href="https://www.facebook.com/WhisperinScream"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon className="mx-3" size={36} />
              </a>
              <a href="https://twitter.com/JawJagged"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon className="mx-3" size={36} />
              </a>
              <a href="https://www.linkedin.com/in/joshua-adam-wilson/"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <LinkedinIcon className="mx-3" size={36} />
              </a>
            </div>
          </div>
          <div className="middle col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <button className="footer-nav">Home</button>
                <br />
                <button className="footer-nav">About Me</button>
                <br />
                {/* <button className="footer-nav">Blog</button>
                <br /> */}
                <button className="footer-nav">Services</button>
              </div>
              <div className="col">
                <button className="footer-nav">Experience</button>
                <br />
                <button className="footer-nav">Portfolio</button>
                <br />
                <button className="footer-nav">Contact</button>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="shareto">Share To:</div>
            <div className="d-flex justify-content-center">
              
              <FacebookShareButton
                url={""}
                quote={"Full Stack Developer"}
                hashtag='#react'
              >
                <FacebookIcon className="mx-3" size={36} />
              </FacebookShareButton>
              <TwitterShareButton
                url={""}
                quote={"Full Stack Developer"}
                hashtag='#react'
              >
                <TwitterIcon className="mx-3" size={36} />
              </TwitterShareButton>
              <LinkedinShareButton
                url={""}
                quote={"Full Stack Developer"}
                hashtag='#react'
              >
                <LinkedinIcon className="mx-3" size={36} />
              </LinkedinShareButton>
            </div>
            <p id="copyright" className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp;JAW Design | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
