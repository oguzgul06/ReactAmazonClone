export const initialState = {
  basket: [
    {
      id: "1234",
      title:
        "Echo Dot (4th Gen) | Smart speaker with clock and Alexa | Twilight Blue",
      price: 11.59,
      rating: 5,
      image: "https://m.media-amazon.com/images/I/71b9icxgIgL._AC_UY218_.jpg",
    },

    {
      id: "1234",
      title:
        "Echo Dot (4th Gen) | Smart speaker with clock and Alexa | Twilight Blue",
      price: 11.59,
      rating: 5,
      image: "https://m.media-amazon.com/images/I/71b9icxgIgL._AC_UY218_.jpg",
    },
  ],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket];

      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
      }

      return { ...state, basket: newBasket };

    default:
      return state;
  }
};

export default reducer;
