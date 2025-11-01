// js/pages/cadastro.js
import { html } from "../core/templates.js";
import { storage } from "../core/storage.js";
import { minLen, setFieldError } from "../core/validate.js";

export function template() {
  return html`
    <section class="container section" aria-labelledby="titulo-cadastro-projeto">
      <h2 id="titulo-cadastro-projeto">Cadastro de Projeto/Evento</h2>
      <p class="mb-12">Preencha os campos para cadastrar uma nova iniciativa da ONG.</p>

      <form id="form-cadastro" novalidate>
        <fieldset>
          <legend>Informações do Projeto</legend>

          <div class="form-group">
            <label for="titulo">Título do Projeto *</label>
            <input type="text" id="titulo" name="titulo" required />
          </div>

          <div class="form-group">
            <label for="descricao">Descrição *</label>
            <textarea id="descricao" name="descricao" rows="4" required></textarea>
          </div>

          <div class="form-group">
            <label for="categoria">Categoria *</label>
            <select id="categoria" name="categoria" required>
              <option value="">Selecione…</option>
              <option value="castracao">Mutirão de Castração</option>
              <option value="adocao">Feira de Adoção</option>
              <option value="resgate">Resgate e Reabilitação</option>
              <option value="educacao">Educação e Conscientização</option>
              <option value="abrigo">Apoio a Abrigos</option>
            </select>
          </div>

          <div class="grid-2">
            <div class="form-group">
              <label for="data">Data (opcional)</label>
              <input type="date" id="data" name="data" />
            </div>
            <div class="form-group">
              <label for="orcamento">Orçamento Estimado (R$)</label>
              <input type="number" id="orcamento" name="orcamento" min="0" step="0.01" placeholder="0,00" />
            </div>
          </div>

          <div class="form-group">
            <label for="objetivos">Objetivos (mín. 10 caracteres) *</label>
            <textarea id="objetivos" name="objetivos" rows="3" required></textarea>
          </div>

          <div class="form-group">
            <label for="responsavel">Responsável *</label>
            <input type="text" id="responsavel" name="responsavel" required />
          </div>

          <div class="form-group">
            <label for="contato">E-mail de Contato *</label>
            <input type="email" id="contato" name="contato" required placeholder="contato@ong.org" />
          </div>
        </fieldset>

        <div class="mt-16">
          <button class="btn btn-primary" type="submit">Cadastrar</button>
          <a class="btn btn-outline" href="#/projetos">Voltar</a>
        </div>
      </form>

      <div class="mt-24">
        <h3 class="section-subtitle">Cadastros salvos (simulação)</h3>
        <ul id="lista-cadastros" class="list"></ul>
      </div>
    </section>
  `;
}

function validateField(input) {
  const id = input.id;
  const val = (input.value || "").trim();
  let msg = "";

  if (input.hasAttribute("required") && !val) {
    msg = "Campo obrigatório.";
  } else if (id === "titulo" && !minLen(val, 3)) {
    msg = "Título deve ter pelo menos 3 caracteres.";
  } else if (id === "descricao" && !minLen(val, 10)) {
    msg = "Descrição deve ter pelo menos 10 caracteres.";
  } else if (id === "objetivos" && !minLen(val, 10)) {
    msg = "Objetivos devem ter pelo menos 10 caracteres.";
  } else if (id === "orcamento" && val !== "") {
    const n = Number(val);
    if (Number.isNaN(n) || n < 0) msg = "Informe um valor numérico válido (>= 0).";
  }

  setFieldError(input, msg);
  return !msg;
}

function renderLista() {
  const ul = document.getElementById("lista-cadastros");
  if (!ul) return;
  const itens = storage.get("projetos", []);
  if (!itens.length) {
    ul.innerHTML = "<li class='text-muted'>Nenhum cadastro salvo.</li>";
    return;
  }
  ul.innerHTML = itens.map((p, idx) => `
    <li class="list-item">
      <strong>${p.titulo}</strong> — ${p.categoria || "Sem categoria"}
      <small class="text-muted"> (${new Date(p.createdAt).toLocaleString()})</small>
      <button class="btn btn-outline" data-del="${idx}">Excluir</button>
    </li>
  `).join("");

  ul.querySelectorAll("[data-del]").forEach(btn => {
    btn.addEventListener("click", () => {
      const i = Number(btn.getAttribute("data-del"));
      const data = storage.get("projetos", []);
      data.splice(i, 1);
      storage.set("projetos", data);
      renderLista();
    });
  });
}

export function init() {
  const form = document.getElementById("form-cadastro");
  if (!form) return;

  form.querySelectorAll("input, textarea, select").forEach((el) => {
    const evt = el.tagName === "SELECT" ? "change" : "input";
    el.addEventListener(evt, () => validateField(el));
    el.addEventListener("blur", () => validateField(el));
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const fields = Array.from(form.querySelectorAll("input, textarea, select"));
    const ok = fields.every(validateField);
    if (!ok) return;

    const payload = Object.fromEntries(new FormData(form).entries());
    payload.createdAt = Date.now();

    const data = storage.get("projetos", []);
    data.push(payload);
    storage.set("projetos", data);

    alert("Projeto cadastrado com sucesso! (simulação)");
    form.reset();
    renderLista();
  });

  renderLista();
}