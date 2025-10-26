/* ==========================================================
   MIAU DO QUINTAL - MAIN.JS
   Controla navegação, SPA e menu responsivo
   ========================================================== */

// -------------------------
// MENU HAMBÚRGUER
// -------------------------
const menuToggle = document.createElement("span");
menuToggle.classList.add("menu-toggle");
menuToggle.textContent = "☰";

const nav = document.querySelector("nav");
if (nav && !document.querySelector(".menu-toggle")) {
  nav.insertBefore(menuToggle, nav.querySelector("ul"));
}

menuToggle?.addEventListener("click", () => {
  const menu = document.querySelector("nav ul");
  menu?.classList.toggle("active");
});

// -------------------------
// SPA SIMPLIFICADO (simulação)
// -------------------------
// Quando o usuário clica em links de navegação internos,
// o sistema carrega o conteúdo da página sem reload total.
const links = document.querySelectorAll("nav a");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    const url = link.getAttribute("href");

    if (url && !url.includes("#") && url.endsWith(".html")) {
      e.preventDefault();
      fetch(url)
        .then((response) => response.text())
        .then(async (html) => {
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, "text/html");
          const newContent = doc.querySelector("main");
          const main = document.querySelector("main");

          if (main && newContent) {
            main.innerHTML = newContent.innerHTML;
            window.history.pushState({}, "", url);
            document.title = doc.title;
          }
        })
        .catch((err) => console.error("Erro ao carregar página:", err));
    }
  });
});
