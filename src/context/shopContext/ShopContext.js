import React, { useReducer, createContext, useEffect } from "react";
import { getProducts } from "../../Api";

export const Cart = createContext({});

const Context = ({ children }) => {
  return <Cart.Provider value={{}}>{children}</Cart.Provider>;
};

export default Context;
