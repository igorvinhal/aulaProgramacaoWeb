// js/pages/inscrever.js
import { html } from "../core/templates.js";

export function template() {
  return html`
    <section class="container section" aria-labelledby="titulo-cadastro-usuario">
      <h2 id="titulo-cadastro-usuario">Cadastro de Usuário</h2>
      <p>Crie sua conta para participar das iniciativas da Reabilite-se. Campos marcados com * são obrigatórios.</p>

      <form id="form-inscrever" action="#" method="post" novalidate>
        <fieldset>
          <legend>Informações Pessoais</legend>

          <div class="form-row"></div>
          <div class="form-group">
            <label for="nome">Nome Completo *</label>
            <input type="text" id="nome" name="nome" required autocomplete="name" />

            <label for="email">E-mail *</label>
            <input type="email" id="email" name="email" required autocomplete="email" inputmode="email" />

            <label for="cpf">CPF *</label>
            <input
              type="text"
              id="cpf"
              name="cpf"
              required
              inputmode="numeric"
              autocomplete="off"
              pattern="\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}"
              placeholder="000.000.000-00"
              title="Informe o CPF no formato 000.000.000-00"
            />
          </div>

          <div class="form-group">
            <label for="telefone">Telefone *</label>
            <input
              type="tel"
              id="telefone"
              name="telefone"
              required
              inputmode="tel"
              autocomplete="tel"
              pattern="\\(\\d{2}\\) \\d{4,5}-\\d{4}"
              placeholder="(00) 0000-0000"
              title="Informe o telefone no formato (00) 0000-0000"
            />

            <label for="nascimento">Data de Nascimento *</label>
            <input type="date" id="nascimento" name="nascimento" required />
          </div>

          <div class="form-group">
            <label for="endereco">Endereço *</label>
            <input type="text" id="endereco" name="endereco" required autocomplete="street-address" />

            <label for="cep">CEP *</label>
            <input
              type="text"
              id="cep"
              name="cep"
              required
              inputmode="numeric"
              autocomplete="postal-code"
              pattern="\\d{5}-\\d{3}"
              placeholder="00000-000"
              title="Informe o CEP no formato 00000-000"
            />

            <label for="cidade">Cidade *</label>
            <input type="text" id="cidade" name="cidade" required autocomplete="address-level2" />

            <label for="estado">Estado (UF) *</label>
            <select id="estado" name="estado" required autocomplete="address-level1">
              <option value="" disabled selected>Selecione</option>
              <option>AC</option><option>AL</option><option>AP</option><option>AM</option>
              <option>BA</option><option>CE</option><option>DF</option><option>ES</option>
              <option>GO</option><option>MA</option><option>MT</option><option>MS</option>
              <option>MG</option><option>PA</option><option>PB</option><option>PR</option>
              <option>PE</option><option>PI</option><option>RJ</option><option>RN</option>
              <option>RS</option><option>RO</option><option>RR</option><option>SC</option>
              <option>SP</option><option>SE</option><option>TO</option>
            </select>

            <label for="rua">Rua *</label>
            <input type="text" id="rua" name="rua" required autocomplete="address-line1" />

            <label for="numero">Número *</label>
            <input type="text" id="numero" name="numero" required inputmode="numeric" />

            <label for="bairro">Bairro *</label>
            <input type="text" id="bairro" name="bairro" required />

            <label for="complemento">Complemento</label>
            <input type="text" id="complemento" name="complemento" autocomplete="address-line2" />
          </div>
        </fieldset>

        <fieldset>
          <legend>Dados de Acesso</legend>

          <label for="usuario">Usuário (login) *</label>
          <input type="text" id="usuario" name="usuario" required autocomplete="username" />

          <label for="senha">Senha *</label>
          <input type="password" id="senha" name="senha" required autocomplete="new-password" minlength="8" />

          <label for="confirmar_senha">Confirmar Senha *</label>
          <input type="password" id="confirmar_senha" name="confirmar_senha" required autocomplete="new-password" minlength="8" />
          <small class="text-muted">A senha deve ter pelo menos 8 caracteres.</small>
        </fieldset>

        <fieldset>
          <legend>Perfil</legend>

          <label for="perfil">Selecione o perfil *</label>
          <select id="perfil" name="perfil" required>
            <option value="" disabled selected>Selecione</option>
            <option value="usuario">Usuário</option>
            <option value="participante">Participante</option>
            <option value="administrador">Administrador</option>
          </select>
          <small class="text-muted"></small>
        </fieldset>

        <fieldset id="bloco-iniciativas" hidden>
          <legend>Candidatura a Iniciativas</legend>
          <p>Selecione as iniciativas às quais deseja se candidatar:</p>

          <div class="form-control">
            <input type="checkbox" id="inic_castracao" name="iniciativas" value="castracao" />
            <label for="inic_castracao">Castração (somente para Participante)</label>
          </div>

          <div class="form-control">
            <input type="checkbox" id="inic_adocao" name="iniciativas" value="adocao" />
            <label for="inic_adocao">Adoção</label>
          </div>

          <div class="form-control">
            <input type="checkbox" id="inic_banho_tosa" name="iniciativas" value="banho_tosa" />
            <label for="inic_banho_tosa">Banho e Tosa</label>
          </div>

          <div class="form-control">
            <input type="checkbox" id="inic_lar_temp" name="iniciativas" value="lar_temporario" />
            <label for="inic_lar_temp">Lar Temporário</label>
          </div>

          <div class="form-control">
            <input type="checkbox" id="inic_marketing" name="iniciativas" value="marketing" />
            <label for="inic_marketing">Apoio em Marketing/Divulgação</label>
          </div>

          <div class="form-control">
            <input type="checkbox" id="inic_saude" name="iniciativas" value="saude" />
            <label for="inic_saude">Apoio em Saúde (básico)</label>
          </div>

          <div class="form-control">
            <input type="checkbox" id="inic_outro" name="iniciativas" value="outro" />
            <label for="inic_outro">Outro</label>
          </div>

          <div class="mt-8" id="bloco-outro" hidden>
            <label for="inic_outro_texto">Descreva a iniciativa</label>
            <input type="text" id="inic_outro_texto" name="inic_outro_texto" placeholder="Ex.: transporte, fotografia, jurídico..." maxlength="120" />
          </div>
        </fieldset>

        <div class="mt-16">
          <button type="submit" class="btn btn-primary">Criar conta</button>
          <a href="#/home" class="btn btn-outline">Voltar para a página inicial</a>
        </div>
      </form>

      <figure class="mt-24">
        <img src="imagens/cadastro.jpg" alt="Pessoa preenchendo formulário de cadastro no computador" />
        <figcaption>Crie sua conta e participe da rede de apoio animal.</figcaption>
      </figure>
    </section>
  `;
}

export function init() {
  const form = document.getElementById("form-inscrever");
  if (!form) return;

  // Campos
  const perfil = form.querySelector("#perfil");
  const blocoIniciativas = form.querySelector("#bloco-iniciativas");
  const chkCastracao = form.querySelector("#inic_castracao");
  const chkOutro = form.querySelector("#inic_outro");
  const blocoOutro = form.querySelector("#bloco-outro");
  const inputOutro = form.querySelector("#inic_outro_texto");

  const senha = form.querySelector("#senha");
  const confirmar = form.querySelector("#confirmar_senha");

  // Máscaras
  const cpf = form.querySelector("#cpf");
  cpf?.addEventListener("input", () => {
    let v = cpf.value.replace(/\D/g, "");
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    cpf.value = v;
  });

  const telefone = form.querySelector("#telefone");
  telefone?.addEventListener("input", () => {
    let v = telefone.value.replace(/\D/g, "");
    v = v.replace(/^(\d{2})(\d)/, "($1) $2");
    v = v.replace(/(\d{4,5})(\d{4})$/, "$1-$2");
    telefone.value = v;
  });

  const cep = form.querySelector("#cep");
  cep?.addEventListener("input", () => {
    let v = cep.value.replace(/\D/g, "");
    v = v.replace(/^(\d{5})(\d)/, "$1-$2");
    cep.value = v;
  });

  // Lógicas condicionais
  function atualizarOutro() {
    if (chkOutro?.checked) {
      blocoOutro.hidden = false;
      inputOutro.required = true;
    } else {
      blocoOutro.hidden = true;
      inputOutro.required = false;
      if (inputOutro) inputOutro.value = "";
    }
  }
  chkOutro?.addEventListener("change", atualizarOutro);

  function atualizarIniciativas() {
    const valor = perfil?.value; // '', 'usuario', 'participante', 'administrador'
    if (valor === "usuario" || valor === "participante") {
      blocoIniciativas.hidden = false;

      // Castração: somente participante
      if (chkCastracao) {
        if (valor === "participante") {
          chkCastracao.disabled = false;
          chkCastracao.parentElement.style.display = "";
        } else {
          chkCastracao.checked = false;
          chkCastracao.disabled = true;
          chkCastracao.parentElement.style.display = "none";
        }
      }

      atualizarOutro();
    } else {
      blocoIniciativas.hidden = true;
      blocoIniciativas.querySelectorAll('input[type="checkbox"]').forEach(cb => { cb.checked = false; });
      if (chkOutro) chkOutro.checked = false;
      atualizarOutro();
    }
  }
  perfil?.addEventListener("change", atualizarIniciativas);

  // Validação senha x confirmação
  function senhasConferem() {
    if (senha?.value && confirmar?.value && senha.value !== confirmar.value) {
      confirmar.setCustomValidity("As senhas não conferem.");
    } else {
      confirmar?.setCustomValidity("");
    }
  }
  senha?.addEventListener("input", senhasConferem);
  confirmar?.addEventListener("input", senhasConferem);

  // Inicialização
  atualizarIniciativas();

  // Submit simulado
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    // Dispara checagem nativa do browser
    if (!form.checkValidity()) {
      // força mensagens nativas
      form.reportValidity?.();
      return;
    }
    alert("Cadastro enviado com sucesso! (simulação)");
    form.reset();
    atualizarIniciativas();
  });
}