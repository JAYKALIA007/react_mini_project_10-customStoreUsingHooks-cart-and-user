import makeStore from "./store";

const initialState = {
  username: ""
};
const reducer = (state, action) => {
  switch (action.type) {
    case "update":
      return { ...state, username: action.payload };
    default:
      return state;
  }
};

const [UserProvider, useUserStore, useUserDispatch] = makeStore(
  reducer,
  initialState
);

export { UserProvider, useUserStore, useUserDispatch };
