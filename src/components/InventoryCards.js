import React from "react";

export default function InventoryCards(props) {
  return (
    <div>
      <h3>{props.cars.Year}</h3>
      <h3>{props.cars.Make}</h3>
      <h3>{props.cars.Model}</h3>
      <img src={props.cars.Image} alt="" />
      <p>Mileage: {props.cars.Mileage} miles</p>
      <p>{props.cars.Description}</p>
      <h3>{props.cars.Cost}</h3>
    </div>
  );
}
