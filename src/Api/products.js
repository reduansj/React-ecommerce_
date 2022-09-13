import axios from "axios";

export const getProducts = async () => {
  const products = await axios.get("http://localhost:8000/products");
  return products.data;
};

export const getProductById = async (id) => {
  const product = await axios.get(`http://localhost:8000/products/${id}`);
  return product.data;
};

export const getCart = async () => {
  const cart = await axios.get("http://localhost:8000/cart");

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

  await axios.post("http://localhost:8000/cart", product);
};

export const editCartProduct = async (product) => {
  await axios.put(`http://localhost:8000/cart/${product.id}`, product);
};

export const deleteCartProduct = async (id) => {
  return await axios.delete(`http://localhost:8000/cart/${id}`);
};
