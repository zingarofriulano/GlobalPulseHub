const categories = [
  { id: "giochi", name: "Mondo Giochi", icon: "🎮", description: "Videogiochi, community e novità" },
  { id: "libri", name: "Libri", icon: "📚", description: "Letture, autori e consigli" },
  { id: "veicoli", name: "Veicoli", icon: "🏎️", description: "Auto, moto e camion" },
  { id: "cucina", name: "Cucina", icon: "🍳", description: "Ricette e ispirazione" },
  { id: "moda", name: "Moda", icon: "🧥", description: "Stile, tendenze e brand" },
  { id: "politica", name: "Politica", icon: "🏛️", description: "Attualità e istituzioni" },
  { id: "lavoro", name: "Lavoro", icon: "💼", description: "Carriera e opportunità" }
];

const items = [
  {
    id: "elden-ring",
    category: "giochi",
    title: "Elden Ring",
    icon: "⚔️",
    tags: ["Action RPG", "Fantasy"],
    description: "Esplora l’Interregno, affronta boss leggendari e condividi strategie con la community.",
    colors: ["#604825", "#172b38"],
    links: [["Sito ufficiale", "https://en.bandainamcoent.eu/elden-ring/elden-ring"], ["Steam", "https://store.steampowered.com/"]],
    news: ["Nuove sfide e strategie: la community aggiorna le guide per l’Interregno.", "Eventi e aggiornamenti: segui le comunicazioni ufficiali del gioco."]
  },
  {
    id: "minecraft",
    category: "giochi",
    title: "Minecraft",
    icon: "🧱",
    tags: ["Sandbox", "Creatività"],
    description: "Costruisci, esplora e condividi le tue creazioni in un mondo senza limiti.",
    colors: ["#28775b", "#1a3540"],
    links: [["Sito ufficiale", "https://www.minecraft.net/"], ["Minecraft Wiki", "https://minecraft.wiki/"]],
    news: ["La community condivide nuovi progetti e idee di costruzione.", "Scopri guide e risorse realizzate dai giocatori."]
  },
  {
    id: "dune",
    category: "libri",
    title: "Dune",
    icon: "🏜️",
    tags: ["Fantascienza", "Classici"],
    description: "Un viaggio nell’universo creato da Frank Herbert, tra politica, ecologia e destino.",
    colors: ["#9a552b", "#39283a"],
    links: [["Editore Mondadori", "https://www.oscarmondadori.it/"]],
    news: ["Letture consigliate e approfondimenti sulla saga di Arrakis.", "Discussioni dei lettori su personaggi e temi del romanzo."]
  },
  {
    id: "narrativa-italiana",
    category: "libri",
    title: "Narrativa italiana",
    icon: "📖",
    tags: ["Narrativa", "Italia"],
    description: "Scopri autori, nuove uscite e consigli di lettura dalla scena italiana.",
    colors: ["#3d5c9b", "#252345"],
    links: [["IBS Libri", "https://www.ibs.it/"], ["Libreria Universitaria", "https://www.libreriauniversitaria.it/"]],
    news: ["Nuove uscite e suggerimenti di lettura dalla redazione.", "Il club del libro apre una nuova discussione."]
  },
  {
    id: "auto-elettriche",
    category: "veicoli",
    title: "Auto elettriche",
    icon: "🔋",
    tags: ["Auto", "Mobilità"],
    description: "Modelli, autonomia e novità per chi guarda alla mobilità elettrica.",
    colors: ["#197c85", "#1b3156"],
    links: [["Quattroruote", "https://www.quattroruote.it/"], ["Motor1 Italia", "https://it.motor1.com/"]],
    news: ["Panoramica dei modelli e delle novità sulla mobilità elettrica.", "La community confronta autonomia, ricarica e costi di utilizzo."]
  },
  {
    id: "moto",
    category: "veicoli",
    title: "Moto e touring",
    icon: "🏍️",
    tags: ["Moto", "Viaggi"],
    description: "Percorsi, manutenzione e modelli per gli appassionati delle due ruote.",
    colors: ["#9c4938", "#342b43"],
    links: [["Moto.it", "https://www.moto.it/"], ["Dueruote", "https://www.dueruote.it/"]],
    news: ["Itinerari e consigli per pianificare il prossimo viaggio.", "Confronti e novità dal mondo delle due ruote."]
  },
  {
    id: "ricette-italiane",
    category: "cucina",
    title: "Ricette italiane",
    icon: "🍝",
    tags: ["Ricette", "Tradizione"],
    description: "Piatti regionali, ingredienti di stagione e trucchi in cucina.",
    colors: ["#a54b47", "#60403a"],
    links: [["GialloZafferano", "https://www.giallozafferano.it/"]],
    news: ["Idee per un menu stagionale con ingredienti semplici.", "La community condivide varianti e ricette di famiglia."]
  },
  {
    id: "cucina-vegetale",
    category: "cucina",
    title: "Cucina vegetale",
    icon: "🥑",
    tags: ["Vegetale", "Benessere"],
    description: "Ricette vegetali creative, gustose e facili da provare.",
    colors: ["#39835b", "#223e42"],
    links: [["Cucina Botanica", "https://www.cucinabotanica.com/"]],
    news: ["Nuove idee per portare più verdure nei piatti di tutti i giorni.", "Scambi di consigli su ingredienti e sostituzioni."]
  },
  {
    id: "stile-urbano",
    category: "moda",
    title: "Stile urbano",
    icon: "👟",
    tags: ["Streetwear", "Stile"],
    description: "Ispirazioni e idee per costruire un guardaroba urbano personale.",
    colors: ["#7d466f", "#343158"],
    links: [["Vogue Italia", "https://www.vogue.it/"]],
    news: ["Ispirazioni streetwear e abbinamenti della settimana.", "La community discute capi essenziali e brand emergenti."]
  },
  {
    id: "moda-sostenibile",
    category: "moda",
    title: "Moda sostenibile",
    icon: "♻️",
    tags: ["Sostenibilità", "Stile"],
    description: "Materiali, scelte consapevoli e idee per una moda più responsabile.",
    colors: ["#41765d", "#293851"],
    links: [["Fashion Revolution", "https://www.fashionrevolution.org/"]],
    news: ["Approfondimenti su materiali e filiere della moda.", "Consigli per prendersi cura dei capi e allungarne la vita."]
  },
  {
    id: "attualita",
    category: "politica",
    title: "Attualità italiana",
    icon: "🗞️",
    tags: ["Italia", "Attualità"],
    description: "Una sezione per seguire temi pubblici e confrontarsi con rispetto.",
    colors: ["#4c6597", "#252c4e"],
    links: [["ANSA", "https://www.ansa.it/"], ["Il Sole 24 Ore", "https://www.ilsole24ore.com/"]],
    news: ["Una rassegna dimostrativa dei temi di attualità.", "Consulta le fonti e verifica gli aggiornamenti direttamente sui siti ufficiali."]
  },
  {
    id: "istituzioni-europee",
    category: "politica",
    title: "Istituzioni europee",
    icon: "🇪🇺",
    tags: ["Europa", "Istituzioni"],
    description: "Notizie e risorse per orientarsi tra istituzioni e politiche europee.",
    colors: ["#4655a3", "#283553"],
    links: [["Unione europea", "https://european-union.europa.eu/"]],
    news: ["Risorse e aggiornamenti sulle istituzioni europee.", "Spazio di confronto informativo tra lettori."]
  },
  {
    id: "carriere-digitali",
    category: "lavoro",
    title: "Carriere digitali",
    icon: "💻",
    tags: ["Digitale", "Carriera"],
    description: "Competenze, percorsi professionali e risorse per il settore digitale.",
    colors: ["#27769b", "#253354"],
    links: [["LinkedIn", "https://www.linkedin.com/"], ["Indeed", "https://it.indeed.com/"]],
    news: ["Risorse dimostrative per orientarsi nel mercato digitale.", "Confronto tra percorsi, competenze e strumenti professionali."]
  },
  {
    id: "lavoro-italia",
    category: "lavoro",
    title: "Opportunità in Italia",
    icon: "📈",
    tags: ["Lavoro", "Italia"],
    description: "Consigli per ricerca, candidature e crescita professionale.",
    colors: ["#47715e", "#29394a"],
    links: [["Cliclavoro", "https://www.cliclavoro.gov.it/"]],
    news: ["Suggerimenti per preparare CV e colloqui.", "Condividi esperienze e risorse utili con la community."]
  }
];

const app = document.getElementById("app");
const nav = document.getElementById("main-nav");
const searchInput = document.getElementById("global-search");
const searchResults = document.getElementById("search-results");
const regionSelect = document.getElementById("region-select");

const categoryById = (id) => categories.find((category) => category.id === id);
const itemById = (id) => items.find((item) => item.id === id);

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  })[char]);
}

function getRoute() {
  const parts = decodeURIComponent(location.hash.replace(/^#\/?/, "")).split("/").filter(Boolean);
  return { type: parts[0] || "home", id: parts[1] || "" };
}

function renderNav() {
  const route = getRoute();
  nav.innerHTML = `
    <a class="nav-link ${route.type === "home" ? "active" : ""}" href="#/">🏠 Home</a>
    ${categories
      .map(
        (category) => `
          <a class="nav-link ${route.type === "category" && route.id === category.id ? "active" : ""}" href="#/category/${category.id}">
            ${category.icon} ${escapeHTML(category.name)}
          </a>
        `
      )
      .join("")}
  `;
}

function itemCard(item) {
  return `
    <a class="catalog-card" href="#/item/${item.id}" style="--cover-a:${item.colors[0]};--cover-b:${item.colors[1]};">
      <div class="cover"><span>${item.icon}</span></div>
      <div class="card-content">
        <h3>${escapeHTML(item.title)}</h3>
        <div class="tag-row">
          ${item.tags.map((tag) => `<span class="tag">${escapeHTML(tag)}</span>`).join("")}
        </div>
      </div>
    </a>
  `;
}

function renderHome() {
  app.innerHTML = `
    <section class="hero">
      <div>
        <span class="eyebrow"><span class="pulse-dot"></span> Un hub, infinite passioni</span>
        <h1>Il mondo che ti interessa,<br><span>tutto in un unico posto.</span></h1>
        <p>Esplora community, notizie e risorse su giochi, libri, motori, cucina, moda, attualità e lavoro.</p>
        <a class="button button-primary" href="#/category/giochi">Esplora il portale <span aria-hidden="true">→</span></a>
      </div>
      <div class="hero-visual" aria-hidden="true">🌍</div>
    </section>

    <section>
      <div class="section-heading">
        <div><h2>Esplora le categorie</h2><p>Trova la tua prossima passione.</p></div>
      </div>
      <div class="category-grid">
        ${categories
          .map(
            (category) => `
              <a class="category-card" href="#/category/${category.id}">
                <span class="category-icon">${category.icon}</span>
                <h3>${escapeHTML(category.name)}</h3>
                <p>${escapeHTML(category.description)}</p>
              </a>
            `
          )
          .join("")}
      </div>
    </section>

    <section>
      <div class="section-heading">
        <div><h2>In evidenza</h2><p>Una selezione di community da scoprire.</p></div>
        <a class="text-link" href="#/category/giochi">Vai ai giochi →</a>
      </div>
      <div class="catalog-grid">
        ${["elden-ring", "minecraft", "dune", "auto-elettriche"].map((id) => itemCard(itemById(id))).join("")}
      </div>
    </section>
  `;
}

function renderCategory(id) {
  const category = categoryById(id);
  if (!category) return renderNotFound();

  const categoryItems = items.filter((item) => item.category === id);

  app.innerHTML = `
    <div class="breadcrumbs"><a href="#/">Home</a> <span aria-hidden="true">/</span> ${escapeHTML(category.name)}</div>
    <section class="page-intro">
      <span class="eyebrow">${category.icon} Categoria</span>
      <h1>${escapeHTML(category.name)}</h1>
      <p>${escapeHTML(category.description)}. Scegli una sezione per vedere notizie, fonti e discussioni.</p>
    </section>
    <div class="catalog-grid">${categoryItems.map(itemCard).join("")}</div>
  `;
}

function renderDetail(id) {
  const item = itemById(id);
  if (!item) return renderNotFound();

  const category = categoryById(item.category);
  const region = regionSelect.value;
  const news = item.news
    .map(
      (headline, index) => `
        <div class="news-item">
          <span class="news-icon">${index === 0 ? "📡" : "✨"}</span>
          <div>
            <strong>${escapeHTML(headline)}</strong>
            <small>${escapeHTML(region)} · Aggiornamento dimostrativo</small>
          </div>
        </div>
      `
    )
    .join("");

  app.innerHTML = `
    <div class="breadcrumbs">
      <a href="#/">Home</a> <span aria-hidden="true">/</span>
      <a href="#/category/${category.id}">${escapeHTML(category.name)}</a> <span aria-hidden="true">/</span>
      ${escapeHTML(item.title)}
    </div>

    <section class="detail-hero" style="--cover-a:${item.colors[0]};--cover-b:${item.colors[1]};">
      <div class="detail-cover">${item.icon}</div>
      <div>
        <span class="eyebrow">${category.icon} ${escapeHTML(category.name)}</span>
        <h1>${escapeHTML(item.title)}</h1>
        <p>${escapeHTML(item.description)}</p>
        <div class="tag-row">${item.tags.map((tag) => `<span class="tag">${escapeHTML(tag)}</span>`).join("")}</div>
      </div>
    </section>

    <div class="detail-layout">
      <div>
        <section class="panel">
          <h2>📡 Notizie e aggiornamenti</h2>
          ${news}
        </section>

        <section class="panel">
          <h2>💬 Forum della community</h2>
          <div class="forum-tabs" role="tablist" aria-label="Sezioni forum">
            <button class="forum-tab active" type="button" data-forum-tab="community" role="tab" aria-selected="true">Community</button>
            <button class="forum-tab" type="button" data-forum-tab="info" role="tab" aria-selected="false">Info Generali</button>
          </div>
          <div id="post-list" class="post-list"></div>
          <form id="forum-form" class="forum-form">
            <input class="field" name="author" maxlength="30" placeholder="Il tuo nome (opzionale)" aria-label="Il tuo nome" />
            <textarea class="field" name="message" maxlength="500" required placeholder="Condividi un pensiero con la community..." aria-label="Testo del post"></textarea>
            <div class="form-row">
              <span class="form-hint">Massimo 500 caratteri. I post restano salvati in questo browser.</span>
              <button class="button button-primary" type="submit">Pubblica</button>
            </div>
          </form>
        </section>
      </div>

      <aside>
        <section class="panel">
          <h2>🔗 Collegamenti utili</h2>
          <div class="source-list">
            ${item.links
              .map(
                ([label, url]) => `
                  <a class="source-link" href="${escapeHTML(url)}" target="_blank" rel="noopener noreferrer">
                    <span>${escapeHTML(label)}</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                `
              )
              .join("")}
          </div>
        </section>

        <section class="panel">
          <h2>ℹ️ Informazioni</h2>
          <p style="margin:0;color:var(--muted);font-size:13px;">
            I contenuti di notizie sono simulati in questa versione iniziale.
            Selezione attuale: <strong>${escapeHTML(region)}</strong>.
          </p>
        </section>
      </aside>
    </div>
  `;

  setupForum(item.id);
}

function renderNotFound() {
  app.innerHTML = `
    <section class="panel" style="text-align:center;padding:50px 20px;">
      <div style="font-size:44px;">🧭</div>
      <h1>Contenuto non trovato</h1>
      <p style="color:var(--muted);">La pagina richiesta non è disponibile.</p>
      <a class="button button-primary" href="#/">Torna alla home</a>
    </section>
  `;
}

function render() {
  renderNav();
  const route = getRoute();

  if (route.type === "home") renderHome();
  else if (route.type === "category") renderCategory(route.id);
  else if (route.type === "item") renderDetail(route.id);
  else renderNotFound();

  searchResults.classList.remove("open");
  searchInput.setAttribute("aria-expanded", "false");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function storageKey(itemId) {
  return `globalpulse-forum-${itemId}`;
}

function getPosts(itemId) {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey(itemId)) || "[]");
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

function setupForum(itemId) {
  let activeTab = "community";
  const postList = document.getElementById("post-list");
  const form = document.getElementById("forum-form");
  const tabs = [...document.querySelectorAll("[data-forum-tab]")];

  function drawPosts() {
    const posts = getPosts(itemId).filter((post) => post.section === activeTab);
    postList.innerHTML = posts.length
      ? posts
          .map(
            (post) => `
              <article class="post">
                <div class="post-head">
                  <strong>${escapeHTML(post.author || "Utente")}</strong>
                  <small>${escapeHTML(post.date || "")}</small>
                </div>
                <p>${escapeHTML(post.message)}</p>
              </article>
            `
          )
          .join("")
      : `<div class="empty-state">Ancora nessun post in questa sezione. Inizia tu la conversazione!</div>`;
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      activeTab = tab.dataset.forumTab;
      tabs.forEach((button) => {
        const selected = button === tab;
        button.classList.toggle("active", selected);
        button.setAttribute("aria-selected", String(selected));
      });
      drawPosts();
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const message = String(formData.get("message") || "").trim();
    if (!message) return;

    const posts = getPosts(itemId);
    posts.unshift({
      author: String(formData.get("author") || "").trim().slice(0, 30) || "Utente",
      message: message.slice(0, 500),
      section: activeTab,
      date: new Intl.DateTimeFormat("it-IT", {
        dateStyle: "short",
        timeStyle: "short",
      }).format(new Date()),
    });

    try {
      localStorage.setItem(storageKey(itemId), JSON.stringify(posts));
      form.reset();
      drawPosts();
    } catch {
      alert("Non è stato possibile salvare il post nel browser.");
    }
  });

  drawPosts();
}

function findMatches(query) {
  const normalized = query.trim().toLocaleLowerCase("it");
  if (!normalized) return [];

  return items
    .filter((item) => {
      const category = categoryById(item.category);
      const searchable = [item.title, item.description, ...item.tags, category?.name].join(" ").toLocaleLowerCase("it");
      return searchable.includes(normalized);
    })
    .slice(0, 7);
}

function showSearchResults(query) {
  const matches = findMatches(query);
  if (!query.trim()) {
    searchResults.classList.remove("open");
    searchInput.setAttribute("aria-expanded", "false");
    return;
  }

  searchResults.innerHTML = matches.length
    ? matches
        .map((item) => {
          const category = categoryById(item.category);
          return `
            <a class="search-result" role="option" href="#/item/${item.id}">
              <span class="search-result-icon">${item.icon}</span>
              <span>
                <strong>${escapeHTML(item.title)}</strong>
                <small>${escapeHTML(category.name)} · ${item.tags.map(escapeHTML).join(", ")}</small>
              </span>
            </a>
          `;
        })
        .join("")
    : `<div class="empty-state">Nessun risultato. Prova con un’altra parola.</div>`;

  searchResults.classList.add("open");
  searchInput.setAttribute("aria-expanded", "true");
}

searchInput.addEventListener("input", (event) => showSearchResults(event.target.value));
searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    searchResults.classList.remove("open");
    searchInput.setAttribute("aria-expanded", "false");
  }

  if (event.key === "Enter") {
    const firstResult = searchResults.querySelector("a");
    if (firstResult) location.hash = firstResult.getAttribute("href");
  }
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".search-wrap")) {
    searchResults.classList.remove("open");
    searchInput.setAttribute("aria-expanded", "false");
  }
});

regionSelect.addEventListener("change", () => {
  const route = getRoute();
  if (route.type === "item") renderDetail(route.id);
});

window.addEventListener("hashchange", render);
document.getElementById("year").textContent = new Date().getFullYear();

render();

