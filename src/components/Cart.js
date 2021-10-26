import React from "react";
import { useSelector } from "react-redux";
import {
  CardContainer,
  Cards,
} from "../styled-components/InventoryCardContainerStyle";
import { Images } from "../styled-components/InventoryCardContainerStyle";

export default function Cart() {
  const items = useSelector((state) => state.CartReducer);
  console.log(items);
  return (
    <div>
      <CardContainer>
        <Cards>
          <h1>Your Garage</h1>
          {items.cars.map((item) => (
            <h3>{item.Make}</h3>
          ))}
          {items.cars.map((item) => (
            <h3>{item.Model}</h3>
          ))}
          {items.cars.map((item) => (
            <Images src={item.Image} alt="" />
          ))}
        </Cards>
      </CardContainer>
    </div>
  );
}
