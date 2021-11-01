import React from "react";
import { CardContainer } from "../styled-components/InventoryCardContainerStyle";
import { useSelector } from "react-redux";
import Cart from "./Cart";

import emptycart from "../styled-components/empty-cart.png";

import {
  CartCardContainer,
  SubTitleDiv,
  SubTitle,
  EmptyCartDiv,
  EmptyCartImage,
} from "../styled-components/CartCardStyle";

export default function CartContainer() {
  const items = useSelector((state) => state.CartReducer.cars);

  const stringSubtotal = useSelector((state) => state.CartReducer.subtotal);
  const currencySubtotal = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const subtotal = currencySubtotal.format(stringSubtotal);

  if (items.length === 0) {
    return (
      <EmptyCartDiv>
        <h1>Your cart is currently empty</h1>
        <EmptyCartImage src={emptycart} alt="" />
      </EmptyCartDiv>
    );
  }

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
