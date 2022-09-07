import axios from "axios";
import { useMutation } from "@tanstack/react-query";

export const getProducts = async () => {
  const products = await axios.get("http://localhost:8000/products");
  return products.data;
};

export const getCart = async () => {
  const cart = await axios.get("http://localhost:8000/cart");
  return cart.data;
};
