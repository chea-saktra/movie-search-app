import { createElement } from "../../../utils";

export const Pagination = ({
  currentPage = 1,
  totalPages = 1,
  onPageChange,
} = {}) => {
  const prevBtn = createElement("button", {
    className: "page-btn",
    disabled: currentPage <= 1,
    click: () => onPageChange(currentPage - 1),
  });

  const pageInfo = createElement("span", { className: "page-info" }, [
    `Page ${currentPage} of ${totalPages}`,
  ]);

  const nextBtn = createElement(
    "button",
    {
      className: "page-btn",
      disabled: currentPage >= totalPages,
      click: () => onPageChange(currentPage + 1),
    },
    ["Next"],
  );

  return createElement("div", { className: "pagination-container" }, [
    prevBtn,
    pageInfo,
    nextBtn,
  ]);
};
