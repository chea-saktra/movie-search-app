import { createElement } from "../../../utils";

export const Toast = ({ message, type = "info" } = {}) => {
  return createElement("div", { className: `toast toast-${type}` }, [message]);
};
