/* ==========================================================
   MIAU DO QUINTAL - formValidation.js
   Validação e feedback de formulário de cadastro
   ========================================================== */

const aplicarListeners = () => {
  const form = document.querySelector("form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const campos = form.querySelectorAll("input, select");
    let valido = true;
    let mensagem = "";

    campos.forEach((campo) => {
      if (!campo.checkValidity()) {
        valido = false;
        mensagem = `Verifique o campo: ${
          campo.previousElementSibling?.textContent || campo.name
        }`;
      }
    });

    const toast = document.createElement("div");
    toast.classList.add("toast");

    if (valido) {
      toast.textContent =
        "🎉 Cadastro enviado com sucesso! Obrigado por se juntar ao Miau do Quintal!";
      toast.style.backgroundColor = "var(--cor-destaque)";
      form.reset();
    } else {
      toast.textContent = `⚠️ ${mensagem}`;
      toast.style.backgroundColor = "var(--cor-secundaria)";
    }

    document.body.appendChild(toast);
    toast.style.display = "block";

    setTimeout(() => {
      toast.style.display = "none";
      toast.remove();
    }, 4000);
  });
};

// Executa na primeira carga
document.addEventListener("DOMContentLoaded", aplicarListeners);

// Garante reexecução quando o DOM é alterado (SPA)
window.addEventListener("popstate", aplicarListeners);
document.addEventListener("click", (e) => {
  if (e.target.closest("nav a")) {
    setTimeout(aplicarListeners, 600); // espera o novo conteúdo carregar
  }
});
