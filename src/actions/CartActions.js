import { ADD_TO_CART, REMOVE_FROM_CART } from "../action-types/cart-types";

export const AddToCart = (dispatch, product) => {
  console.log("Item added to cart");
  dispatch({ type: ADD_TO_CART, payload: product });
};

export const RemoveFromCart = (dispatch) => {
  console.log("Item added to cart");
  dispatch({ type: REMOVE_FROM_CART });
};
