// src/stores/useMenuStore.js
import { create } from 'zustand';

const useMenuStore = create((set) => ({
  openSubMenuId: null,
  mobileMenuOpen: false,
  setOpenSubMenuId: (id) =>
    set((state) => ({
      openSubMenuId: state.openSubMenuId === id ? null : id,
    })),
  toggleMobileMenu: () =>
    set((state) => ({ mobileMenuOpen: !state.mobileMenuOpen })),
  closeSubMenu: () =>
    set({
      openSubMenuId: null,
      mobileMenuOpen: false,
    }),
}));

export default useMenuStore;
