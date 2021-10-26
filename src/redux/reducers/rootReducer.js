import { combineReducers } from "redux";
import CarData from "../reducers/CarData";
import CartReducer from "./CartReducer";

const rootReducer = combineReducers({
  // CarData,
  CartReducer,
});

export default rootReducer;
