import { createContext, useContext, useReducer } from "react";

export default function makeStore(reducer, initialState) {
  const storeContext = createContext();
  const dispatchContext = createContext();

  function StoreProvider({ children }) {
    const [store, dispatch] = useReducer(reducer, initialState);
    console.log(typeof store);
    return (
      <storeContext.Provider value={store}>
        <dispatchContext.Provider value={dispatch}>
          {children}
        </dispatchContext.Provider>
      </storeContext.Provider>
    );
  }

  function useStore() {
    return useContext(storeContext);
  }

  function useDispatch() {
    return useContext(dispatchContext);
  }

  return [StoreProvider, useStore, useDispatch];
}
