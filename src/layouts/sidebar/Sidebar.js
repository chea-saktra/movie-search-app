import { Icon } from "../../components/ui/icon/Icon";
import { createElement } from "../../utils";

export const Sidebar = ({ items = [], activeId = "#/", onNavigate }) => {
  const createNavItem = (item) => {
    const isActive =
      activeId === item.path ||
      `#${activeId === "/" ? "/" : activeId}` === item.path;

    return createElement("li", { className: isActive ? "active" : "" }, [
      createElement(
        "a",
        {
          href: item.path,
          className: "sidebar-link",
          click: (e) => {
            if (onNavigate) {
              e.preventDefault();
              onNavigate(item.path);
            }
          },
        },
        [
          createElement("span", { className: "icon" }, [
            Icon({ name: item.icon }),
          ]),
          createElement("span", { className: "label" }, [item.label]),
        ],
      ),
    ]);
  };

  return createElement(
    "aside",
    { className: "app-sidebar", id: "app-sidebar" },
    [
      createElement("div", { className: "sidebar-section" }, [
        createElement(
          "ul",
          { className: "sidebar-menu" },
          items.map(createNavItem),
        ),
      ]),
    ],
  );
};
