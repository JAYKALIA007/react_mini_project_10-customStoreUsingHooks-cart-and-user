import Cart from "./Cart";
import { itemList } from "../utils/constants";
import { useCartDispatch } from "../utils/cartContext";
const Body = () => {
  const dispatch = useCartDispatch();
  return (
    <div>
      <h5>My Body</h5>
      <div>
        <ul>
          {itemList.map((item) => (
            <li key={item.name}>
              {item.name}
              <button
                onClick={() => dispatch({ type: "add", payload: item.name })}
              >
                +
              </button>
            </li>
          ))}
        </ul>
      </div>
      <hr />
      <Cart />
    </div>
  );
};

export default Body;
