import { UPDATE_SEARCH } from "./actions";

const initialState = {
  text: null,
  name: null,
  year: null,
  priceFrom: null,
  priceTo: null,
  fuelType: null
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_SEARCH:
      return action.payload;
    default:
      return state;
  }
}
