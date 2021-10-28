import React, { useState, useSelector } from "react";
import { RemoveFromCart, IncreaseQuantity } from "../actions/CartActions";
import CartReducer from "../redux/reducers/CartReducer";
import {
  Images,
  Cards,
  SubTitle,
} from "../styled-components/InventoryCardContainerStyle";
import { useDispatch } from "react-redux";
import {
  AddSubtractButton,
  RemoveFromCartButton,
} from "../styled-components/CartCardStyle";

export default function Cart(props) {
  const dispatch = useDispatch();
  console.log(props.items);

  const stringCarPrice = props.items.Cost;
  const currencyCarPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const price = currencyCarPrice.format(stringCarPrice);

  return (
    <div>
      <Cards>
        <SubTitle>
          {props.items.Year} {props.items.Make} {props.items.Model}
        </SubTitle>

        <Images src={props.items.Image} alt="" />
        <h3>{price}</h3>
        <AddSubtractButton
          onClick={() =>
            IncreaseQuantity(dispatch, props.items.id, props.items.quantity)
          }
        >
          -
        </AddSubtractButton>
        <RemoveFromCartButton
          onClick={() =>
            RemoveFromCart(dispatch, props.items.id, props.items.Cost)
          }
        >
          Remove from Cart
        </RemoveFromCartButton>
        <AddSubtractButton
          onClick={() =>
            IncreaseQuantity(dispatch, props.items.id, props.items.quantity)
          }
        >
          +
        </AddSubtractButton>
      </Cards>
    </div>
  );
}
