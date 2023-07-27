import { useEffect } from "react";
import { useUserStore, useUserDispatch } from "../utils/userContext";
const Navbar = () => {
  const { username } = useUserStore();
  const initials =
    username !== "" &&
    username.split(" ")[0].charAt(0) + "." + username.split(" ")[1].charAt(0);
  const dispatch = useUserDispatch();
  useEffect(() => {
    const timeout = setTimeout(
      () => dispatch({ type: "update", payload: "Jane Doe" }),
      1000 * 2
    );
    return () => clearTimeout(timeout);
  }, [dispatch]);
  return (
    <div>
      {/* <span>My navbar</span> */}
      <span>Intials - {initials}</span>
      <hr />
    </div>
  );
};

export default Navbar;
