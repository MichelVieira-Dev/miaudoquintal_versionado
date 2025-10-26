import fs from "fs";
import path from "path";

const htmlFiles = ["index.html", "projetos.html", "cadastro.html"];

htmlFiles.forEach((file) => {
  let content = fs.readFileSync(file, "utf-8");

  // Atualiza CSS
  content = content.replace(/css\/style\.css/g, "css/style.min.css");

  // Atualiza JS
  content = content.replace(/js\/main\.js/g, "js/main.min.js");
  content = content.replace(
    /js\/formValidation\.js/g,
    "js/formValidation.min.js"
  );
  content = content.replace(/js\/masks\.js/g, "js/masks.min.js");

  // Salva na pasta dist
  fs.writeFileSync(path.join("dist", file), content, "utf-8");
});

console.log("HTML atualizado com caminhos minificados!");
