import api from "./api";
export const updateCheckOut = async (checkoutData) => {
  await api.post(`/checkOut`, checkoutData);
};
