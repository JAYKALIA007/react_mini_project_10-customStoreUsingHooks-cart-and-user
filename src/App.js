import Body from "./components/Body";
import Navbar from "./components/Navbar";
import "./styles.css";
import { CartProvider } from "./utils/cartContext";
import { UserProvider } from "./utils/userContext";

export default function App() {
  return (
    <div className="">
      <UserProvider>
        <Navbar />
      </UserProvider>
      <CartProvider>
        <Body />
      </CartProvider>
    </div>
  );
}
