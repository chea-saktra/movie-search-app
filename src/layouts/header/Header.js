import { Button, Icon, Input } from "../../components";
import { createElement } from "../../utils";

export function Header({ user } = {}) {
  const searchInput = Input({
    type: "text",
    placeholder: "Search movies...",
    input: (e) => {},
  });

  return createElement("header", { className: "app-header" }, [
    createElement("div", { className: "header-container" }, [
      // Logo & Brand
      createElement("div", { className: "brand-logo" }, [
        Icon({ name: "film", className: "logo-icon" }),
        createElement("a", { href: "#/", className: "logo-text" }, [
          "MovieBox",
        ]),
      ]),

      // Search Bar & Shortcut Badge
      createElement("div", { className: "header-search" }, [
        Icon({ name: "search", className: "search-icon" }),
        searchInput,
        createElement("span", { className: "shortcut-badge" }, ["CTRL K"]),
      ]),

      // Right Actions (Favorites, Notifications, User Profile)
      createElement("div", { className: "header-actions" }, [
        createElement(
          "a",
          { href: "#/favorites", className: "action-btn", title: "Favorites" },
          [Icon({ name: "heart" })],
        ),
        Button(
          {
            variant: "action",
            className: "action-btn",
            title: "Notifications",
            click: () => {
              console.log("Notification clicked");
            },
          },
          [Icon({ name: "bell" })]
        ),
        createElement("div", { className: "user-profile" }, [
          createElement("img", {
            src: user.avatar || "https://via.placeholder.com/40",
            alt: user.name || "User Profile",
          }),
        ]),
      ]),
    ]),
  ]);
}
