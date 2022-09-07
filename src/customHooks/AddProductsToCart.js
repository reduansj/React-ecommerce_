import { useQuery, useMutation } from "@tanstack/react-query";

import axios from "axios";
import { getCart } from "../Api";

export const useAddProductsToCart = () => {
  const { isLoading, isError, data, error } = useQuery(["cart"], getCart);
  const cart = !isLoading && !isError ? data : [];

  const mutation = useMutation((cartProducts) => {
    return axios.post("http://localhost:8000/cart", cartProducts);
  });

  const addProduct = (product) => {
    cart.find((element) => element.id === product.id) ??
      mutation.mutate({ id: product.id, title: product.title }, ...cart);
  };

  return addProduct;
};
