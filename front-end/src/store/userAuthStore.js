import { create } from "zustand";

export const useAuthStore = create((set) => ({

  // isAuthenticated: !!localStorage.getItem("token"),
  isAuthenticated: true,

  login: (token) => {
    localStorage.setItem("token", token);
    set({ isAuthenticated: true });
  },

  logout: () => {
    localStorage.removeItem("token");
    set({ isAuthenticated: false });
  },
}));
