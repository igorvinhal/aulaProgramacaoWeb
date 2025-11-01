# aulaProgramacaoWeb# Reabilite-se — ONG de Proteção Animal

Aplicação web SPA (Single Page Application) leve e acessível para a ONG Reabilite-se. Inclui roteamento por hash, templates em JavaScript, validação de formulários, e boas práticas de acessibilidade (WCAG 2.1 nível AA).

## Sumário
- [Visão geral](#visão-geral)
- [Arquitetura e funcionalidades](#arquitetura-e-funcionalidades)
- [Estrutura de pastas](#estrutura-de-pastas)
- [Como executar](#como-executar)
- [Acessibilidade (WCAG 2.1 AA)](#acessibilidade-wcag-21-aa)
- [Qualidade de código](#qualidade-de-código)
- [Build e otimização (opcional)](#build-e-otimização-opcional)
- [Deploy (GitHub Pages)](#deploy-github-pages)
- [Versionamento (Git/GitHub)](#versionamento-gitgithub)
- [Licença](#licença)

---

## Visão geral
A aplicação apresenta:
- Navegação SPA usando hash (`#/home`, `#/projetos`, `#/cadastro`, `#/inscrever`).
- Templates HTML via JavaScript para cada página.
- Máscaras e validação de formulários com feedback acessível.
- Design responsivo, sem dependência de frameworks.

Tecnologias: HTML5, CSS3, JavaScript (ES Modules).

## Arquitetura e funcionalidades
- Roteador hash: `js/core/router.js`
- Montagem da view SPA: `js/core/spa.js`
- Templates utilitários: `js/core/templates.js` (função `html`)
- Validação: `js/core/validate.js` (mensagens com `role="alert"`)
- Páginas (templates + `init()`):
  - Home: `js/pages/home.js`
  - Projetos: `js/pages/projetos.js` (scroll suave para seções via querystring)
  - Cadastro de projeto: `js/pages/cadastro.js`
  - Inscrever-se (usuário): `js/pages/inscrever.js` (máscaras: CPF/CEP/telefone; validação de senha)

## Estrutura de pastas

.
├─ css/
│ ├─ variables.css
│ ├─ base.css
│ ├─ layout.css
│ ├─ components.css
│ ├─ utilities.css
│ └─ app.css
├─ imagens/
├─ js/
│ ├─ core/
│ │ ├─ router.js
│ │ ├─ spa.js
│ │ ├─ storage.js
│ │ ├─ templates.js
│ │ └─ validate.js
│ ├─ pages/
│ │ ├─ home.js
│ │ ├─ projetos.js
│ │ ├─ cadastro.js
│ │ └─ inscrever.js
│ └─ app.js
├─ index.html
├─ projetos.html
├─ cadastro.html
├─ inscrever.html
└─ .gitignore


Observação: os HTMLs de páginas existem por conveniência em desenvolvimento. Em produção, basta o `index.html`; a SPA injeta as views conforme a rota.

## Como executar
- Abrir diretamente o `index.html` no navegador (funciona por ser hash routing).
- Opcional: usar um servidor estático (Live Server, `npx http-server`, `npx serve` etc.) para melhor experiência de recarregamento.

## Acessibilidade (WCAG 2.1 AA)
- Skip link “Pular para o conteúdo” apontando para `#app`.
- Navegação por teclado, foco visível consistente e `aria-expanded`/`aria-controls` no menu.
- Botão “Alto contraste” que alterna a classe `body.hc` e persiste via `localStorage`.
- Mensagens de erro de formulário com `role="alert"`.
- Imagens com `alt` descritivo.
- Contraste de cores ajustado para AA no tema claro.
- Observação: Alto contraste não é “tema escuro”; é uma preferência do usuário, acionada pelo botão. O tema padrão é claro.

## Qualidade de código
- Módulos ES6, separação por responsabilidade (core vs. pages).
- CSS organizado por camadas: variáveis, base, layout, componentes, utilidades e app.
- Sem frameworks, fácil de manter e evoluir.