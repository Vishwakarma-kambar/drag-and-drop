//Creates a DOM element with specified tag, class, and text content.

export function createElement(tag, className, textContent = "") {
  const element = document.createElement(tag);
  element.className = className;
  element.textContent = textContent;
  return element;
}
