import React from "react";
import { Carousel } from "react-bootstrap";
import markplatz from "../city/markplatz.jpg";
import hause1 from "../city/1.jpg";
import hause2 from "../city/2.jpg";
import hause3 from "../city/3.jpg";
const Slider = () => {
  return (
    <div>
      <Carousel fade autoPlay={true} interval={3000}>
        <Carousel.Item>
          <img
            style={{ height: "30rem" }}
            className="d-block w-100 "
            src={markplatz}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "30rem" }}
            className="d-block w-100 "
            src={hause1}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "30rem" }}
            className="d-block w-100 "
            src={hause2}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "30rem" }}
            className="d-block w-100"
            src={hause3}
            alt="Fourth slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
