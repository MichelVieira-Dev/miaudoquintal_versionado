/* ==========================================================
   MIAU DO QUINTAL - Alternância de Tema (Claro/Escuro)
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  // Recupera preferência do usuário
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    themeToggle.textContent = "☀️";
  }

  // Alternância de tema
  function toggleTheme() {
    const isDark = body.classList.toggle("dark-mode");
    themeToggle.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("theme", isDark ? "dark" : "light");
    themeToggle.blur();
  }

  themeToggle.addEventListener("click", toggleTheme);

  // Acessibilidade: permite ativar com Enter ou Espaço
  themeToggle.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleTheme();
    }
  });
});
