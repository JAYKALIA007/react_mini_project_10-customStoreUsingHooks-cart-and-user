import makeStore from "./store";
const initialState = {
  cartItems: []
};
const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      console.log(action.payload);
      return { cartItems: [...state.cartItems, action.payload] };
    case "remove":
      const index = state.cartItems.indexOf(action.payload);
      const temp = state.cartItems.slice();
      if (index > -1) {
        temp.splice(index, 1);
        return { cartItems: temp };
      }
      return state;
    default:
      return state;
  }
};

const [CartProvider, useCartStore, useCartDispatch] = makeStore(
  reducer,
  initialState
);

export { CartProvider, useCartStore, useCartDispatch };
