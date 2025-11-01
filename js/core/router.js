// js/core/router.js
export class Router {
  constructor() {
    this.routes = new Map();
    this.notFound = null;
  }
  add(path, handler) { this.routes.set(path, handler); return this; }
  setNotFound(handler) { this.notFound = handler; return this; }

  resolve() {
    const hash = location.hash || "#/home";
    const [path, query] = hash.split("?");
    const params = Object.fromEntries(new URLSearchParams(query || ""));
    const handler = this.routes.get(path);
    if (handler) handler(params);
    else this.notFound?.(params);
  }

  start() {
    window.addEventListener("hashchange", () => this.resolve());
    this.resolve();
  }
}