export const UPDATE_SEARCH = "UPDATE_SEARCH";

export function updateSearch(model) {
  return {
    type: UPDATE_SEARCH,
    payload: model
  };
}
