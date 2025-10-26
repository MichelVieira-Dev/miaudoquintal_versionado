/* ==========================================================
   MIAU DO QUINTAL - masks.js
   Aplica máscaras em CPF, Telefone e CEP
   ========================================================== */

// Função que aplica máscaras
function aplicarMascaras() {
  const cpf = document.querySelector("#cpf");
  const tel = document.querySelector("#telefone");
  const cep = document.querySelector("#cep");

  if (cpf) {
    cpf.addEventListener("input", () => {
      let valor = cpf.value.replace(/\D/g, "");
      valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
      valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
      valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
      cpf.value = valor;
    });
  }

  if (tel) {
    tel.addEventListener("input", () => {
      let valor = tel.value.replace(/\D/g, "");
      valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");
      valor = valor.replace(/(\d{5})(\d{4})$/, "$1-$2");
      tel.value = valor;
    });
  }

  if (cep) {
    cep.addEventListener("input", () => {
      let valor = cep.value.replace(/\D/g, "");
      valor = valor.replace(/(\d{5})(\d{3})$/, "$1-$2");
      cep.value = valor;
    });
  }
}

// Executa na primeira carga
document.addEventListener("DOMContentLoaded", aplicarMascaras);

// Garante reexecução quando o DOM é alterado (SPA)
window.addEventListener("popstate", aplicarMascaras);
document.addEventListener("click", (e) => {
  if (e.target.closest("nav a")) {
    setTimeout(aplicarMascaras, 600); // espera o novo conteúdo carregar
  }
});
