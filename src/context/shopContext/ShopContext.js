import React, { useState, createContext, useEffect, Children } from "react";
import { getProducts } from "../../Api";

export const ProductsContext = createContext({});

const Context = ({ children }) => {
  const [myCart, setItems] = useState(
    JSON.parse(localStorage.getItem("myCart")) || []
  );

  useEffect(() => {
    localStorage.setItem("myCart", JSON.stringify(myCart));
  }, [myCart]);

  const [wishes, setWish] = useState(
    JSON.parse(localStorage.getItem("wishes")) || []
  );

  useEffect(() => {
    localStorage.setItem("wishes", JSON.stringify(wishes));
  }, [wishes]);

  const [category, setCategory] = useState();

  const [products, setProducts] = useState(
    getProducts().then((products) => {
      return products;
    })
  );

  return (
    <ProductsContext.Provider
      value={{
        myCart,
        setItems,
        wishes,
        setWish,
        category,
        setCategory,
        products,
        setProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default Context;
