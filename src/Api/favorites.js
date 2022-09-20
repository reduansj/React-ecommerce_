import api from "./api";

export const getFavorites = async () => {
  const favorites = await api.get(`/favorites`);
  return favorites.data;
};

export const addProductToFavorites = async (product) => {
  await api.post(`/favorites`, product);
};

export const deleteFromFavorites = async (id) => {
  return await api.delete(`/favorites/${id}`);
};
