import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { AddToCart } from "../actions/CartActions";
import {
  AddToCartButton,
  Images,
} from "../styled-components/InventoryCardContainerStyle";
import {
  Cards,
  SubTitle,
} from "../styled-components/InventoryCardContainerStyle";

export default function InventoryCards(props) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const stringCarPrice = props.cars.Cost;
  const currencyCarPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const price = currencyCarPrice.format(stringCarPrice);
  return (
    <div>
      <Cards>
        <SubTitle>
          {props.cars.Year} {props.cars.Make} {props.cars.Model}
        </SubTitle>
        <Images src={props.cars.Image} alt="" />

        <p>Mileage: {props.cars.Mileage} miles</p>
        <h3>{price}</h3>
        <AddToCartButton onClick={() => AddToCart(dispatch, props.cars, cart)}>
          Add to Cart
        </AddToCartButton>
      </Cards>
    </div>
  );
}
