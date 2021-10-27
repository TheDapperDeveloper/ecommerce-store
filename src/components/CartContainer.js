import React from "react";
import { CardContainer } from "../styled-components/InventoryCardContainerStyle";
import { useSelector } from "react-redux";
import Cart from "./Cart";

export default function CartContainer() {
  const items = useSelector((state) => state.CartReducer.cars);

  return (
    <div>
      <CardContainer>
        {items.map((item) => (
          <Cart items={item} />
        ))}
      </CardContainer>
    </div>
  );
}
