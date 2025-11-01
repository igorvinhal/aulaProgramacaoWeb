// js/core/templates.js
export function html(strings, ...values) {
  return strings.reduce((acc, s, i) => acc + s + (values[i] ?? ""), "");
}

export function render(rootSelector, markup) {
  const root = typeof rootSelector === "string"
    ? document.querySelector(rootSelector)
    : rootSelector;
  if (!root) throw new Error("Root container não encontrado: " + rootSelector);
  root.innerHTML = markup;
}