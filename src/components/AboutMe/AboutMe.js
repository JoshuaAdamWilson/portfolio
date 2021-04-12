import React from 'react'
import author from '../images/me.jpg'

function AboutMe() {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className='profile-img' src={author} alt="author" />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="aboutme-heading">ABOUT ME</h1>
          <h3>I am a Full Stack Developer from Salt Lake City, Utah.</h3>
          <p>
            Hello! I am Josh. I have spent most of my life in the manufactoring 
            business driving a forklift around a warehouse. One day, I decided 
            I was done and I wanted to level up my career so here we are. 
            Technologies I use are MERN(MongoDB, Express, ReactJS, and NodeJS). 
            I also have knowledge in Python/Django, Firebase and Sanity.IO for 
            Back End Production.<br />
            <br />
            When I'm not coding or designing pages, you can find me playing 
            billiards or some crazy activity that gives me an adrenaline rush.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
