import { createElement } from "../../../utils";

export const SkeletonCard = () => {
  return createElement("div", { className: "skeleton-card" }, [
    createElement("div", { className: "skeleton-image" }),
    createElement("div", { className: "skeleton-title" }),
  ]);
};
