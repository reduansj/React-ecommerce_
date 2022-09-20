import Favorites from "../pages/favorites/Favorites";

export const getProductsByCategory = (products, category) => {
  return products.filter((product) => product.category === category);
};

export const getProductsBySearch = (products, searchText) => {
  return products.filter((product) => {
    const title = product.title.toLowerCase();
    return title.includes(searchText);
  });
};

export const getFavoriteProducts = (products, favorites) => {
  return products.filter((fav) => {
    return favorites.find((product) => product.id === fav.id);
  });
};
