import api from "./api";

export const logInUser = async (userData) => {
  await api.post(`/user`, userData);
};

export const logOutUser = async () => {
  return await api.delete(`/user/1`);
};

export const getUser = async () => {
  const user = await api.get(`/user/1`);
  return user.data;
};
