import cars from "../jsons/truck.json";
import { ADD_NEW_CAR, EDIT_CAR, DELETE_CAR } from "./actions";

export default function(state = cars, action) {
  switch (action.type) {
    case ADD_NEW_CAR:
      return [...state, action.payload];
    case EDIT_CAR:
      return [...state];
    case DELETE_CAR:
      return [...state];
    default:
      return state;
  }
}
