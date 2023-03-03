import { create } from 'zustand';
import { productService } from '../services';

export const useProducts = create((set, get) => ({
  products: [],
  getProducts: (data) => set({ products: data }),
  getProductById(id) {
    return get().products.find((item) => item.id === id);
  },
}));
