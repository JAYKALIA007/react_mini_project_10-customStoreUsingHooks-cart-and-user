import { useCartStore, useCartDispatch } from "../utils/cartContext";
const Cart = () => {
  const { cartItems } = useCartStore();
  const dispatch = useCartDispatch();

  return (
    <div>
      <h5>Cart count - {cartItems.length}</h5>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => dispatch({ type: "remove", payload: item })}>
              -
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Cart;
