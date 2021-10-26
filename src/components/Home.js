import React from "react";

import Inventory from "./Inventory";

export default function Home(props) {
  return (
    <div>
      <h1>Garage</h1>
      {props.carInfo.map((car) => (
        <img src={car.Image} alt=""></img>
      ))}
      <Inventory />
    </div>
  );
}
