import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Fade } from "react-slideshow-image";

import "../Slideshow.css";

export default function Slideshow(props) {
  const slideImages = props.images;
  console.log(props.images);
  return (
    <div>
      <div className="slide-container">
        <Fade>
          <div className="each-fade">
            <div>
              <img src={slideImages[0].Image} alt="" />
            </div>
            <p>Aston Martin One-77</p>
          </div>
          <div className="each-fade">
            <p>Lamborghini Urus</p>
            <div>
              <img src={slideImages[1].Image} alt="" />
            </div>
          </div>
          <div className="each-fade">
            <div>
              <img src={slideImages[2].Image} alt="" />
            </div>
            <p>Land Rover Range Rover</p>
          </div>
          <div className="each-fade">
            <div>
              <img src={slideImages[3].Image} alt="" />
            </div>
            <p>Cadillac Escalade</p>
          </div>
          <div className="each-fade">
            <div>
              <img src={slideImages[4].Image} alt="" />
            </div>
            <p>Mercedes Maybach</p>
          </div>
          <div className="each-fade">
            <div>
              <img src={slideImages[5].Image} alt="" />
            </div>
            <p>Tesla Model X</p>
          </div>
          <div className="each-fade">
            <div>
              <img src={slideImages[6].Image} alt="" />
            </div>
            <p>Rolls Royce Wraith</p>
          </div>
          <div className="each-fade">
            <div>
              <img src={slideImages[7].Image} alt="" />
            </div>
            <p>Bentley Continental GT</p>
          </div>
          <div className="each-fade">
            <div>
              <img src={slideImages[8].Image} alt="" />
            </div>
            <p>Maserati Ghibli</p>
          </div>
          <div className="each-fade">
            <div>
              <img src={slideImages[9].Image} alt="" />
            </div>
            <p>Bugatii Chiron</p>
          </div>
        </Fade>
      </div>
    </div>
  );
}
