import React from "react";
import { Link } from "react-router-dom";

import Inventory from "./Inventory";
import Slideshow from "./Slideshow";

export default function Home(props) {
  console.log(props.carInfo);

  const images = props.carInfo;
  return (
    <div>
      <Slideshow images={images} />
      <Link to="/inventory">Explore</Link>
      {/* {props.carInfo.map((car) => (
        <img src={car.Image} alt=""></img>
      ))} */}
    </div>
  );
}
