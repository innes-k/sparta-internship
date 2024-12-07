import api from "./axiosInstance";

import type { UpdateUserInfoRequest } from "../types/myPageTypes";

export const getUserInfo = async () => {
  const response = await api.get("/user");
  return response.data;
};

export const updateUserInfo = async (newUserInfo: UpdateUserInfoRequest) => {
  const response = await api.patch("/profile", newUserInfo);
  return response;
};
