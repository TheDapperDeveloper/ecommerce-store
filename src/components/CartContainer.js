import React from "react";
import { CardContainer } from "../styled-components/InventoryCardContainerStyle";
import { useSelector } from "react-redux";
import Cart from "./Cart";

import {
  CartCardContainer,
  SubTitleDiv,
  SubTitle,
} from "../styled-components/CartCardStyle";

export default function CartContainer() {
  const items = useSelector((state) => state.CartReducer.cars);

  const stringSubtotal = useSelector((state) => state.CartReducer.subtotal);
  const currencySubtotal = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const subtotal = currencySubtotal.format(stringSubtotal);

  return (
    <div>
      <SubTitleDiv>
        <SubTitle>Subtotal: {subtotal}</SubTitle>
      </SubTitleDiv>
      <CartCardContainer>
        {items.map((item) => (
          <Cart items={item} />
        ))}
      </CartCardContainer>
    </div>
  );
}
