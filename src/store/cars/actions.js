export const ADD_NEW_CAR = "ADD_NEW_CAR";
export const EDIT_CAR = "EDIT_CAR";
export const DELETE_CAR = "DELETE_CAR";

export function addNewCar(car) {
  return {
    type: ADD_NEW_CAR,
    payload: car
  };
}

export function editCar(index, car) {
  return {
    type: EDIT_CAR,
    payload: {
      index,
      car
    }
  };
}

export function deleteCar(index) {
  return {
    type: DELETE_CAR,
    payload: index
  };
}
