import api from "./api";

export const getProducts = async () => {
  const products = await api.get(`/products`);
  return products.data;
};

export const getProductById = async (id) => {
  const product = await api.get(`/products/${id}`);
  return product.data;
};
