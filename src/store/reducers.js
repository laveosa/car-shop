import { combineReducers } from "redux";
import CarsReducers from "./cars/reducer";
import SearchReducers from "./search/reducer";

export default combineReducers({
  cars: CarsReducers,
  search: SearchReducers
});
