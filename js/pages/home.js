import { html } from "../core/templates.js";

export function template() {
  return html`
    <section class="hero">
      <div class="container">
        <h1>Reabilite-se</h1>
        <p class="mb-16">Resgate, reabilitação e adoção responsável de cães e gatos.</p>
        <div class="badges">
          <span class="badge badge-primary">Proteção Animal 🐾 </span>
          <span class="badge badge-secondary">Adoção 🏡 </span>
          <span class="badge badge-accent">Voluntariado 🤝 </span>
        </div>
      </div>
    </section>

    <section class="container section">
      <h2>Missão</h2>
      <p>Promover o bem-estar animal por meio de resgate, reabilitação e adoção responsável.</p>
    </section>

    <section class="container section grid-2">
      <div>
        <h2>Valores</h2>
        <ul class="list">
          <li>Respeito à vida</li>
          <li>Transparência</li>
          <li>Responsabilidade</li>
          <li>Educação e conscientização</li>
        </ul>
      </div>
      <figure>
        <img src="imagens/voluntario.jpg" alt="Voluntários cuidando de animais resgatados" />
        <figcaption class="text-muted">Nosso trabalho diário com os animais.</figcaption>
      </figure>
    </section>

    <section class="container section" id="como-doar">
      <h2> 💝 Como doar</h2>
      <ul>
        <li>Transferência bancária: Banco BRB, Agência 1234, Conta 56789-0</li>
        <li>Pix (CNPJ): 12.345.678/0001-90</li>
      </ul>
      <p>Após doar, se desejar receber um comprovante por e-mail, entre em contato em
        <a href="mailto:contato@reabilite-se.org.br">contato@reabilite-se.org.br</a>.
      </p>
    </section>
  `;
}
export function init() {}