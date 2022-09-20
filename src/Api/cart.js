import api from "./api";

import { getProductById } from "./products";

export const getCart = async () => {
  const cart = await api.get(`/cart`);

  /*Promise all wrap all the promises,
  and returns the array of promises
  only if all of them are fulfilled.
  Throws an error if one of them fails.*/
  const results = await Promise.all(
    cart.data.map(async (cartProduct) => {
      const product = await getProductById(cartProduct.id);
      return {
        ...product,
        quantity: cartProduct.quantity,
        size: cartProduct.size,
      };
    })
  );

  return results;
};

export const addProductToCart = async (product) => {
  const cart = await getCart();
  const productInCart = cart.find(
    (productInCart) => productInCart.id === product.id
  );

  if (productInCart) {
    await editCartProduct({ ...product, quantity: productInCart.quantity + 1 });
    return;
  }

  await api.post(`/cart`, product);
};

export const editCartProduct = async (product) => {
  await api.put(`/cart/${product.id}`, product);
};

export const deleteCartProduct = async (id) => {
  return await api.delete(`/cart/${id}`);
};

export const deleteCart = async () => {
  const cart = await api.get(`/cart`);
  await Promise.all(
    cart.data.map(async (cartProduct) => {
      await deleteCartProduct(cartProduct.id);
    })
  );
};
