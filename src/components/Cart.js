import React from "react";
import {
  Images,
  Cards,
} from "../styled-components/InventoryCardContainerStyle";

export default function Cart(props) {
  console.log(props.items);
  return (
    <div>
      <Cards>
        <h1>Your Garage</h1>
        <h3>{props.items.Year}</h3>
        <h3>{props.items.Make}</h3>
        <h3>{props.items.Model}</h3>
        <Images src={props.items.Image} alt="" />
        <h3>{props.items.Cost}</h3>
        <button>Remove from Cart</button>
      </Cards>
    </div>
  );
}
