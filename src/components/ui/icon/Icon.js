import { createElement } from "../../../utils";

export const Icon = ({ name = "", className = "" } = {}) => {
  return createElement("i", {
    className: className,
    dataset: {
      lucide: name,
    },
  });
};
