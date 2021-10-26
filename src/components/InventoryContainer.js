import React from "react";
import InventoryCards from "./InventoryCards";
import { useSelector } from "react-redux";

export default function InventoryContainer(props) {
  {
    props.carInfo.map((car) => console.log(car));
  }
  return (
    <div>
      {props.carInfo.map((car) => (
        <InventoryCards cars={car} />
      ))}
    </div>
  );
}
