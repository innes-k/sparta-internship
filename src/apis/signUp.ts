import { SignupRequest } from "../types/types";
import api from "./axiosInstance";

export const signUp = async (data: SignupRequest) => {
  const response = await api.post("/register", data);
  return response.data;
};
