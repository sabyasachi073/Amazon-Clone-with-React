export const getBasketTotal = (basket) =>
basket?.reduce((amount, item) => item.price + amount, 0);

export const initialState = {
  basket: [
    {
      id: "2300064",
      title:
        "Apple iPad (7th Gen) 32 GB ROM 10.2 inch with Wi-Fi Only (Space Grey)",
      price: 27200,
      image:
        "https://rukminim1.flixcart.com/image/352/352/k1l1ea80/tablet/t/w/8/apple-mw742hn-a-original-imafh4hg9ycqtszm.jpeg?q=70",
      rating: 5,
    },
  ],
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      // Logic to add item to the basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };


    case "REMOVE_FROM_BASKET":
      // Logic to remove items from the basket

      // We cloned the basket
      let newBasket = [...state.basket];

      // We check to see if the product exists
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        // Item exists in basket, remove it
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product(id: ${action.id}) as its not in basket`
        );
      }

      return { ...state, basket: newBasket };


    default:
      return state;
  }
};

export default reducer;
