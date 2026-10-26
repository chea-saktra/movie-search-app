export function select(selector, parent = document) {
  return parent.querySelector(selector);
}

export function selectAll(selector, parent = document) {
  return [...parent.querySelectorAll(selector)];
}

const SVG_TAGS = new Set([
  "svg",
  "path",
  "g",
  "circle",
  "rect",
  "line",
  "polyline",
  "polygon",
  "ellipse",
  "text",
  "tspan",
]);

export function createElement(tag, attributes = {}, children = []) {
  const isSvg = SVG_TAGS.has(tag.toLowerCase());
  const element = isSvg
    ? document.createElementNS("http://www.w3.org/2000/svg", tag)
    : document.createElement(tag);

  for (const [key, value] of Object.entries(attributes)) {
    if (value === null || value === undefined || value === false) continue;

    if (key === "className" || key === "class") {
      element.className = value;
    } else if (key === "dataset" && typeof value === "object") {
      for (const [dataKey, dataVal] of Object.entries(value)) {
        element.dataset[dataKey] = dataVal;
      }
    } else if (typeof value === "function") {
      const eventName = key.startsWith("on")
        ? key.slice(2).toLowerCase()
        : key.toLowerCase();
      
      element.addEventListener(eventName, value);
    } else if (key in element && !isSvg) {
      try {
        element[key] = value;
      } catch (e) {
        element.setAttribute(key, value);
      }
    } else {
      element.setAttribute(
        key,
        typeof value === "object" ? value.name || value.icon || "" : value,
      );
    }
  }

  const childrenArray = Array.isArray(children) ? children : [children];

  childrenArray.forEach((child) => {
    if (child !== null && child !== undefined && child !== false) {
      if (child instanceof Node) {
        element.appendChild(child);
      } else {
        element.appendChild(document.createTextNode(String(child)));
      }
    }
  });

  return element;
}
