import api from "./axiosInstance";

import type { LoginRequest } from "../types/loginTypes";

export const login = async (data: LoginRequest) => {
  const response = await api.post("/login", data);
  return response.data;
};
