import api from "./axiosInstance";

import type { UpdateUserInfoRequest } from "../types/myPageTypes";

export const getUserInfo = async () => {
  const response = await api.get("/user");
  return response.data;
};

export const updateUserInfo = async (newUserInfo: UpdateUserInfoRequest) => {
  const formData = new FormData();

  console.log("newUserInfo.avatar", newUserInfo.avatar);

  formData.append("avatar", newUserInfo.avatar);
  formData.append("nickname", newUserInfo.nickname);

  const response = await api.patch("/profile", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response;
};
