// js/core/spa.js
import { render } from "./templates.js";

export class SPA {
  constructor(rootSelector = "#app") {
    this.rootSelector = rootSelector;
  }
  mount(markup) {
    return render(this.rootSelector, markup);
  }
}