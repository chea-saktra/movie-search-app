import { Button } from "../components";
import { createElement } from "../utils";

export const FeaturedBanner = ({ movie, onWatchTrailer, onMoreInfo } = {}) => {
  if (!movie) return null;

  const backdropUrl = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    : "https://via.placeholder.com/1200x600?text=No+Featured+Image";

  return createElement(
    "div",
    {
      className: "featured-banner",
      style: `background-image: url('${backdropUrl}')`,
    },
    [
      createElement("div", { className: "banner-overlay" }, [
        createElement("div", { className: "banner-content" }, [
          createElement("span", { className: "featured-tag" }, ["FEATURED"]),
          createElement("h1", { className: "banner-title" }, [
            movie.title || movie.name,
          ]),
          createElement("p", { className: "banner-meta" }, [
            `${movie.release_date ? movie.release_date.split("-")[0] : "2024"} • ⭐ ${movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}`,
          ]),
          createElement("p", { className: "banner-overview" }, [
            movie.overview || "No overview available",
          ]),
          createElement("div", { className: "banner-actions" }, [
            Button({
              text: "Watch Trailer",
              variant: "primary",
              className: "watch-btn",
              click: () => onWatchTrailer?.(movie.id),
            }),
            Button({
              text: "More Info",
              variant: "secondary",
              className: "info-btn",
              click: () => onMoreInfo?.(movie.id),
            }),
          ]),
        ]),
      ]),
    ],
  );
};
