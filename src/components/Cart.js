import React, { useState, useSelector } from "react";
import { RemoveFromCart, IncreaseQuantity } from "../actions/CartActions";
import CartReducer from "../redux/reducers/CartReducer";
import {
  Images,
  Cards,
} from "../styled-components/InventoryCardContainerStyle";
import { useDispatch } from "react-redux";

export default function Cart(props) {
  const dispatch = useDispatch();
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
        <button onClick={() => RemoveFromCart(dispatch, props.items.id)}>
          Remove from Cart
        </button>
        <button onClick={() => IncreaseQuantity(dispatch, props.items.id)}>
          Add
        </button>
      </Cards>
    </div>
  );
}
