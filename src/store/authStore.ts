import { create } from "zustand";

import type { AuthState } from "../types/authStoreTypes";

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  login: () => {
    set({ isLoggedIn: true });
  },
  logout: () => {
    set({ isLoggedIn: false });
  },
  initializeAuth: () => {
    const token = localStorage.getItem("accessToken");
    set({ isLoggedIn: !!token });
  },
}));
