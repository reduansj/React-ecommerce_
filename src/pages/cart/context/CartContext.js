import { useQuery } from "@tanstack/react-query";
import { createContext, useReducer } from "react";
import { getCart } from "../../../Api/cart";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  function reducer(state, action) {
    const { payload: id } = action;
    switch (action.type) {
      case "increment":
        return state.map((product) => {
          if (product.id === id) {
            return {
              ...product,
              quantity: product.quantity + 1,
            };
          }
          return product;
        });
      case "decrement":
        const decrementedProduct = state.find((product) => product.id === id);
        if (decrementedProduct.quantity === 1) {
          return state;
        }
        return state.map((product) => {
          if (product.id === id) {
            return {
              ...product,
              quantity: product.quantity - 1,
            };
          }
          return product;
        });
      case "initialize":
        return action.payload;

      default:
        return state;
    }
  }

  const {
    isLoading: cartIsLoading,
    isError: cartIsError,
    data,
    error: cartError,
  } = useQuery(["cart"], getCart, {
    onSuccess: (data) => dispatch({ type: "initialize", payload: data }),
  });

  const [cartItems, dispatch] = useReducer(reducer, data);

  const totalPrice = cartItems?.reduce((total, cartProduct) => {
    return (total = total + cartProduct.price * cartProduct.quantity);
  }, 0);
  const shipmentPrice = 15;
  const subTotal = totalPrice + shipmentPrice;

  return (
    <CartContext.Provider
      value={{
        cartItems,
        dispatch,
        totalPrice,
        subTotal,
        shipmentPrice,
        cartIsError,
        cartIsLoading,
        cartError,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
