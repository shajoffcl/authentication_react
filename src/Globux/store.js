import React from "react";
import initialState from "./initialState";
import reducer from "./reducer";

export const Store = React.createContext(initialState);

const { Provider } = Store;

export const StateProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};
