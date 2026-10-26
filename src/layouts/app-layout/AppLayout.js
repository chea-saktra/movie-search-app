import { USER_PROFILE } from "../../constants/User";
import { createElement, select } from "../../utils";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { Sidebar } from "../sidebar/Sidebar";

export const AppLayout = ({ items, activeId, onNavigate }) => {
  const root = select("#app", document);
  if (!root) return;
  root.innerHTML = "";

  const header = Header({ user: USER_PROFILE });

  const sidebar = Sidebar({ items, activeId, onNavigate });

  const main = createElement("main", {
    id: "main-content",
    className: "main-container",
  });
  const footer = Footer();

  root.append(header, sidebar, main, footer);

  return main;
};
