import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from "../action-types/cart-types";

export const AddToCart = (dispatch, product) => {
  console.log("Item added to cart");
  dispatch({ type: ADD_TO_CART, payload: product });
};

export const RemoveFromCart = (dispatch, id, Cost) => {
  console.log("Item removed to cart");
  dispatch({ type: REMOVE_FROM_CART, payload: id, Cost });
};

export const IncreaseQuantity = (dispatch, id) => {
  dispatch({ type: INCREASE_QUANTITY, payload: id });
};

export const DecreaseQuantity = (dispatch, id) => {
  dispatch({ type: DECREASE_QUANTITY, payload: id });
};
