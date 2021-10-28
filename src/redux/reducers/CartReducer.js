import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QUANTITY,
} from "../../action-types/cart-types";

const initialState = {
  cars: [],
  subtotal: 0,
};

const CartReducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cars: [...state.cars, action.payload],
        subtotal: state.subtotal + parseInt(action.payload.Cost),
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cars: state.cars.filter((item) => item.id !== action.payload),
        subtotal: state.subtotal - parseInt(action.payload.Cost),
      };
    case INCREASE_QUANTITY:
      return {
        ...state,
        cart: state.cars.map((item) =>
          item.id === action.id
            ? { ...state, quantity: item.quantity + 1 }
            : item
        ),
      };
    default:
      return state;
  }
};

export default CartReducer;
