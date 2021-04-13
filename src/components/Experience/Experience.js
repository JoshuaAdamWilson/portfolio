import React from "react";

const Experience = () => {
  return (
    <div className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>EXPERIENCE</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Before-2020</h3>
            <p>
              I had only dipped into HTML and CSS on Websites like MySpace. Good
              old MySpace. I had also taught myself a lot of Python. Eventually,
              I came across Kenzie Academy. Here, I learned the fundamentals of
              Front End Developement. Survived a rigorous 6-month course while
              also working full time at Swire Coca-Cola.
            </p>
          </div>
        </div>

        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2020-2021</h3>
            <p>
              I finished the Front End Developement course in January 2021. Soon
              after, I started the Back End course. From here on, I started
              doing a lot more Full Stack developement. I have learned many
              fundamentals and structures from Kenzie Academy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
