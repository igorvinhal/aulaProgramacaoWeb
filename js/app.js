import { Router } from "./core/router.js";
import { SPA } from "./core/spa.js";

import { template as home, init as initHome } from "./pages/home.js";
import { template as projetos, init as initProjetos } from "./pages/projetos.js";
import { template as cadastro, init as initCadastro } from "./pages/cadastro.js";
import { template as inscrever, init as initInscrever } from "./pages/inscrever.js";

const spa = new SPA("#app");
const router = new Router();

// Toggle do menu hambúrguer
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#primary-nav');
toggle?.addEventListener('click', () => {
  const expanded = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!expanded));
  nav.classList.toggle('is-open');
});

// Dropdown: abrir no mobile ao clicar no item "Projetos"
const dropdownTriggers = document.querySelectorAll('.has-dropdown > a');
dropdownTriggers.forEach(trigger => {
  trigger.addEventListener('click', (e) => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) {
      // Prevent navegação imediata; primeiro abre
      const parent = trigger.parentElement;
      const alreadyOpen = parent.classList.contains('open');
      if (!alreadyOpen) {
        e.preventDefault();
        parent.classList.add('open');
        trigger.setAttribute('aria-expanded', 'true');
      } else {
        // se já está aberto e o href aponta para seção genérica, deixar navegar
        trigger.setAttribute('aria-expanded', 'false');
        parent.classList.remove('open');
      }
    } else {
      // Desktop: melhorar acessibilidade de aria-expanded ao focar/blur
      trigger.addEventListener('mouseenter', () => trigger.setAttribute('aria-expanded', 'true'), { once: true });
      trigger.addEventListener('blur', () => trigger.setAttribute('aria-expanded', 'false'));
    }
  });
});

// Fechar dropdowns ao navegar para um subitem (mobile)
document.querySelectorAll('.has-dropdown .dropdown a').forEach(link => {
  link.addEventListener('click', () => {
    const parent = link.closest('.has-dropdown');
    parent?.classList.remove('open');
    parent?.querySelector('a')?.setAttribute('aria-expanded', 'false');
    // fecha o menu mobile, opcional:
    nav?.classList.remove('is-open');
    toggle?.setAttribute('aria-expanded', 'false');
  });
});

function mount(view, init) {
  spa.mount(view());
  init?.();
}

router
  .add("#/home",      () => mount(home, initHome))
  .add("#/projetos",  () => mount(projetos, initProjetos))
  .add("#/cadastro",  () => mount(cadastro, initCadastro))
  .add("#/inscrever", () => mount(inscrever, initInscrever))
  .setNotFound(() => spa.mount(`<section class="container section"><h2>404</h2><p>Página não encontrada.</p></section>`))
  .start();