import api from "./axiosInstance";

import type { SignUpRequest } from "../types/signUpTypes";

export const signUp = async (data: SignUpRequest) => {
  const response = await api.post("/register", data);
  return response.data;
};
