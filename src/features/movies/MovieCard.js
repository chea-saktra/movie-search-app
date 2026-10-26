import { createElement } from "../../utils";

export const MovieCard = ({ movie, click, FavoriteClick, isFavorite } = {}) => {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/500x750?text=No+Image";

  const posterImg = createElement("img", {
    src: posterUrl,
    alt: movie.title || movie.name,
    className: "movie-poster",
  });

  const title = createElement("h3", { className: "movie-title" }, [
    movie.title || movie.name,
  ]);

  const rating = createElement("span", { className: "movie-rating" }, [
    `⭐ ${movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}`,
  ]);

  const infoContainer = createElement("div", { className: "movie-info" }, [
    title,
    rating,
  ]);

  const favBtn = createElement(
    "button",
    {
      className: `fav-btn ${isFavorite ? "active" : ""}`,
      click: (e) => {
        e.stopPropagation();
        FavoriteClick?.(movie);
      },
    },
    [isFavorite ? "❤️" : "🤍"],
  );

  const cardContainer = createElement(
    "div",
    {
      className: "movie-card",
      click: () => click?.(movie.id),
    },
    [posterImg, favBtn, infoContainer],
  );

  return cardContainer;
};
