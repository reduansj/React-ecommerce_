export const getProductsById = (products, id) => {
  return products.find((product) => product.id == id);
};

export const getProductsByCategory = (products, category) => {
  return products.filter((product) => product.category === category);
};

export const getProductsBySearch = (products, searchText) => {
  return products.filter((product) => {
    const title = product.title.toLowerCase();
    return title.includes(searchText);
  });
};
