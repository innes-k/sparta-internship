import api from "./axiosInstance";

export const getUserInfo = async () => {
  const response = await api.get("/user");
  return response.data;
};
