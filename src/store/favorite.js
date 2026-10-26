import { StorageService } from "../services/StorageService";

export const FavoriteStore = {
  getFavorites() {
    return StorageService.get("favorites", []);
  },

  isFavorite(id) {
    const favorites = this.getFavorites();
    return favorites.some((f) => f.id === id);
  },

  toggleFavorite(movie) {
    const favorites = this.getFavorites();
    const index = favorites.findIndex((f) => f.id === movie.id);
    if (index >= 0) {
      favorites.splice(index, 1);
    } else {
      favorites.push(movie);
    }

    StorageService.set("favorites", favorites);
    return favorites;
  },
};
