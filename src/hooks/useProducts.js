import { useMemo } from 'react';
import { create } from 'zustand';

export const useProducts = create((set, get) => ({
  products: [],

  getProducts: (data) => set({ products: data }),
  getProductById(id) {
    return get().products.find((item) => item.id === id);
  },
}));
