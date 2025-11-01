import { html } from "../core/templates.js";

export function template() {
  return html`
    <section class="container section projects-list" id="andamento" aria-labelledby="titulo-andamento">
      <h2 id="titulo-andamento" class="section-title">📝 Projetos em andamento</h2>
      <p class="text-muted mb-24">Conheça algumas das iniciativas que estão ativas neste momento.</p>

      <div class="cards">
        <article class="card">
          <img src="imagens/mutirao.jpg" alt="Mutirão de castração em clínica parceira" />
          <div class="card-body">
            <h3 class="card-title">Mutirão de Castração</h3>
            <div class="badges">
              <span class="badge badge-primary">Saúde</span>
              <span class="badge">Parcerias</span>
            </div>
            <p class="card-meta">Próxima edição: 12/11 • Vagas: 20 voluntários</p>
            <p>Redução do abandono por meio de castração a baixo custo com clínicas parceiras.</p>
          </div>
          <div class="card-actions">
            <a href="#/projetos?section=como-apoiar" class="btn btn-primary">🤝 Quero apoiar</a>
            <a href="#/cadastro" class="btn btn-outline">📝 Cadastrar projeto</a>
          </div>
        </article>

        <article class="card">
          <img src="imagens/voluntario.jpg" alt="Equipe em feira de adoção responsável" />
          <div class="card-body">
            <h3 class="card-title">Adoção Responsável</h3>
            <div class="badges">
              <span class="badge badge-secondary">Adoção</span>
              <span class="badge">Educação</span>
            </div>
            <p class="card-meta">Feira mensal • Acompanhamento pós-adoção</p>
            <p>Seleção de tutores, orientação e acompanhamento para adoções seguras e conscientes.</p>
          </div>
          <div class="card-actions">
            <a href="#/inscrever" class="btn btn-outline">🙋 Participar</a>
            <a href="#/cadastro" class="btn btn-outline">📝 Cadastrar projeto</a>
          </div>
        </article>

        <article class="card">
          <img src="imagens/resgatados.jpg" alt="Equipe alimentando animais resgatados" />
          <div class="card-body">
            <h3 class="card-title">Rede de Abrigo</h3>
            <div class="badges">
              <span class="badge badge-accent">Abrigo</span>
              <span class="badge">Doações</span>
            </div>
            <p class="card-meta">Necessita: ração, medicamentos, lar temporário</p>
            <p>Cuidado contínuo e alimentação para cães e gatos em reabilitação e espera por adoção.</p>
          </div>
          <div class="card-actions">
            <a href="#/projetos?section=como-doar" class="btn btn-secondary">💝 Doar</a>
            <a href="#/cadastro" class="btn btn-outline">📝 Cadastrar projeto</a>
          </div>
        </article>
      </div>
    </section>

    <section class="container section" id="como-apoiar" aria-labelledby="titulo-apoiar">
      <h2 id="titulo-apoiar">🤝 Como apoiar</h2>
      <p>Você pode ajudar a Reabilite-se de várias maneiras. Veja algumas formas de contribuir:</p>
      <ul>
        <li><strong>Adoção Voluntária (lar temporário):</strong> Ofereça um lar temporário a um animal resgatado enquanto aguarda adoção definitiva.</li>
        <li><strong>Auxílio Adoção:</strong> Ajude a divulgar nossos animais e ações em suas redes para ampliar o alcance.</li>
        <li><strong>Auxílio Saúde:</strong> Se você é veterinário(a) ou tem experiência em cuidados, contribua com atendimentos básicos.</li>
        <li><strong>Auxílio Marketing:</strong> Habilidades em design, foto/vídeo e redes sociais fortalecem nossa presença.</li>
        <li><strong>Doações Financeiras:</strong> Contribuições cobrem alimentação, medicamentos, castrações e abrigo.</li>
      </ul>
      <div class="mt-16">
        <a class="btn btn-primary" href="#/projetos?section=como-doar">💝 Quero doar</a>
        <a class="btn btn-outline" href="#/cadastro">📝 Cadastrar um projeto</a>
        <a class="btn btn-secondary" href="#/inscrever">✍️ Inscrever-se</a>
      </div>
    </section>

    <section class="container section" id="como-doar" aria-labelledby="titulo-doar">
      <h2 id="titulo-doar">💝 Como doar</h2>
      <p>Escolha o método que for mais conveniente:</p>
      <ul>
        <li>Transferência bancária: Banco BRB, Agência 1234, Conta 56789-0</li>
        <li>Pix (CNPJ): 12.345.678/0001-90</li>
      </ul>
      <p>Após doar, se desejar receber um comprovante por e-mail, entre em contato em
        <a href="mailto:contato@reabilite-se.org.br">contato@reabilite-se.org.br</a>.
      </p>
    </section>

    <section class="container section" id = "depoimentos"aria-labelledby="titulo-depoimentos">
      <h2 id="titulo-depoimentos">🗯️ Depoimentos</h2>
      <blockquote cite="#">
        “Adotar com a Reabilite-se foi uma experiência incrível. Fui orientada em cada etapa e hoje a Luna faz parte da família.”
      </blockquote>
      <p>— Maria S., adotante</p>
    </section>
  `;
}
export function init() {
  // 1) Scroll ao entrar na rota com ?section=...
  const hash = window.location.hash;              // ex: "#/projetos?section=como-doar"
  const query = hash.split("?")[1] || "";         // "section=como-doar"
  const params = new URLSearchParams(query);
  const section = params.get("section");          // "como-doar"

  if (section) {
    setTimeout(() => {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
  }

  // 2) Delegar cliques internos para anchors dessa página
  document.querySelectorAll('a[href^="#/projetos?section="]').forEach(a => {
    a.addEventListener("click", () => {
      const href = a.getAttribute("href") || "";
      const qs = href.split("?")[1] || "";
      const p = new URLSearchParams(qs);
      const target = p.get("section");
      if (target) {
        setTimeout(() => {
          document.getElementById(target)?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 0);
      }
    });
  });
}