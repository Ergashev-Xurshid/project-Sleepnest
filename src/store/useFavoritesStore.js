import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useFavoritesStore = create(
  persist(
    (set) => ({
      favorites: [],
      toggleFavorite: (product) =>
        set((state) => {
          const exists = state.favorites.find((item) => item.id === product.id);
          if (exists) {
            return {
              favorites: state.favorites.filter((item) => item.id !== product.id),
            };
          } else {
            return {
              favorites: [...state.favorites, product],
            };
          }
        }),
    }),
    {
      name: 'favorites-storage',
    }
  )
);
