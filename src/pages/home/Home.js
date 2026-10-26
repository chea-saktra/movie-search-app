import { FeaturedBanner } from "../../features/FeaturedBanner";
import { GenreList } from "../../features/movies/GenreList";
import { MovieGrid } from "../../features/movies/MovieGrid";
import { createElement } from "../../utils";

export const HomePage = ({
  featuredMovie,
  genres = [],
  movies = [],
  MovieClick,
  FavoriteClick,
  isFavoriteCheck,
  onGenreClick,
}) => {
  return createElement("div", { className: "home-page" }, [
    FeaturedBanner({
      movie: featuredMovie,
      onWatchTrailer: (id) => MovieClick?.(id),
      onMoreInfo: (id) => MovieClick?.(id),
    }),
    createElement("div", { className: "section-container" }, [
      createElement("div", { className: "section-header" }, [
        createElement("h2", { className: "section-title" }, [
          "🔥 Popular Genres",
        ]),
        createElement("a", { href: "#/genres", className: "view-all" }, [
          "View all",
        ]),
        GenreList({
          genres,
          onGenreClick,
        }),
      ]),
    ]),
    createElement("div", { className: "section-container" }, [
      createElement("div", { className: "section-header" }, [
        createElement("h2", { className: "section-title" }, [
          "Trending Movies",
        ]),
        createElement("a", { href: "#/trending", className: "view-all" }, [
          "View all",
        ]),
      ]),
      MovieGrid({
        movies,
        MovieClick,
        FavoriteClick,
        isFavoriteCheck,
      }),
    ]),
  ]);
};
