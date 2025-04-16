import { create } from 'zustand';

export const useFavoritesStore = create((set) => ({
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
}));
