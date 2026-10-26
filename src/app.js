import { SIDEBAR_MENU_ITEMS } from "./constants/Sidebar";
import { AppLayout } from "./layouts/app-layout/AppLayout";
import { HomePage } from "./pages/home/Home";
import { Router } from "./router/router";
import { MovieService } from "./services/movie";
import { FavoriteStore } from "./store/favorite";

export const initApp = () => {
  const router = new Router();

  router.addRoute("/", async (container) => {
    try {
      const [movies, genresData] = await Promise.all([
        MovieService.getTrending(),
        MovieService.getGenres(),
      ]);
      const featuredMovie = movies.length > 0 ? movies[0] : null;
      const trendingMovies = movies.slice(1);

      const genres = genresData.map((genre, index) => ({
        ...genre,
        image: trendingMovies[index]?.poster_path
          ? `https://image.tmdb.org/t/p/w500${trendingMovies[index].poster_path}`
          : "https://via.placeholder.com/150x200?text=Genre",
      }));

      const page = HomePage({
        featuredMovie,
        genres,
        movies: trendingMovies,
        MovieClick: (id) => router.navigateTo(`/details?id=${id}`),
        FavoriteClick: (movie) => {
          FavoriteStore.toggleFavorite(movie);
          router.handleRoute();
        },
        isFavoriteCheck: (id) => FavoriteStore.isFavorite(id),
        onGenreClick: (genreId) => {
          console.log("Genre Clicked:", genreId);
        },
      });
      container.replaceChildren(page);
    } catch (error) {
      console.error(error);
    }
  });

  router.onChange((currentRoute) => {
    AppLayout({
      items: SIDEBAR_MENU_ITEMS,
      activeId: currentRoute,
      onNavigate: (path) => {
        router.navigateTo(path);
      },
    });
    window.lucide.createIcons();
  });

  router.handleRoute();
};
