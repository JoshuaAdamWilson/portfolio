import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import tempicon from "../../images/tempicon.png";

const TestimonialsCarousel = () => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={3000}
    >
      <>
        <img src={tempicon} alt="Your Image Here" />
        <div className="myCarousel">
          <h3>
            Your Name Here <br />
            (Be My First)
          </h3>
          <p>What you have to say goes here</p>
        </div>
      </>
      <>
        <img src={tempicon} alt="Your Image Here" />
        <div className="myCarousel">
          <h3>
            Your Name Here <br />
            (Be My First)
          </h3>
          <p>What you have to say goes here</p>
        </div>
      </>
    </Carousel>
  );
};

export default TestimonialsCarousel;
