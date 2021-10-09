import React from "react";
import author from "../../images/me.jpg";

function AboutMe() {
  return (
    <div id="aboutme" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="author" />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="aboutme-heading text-5xl">ABOUT ME</h1>
          <h3>I am a Full Stack Developer from Snohomish, Washington.</h3>
          <p>
            Hello. I'm Josh. I am a passionate full stack developer. I realized 
            I have a love for creativity at a very young age but I didn't begin
            to pursue Software Engineering until later in life. The more I learn, 
            the more I love being in this career. I've always been seen as a 
            leader in the workplace and often times, take lead in most activities 
            I participate in. I am very ambitious and love to push others to 
            their next level.
            Technologies I use are MERN(MongoDB, Express, ReactJS, and NodeJS).
            I also have knowledge in Python/Django, Firebase and Sanity.IO.
            <br />
            <br />
            When I'm not working on the next big thing or breaking the rack, I'm 
            a fierce adrenaline junkie, always looking for something to get my 
            blood pumping including parachuting, shark-diving and many others. 
            I also enjoy playing video games, writing poetry and drawing.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
