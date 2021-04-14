import React from 'react'
import { Link } from 'react-scroll'
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
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>6777 Tupelo Ln West Jordan, Utah 84081</p>
            </div>
            <div className="d-flex">
              <p>JoshuaAdamWilson1@gmail.com</p>
            </div>
            <div className="d-flex justify-content-center">
              <a href="https://www.facebook.com/WhisperinScream">
                <FacebookIcon className="mx-3" size={36} />
              </a>
              <a href="https://twitter.com/JawJagged">
                <TwitterIcon className="mx-3" size={36} />
              </a>
              <a href="https://www.linkedin.com/in/joshua-adam-wilson/">
                <LinkedinIcon className="mx-3" size={36} />
              </a>
            </div>
          </div>
          <div className="middle col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <a className="footer-nav">Home</a>
                <br />
                <a className="footer-nav">About Me</a>
                <br />
                <a className="footer-nav">Services</a>
              </div>
              <div className="col">
                <a className="footer-nav">Experience</a>
                <br />
                <a className="footer-nav">Portfolio</a>
                <br />
                <a className="footer-nav">Contact</a>
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
            <p className="pt-3 text-center">
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
