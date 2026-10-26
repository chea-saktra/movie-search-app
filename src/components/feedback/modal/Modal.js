import { createElement } from "../../../utils";

export const Modal = ({ title = "", contentElement = null, Close = null }) => {
  const closeBtn = createElement(
    "button",
    { className: "modal-close", click: Close },
    ["X"],
  );

  const header = createElement("div", { className: "modal-header" }, [
    createElement("h3", {}, [title]),
    closeBtn,
  ]);

  const body = createElement("div", { className: "modal-body" }, [content]);
  const content = createElement("div", { className: "modal-content" }, [
    header,
    body,
  ]);

  return createElement("div", { className: "modal-backdrop" }, [content]);
};
