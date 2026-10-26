import { createElement } from "../../../utils";

export const Input = ({
  type = "text",
  placeholder = "",
  value = "",
  input = null,
} = {}) => {
  return createElement("input", {
    type,
    placeholder,
    value,
    className: "global-input",
    input,
  });
};
