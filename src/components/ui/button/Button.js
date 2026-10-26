import { createElement } from "../../../utils";

export const Button = (
  {
    text = "",
    type = "button",
    variant = "primary",
    click = null,
    className = "",
  } = {},
  children = [],
) => {
  const content = text
    ? [text, ...(Array.isArray(children) ? children : [children])]
    : children;

  return createElement(
    "button",
    {
      type,
      className: `btn btn-${variant} ${className}`,
      click,
    },
    content,
  );
};
