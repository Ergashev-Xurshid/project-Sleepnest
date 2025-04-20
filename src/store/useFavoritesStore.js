
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { products as initialProducts } from '../utils/productsCards'; 

export const useFavoritesStore = create(
  persist(
    (set, get) => ({
      products: initialProducts,
      
      toggleLike: (productId) => {
        set((state) => ({
          products: state.products.map((product) =>
            product.id === productId
              ? { ...product, like: !product.like }
              : product
          ),
        }));
      },

      likedCount: () => {
        return get().products.filter((p) => p.like).length;
      },
    }),
    {
      name: 'products-storage',
    }
  )
);
