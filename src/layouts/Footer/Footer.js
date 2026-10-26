import { createElement } from "../../utils";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return createElement("footer", { className: "app-footer" }, [
    createElement("div", { className: "footer-container" }, [
      createElement("p", {}, [
        `@ ${currentYear} CineSearch. All rights reserved.`,
      ]),
      createElement("p", { className: "tmdb-credit" }, [
        "Data provided by",
        createElement(
          "a",
          {
            href: "https://www.themoviedb.org/",
            target: "_blank",
            rel: "noopener noreferrer",
          },
          ["TMDB"],
        ),
      ]),
    ]),
  ]);
};
