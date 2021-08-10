export const initialState = {
  basket: [],
};

function Reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_BASKET":
      break;
    case "REMOVE_FROM_BASKET":
      break;
    default:
      return state;
  }
}

export default Reducer;
