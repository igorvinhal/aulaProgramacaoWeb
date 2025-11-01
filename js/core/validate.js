// js/core/validate.js
export function isPhone(value) {
  return /^\(\d{2}\) \d{4,5}-\d{4}$/.test(value ?? "");
}
export function isCEP(value) {
  return /^\d{5}-\d{3}$/.test(value ?? "");
}
export function minLen(value, n) {
  return (value ?? "").length >= n;
}

// exibição de erro padronizada
export function setFieldError(input, message = "") {
  const group = input.closest(".form-group") || input.parentElement;
  input.setCustomValidity(message || "");
  input.classList.toggle("is-error", !!message);
  let help = group.querySelector(".field-error");
  if (!help && message) {
    help = document.createElement("small");
    help.className = "field-error";
    group.appendChild(help);
  }
  if (help) help.textContent = message;
}