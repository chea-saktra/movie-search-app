import { createElement } from "../../../utils";

export const Spinner = () => {
  return createElement("div", { className: "spinner-container" }, [
    createElement("div", { className: "spinner" }),
  ]);
};
