import { createElement } from "../utils";

export class Router {
  constructor(routes = {}) {
    this.routes = routes;
    this.currentRoute = null;
    this.listener = null;

    window.addEventListener("hashchange", () => this.handleRoute());
    window.addEventListener("load", () => this.handleRoute());
  }

  addRoute(path, callback) {
    this.routes[path] = callback;
  }

  navigateTo(path) {
    window.location.hash = path;
  }

  onChange(callback) {
    this.listener = callback;
  }

  getCurrentRoute() {
    const hash = window.location.hash.slice(1) || "/";
    const [path] = hash.split("?");
    return path;
  }

  handleRoute() {
    const hash = window.location.hash.slice(1) || "/";
    const [path, queryString] = hash.split("?");
    const queryParams = new URLSearchParams(queryString);

    if (this.listener) {
      this.listener(path);
    }

    const routeCallback = this.routes[path] || this.routes["*"];
    const mainContainer = document.querySelector("#main-content");

    if (mainContainer) {
      mainContainer.innerHTML = "";
      if (routeCallback) {
        routeCallback(mainContainer, queryParams);
      } else {
        mainContainer.append(
          createElement("div", { className: "not-found" }, [
            "404 - Page Not Found",
          ]),
        );
      }
    }
  }
}
