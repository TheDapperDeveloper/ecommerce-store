import { ADD_TO_CART, REMOVE_FROM_CART } from "../../action-types/cart-types";

const initialState = {
  cars: [],
};

const CartReducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, cars: [...state.cars, action.payload] };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cars: state.cars.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default CartReducer;
