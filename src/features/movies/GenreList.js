import { createElement } from "../../utils";

export const GenreList = ({ genres = [], onGenreClick } = {}) => {
  const container = createElement(
    "div",
    {
      className: "genre-scroll-container",
    },
    [],
  );

  if (!genres || genres.length === 0) return container;

  genres.forEach((genre) => {
    const genreCard = createElement(
      "div",
      {
        className: "genre-card",
        click: () => onGenreClick?.(genre.id),
      },
      [
        createElement("img", {
          src: genre.image || "https://via.placeholder.com/150x200?text=Genre",
          alt: genre.name,
          className: "genre-img",
        }),
        createElement("div", { className: "genre-overlay" }, [
          createElement("span", { className: "genre-name" }, [genre.name]),
        ]),
      ],
    );
    container.append(genreCard);
  });
  return container;
};
