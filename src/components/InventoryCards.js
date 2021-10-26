import React from "react";
import { Images } from "../styled-components/InventoryCardContainerStyle";

export default function InventoryCards(props) {
  return (
    <div>
      <h3>{props.cars.Year}</h3>
      <h3>{props.cars.Make}</h3>
      <h3>{props.cars.Model}</h3>
      <Images src={props.cars.Image} alt="" />
      <p>Mileage: {props.cars.Mileage} miles</p>
      <p>{props.cars.Description}</p>
      <h3>{props.cars.Cost}</h3>
      <button>Add to Cart</button>
    </div>
  );
}
