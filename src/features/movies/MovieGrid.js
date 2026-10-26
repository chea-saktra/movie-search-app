import { createElement } from "../../utils";
import { MovieCard } from "./MovieCard";

export const MovieGrid = ({
  movies = [],
  MovieClick,
  FavoriteClick,
  isFavoriteCheck,
}) => {
  const gridContainer = createElement("div", { className: "movie-grid" }, []);

  if (!movies || movies.length === 0) {
    gridContainer.append(
      createElement("p", { className: "no-results" }, ["No movies found."]),
    );
    return gridContainer;
  }

  movies.forEach((movie) => {
    const card = MovieCard({
      movie,
      click: MovieClick,
      FavoriteClick,
      isFavorite: isFavoriteCheck ? isFavoriteCheck(movie.id) : false,
    });
    gridContainer.append(card);
  });
  return gridContainer;
};
