# 🐾 Miau do Quintal

**Miau do Quintal** é um projeto web voltado à divulgação e apoio a causas animais, desenvolvido como parte das atividades acadêmicas da disciplina de **Desenvolvimento Web**.  
O projeto evoluiu em quatro etapas, cada uma consolidando boas práticas de estrutura, estilo, interação e versionamento profissional.

---

## 🚀 Atividade Desenvolvida

### Atividade 4 – Versionamento, Acessibilidade e Otimização

- **GitFlow** aplicado com branches:
  - `main`, `develop`, `feature/*`, `chore/*`, `release/*`
- Commits e PRs com **padrões semânticos**;
- Acessibilidade: suporte a **navegação por teclado**, contraste mínimo e **modo escuro**;
- **Otimização para produção** com minificação e compressão.

---

## ⚙️ Scripts de Build e Otimização

Scripts configurados no `package.json` para automatizar o build de produção:

| Script        | Descrição                                                                                     |
| ------------- | --------------------------------------------------------------------------------------------- |
| `prebuild`    | Cria as pastas `dist/css`, `dist/js` e `dist/assets/images`                                   |
| `minify:css`  | Minifica o CSS principal e exporta para `dist/css/style.min.css`                              |
| `minify:js`   | Minifica os arquivos `main.js`, `formValidation.js` e `masks.js`                              |
| `update:html` | Atualiza referências de CSS/JS nos arquivos HTML para apontar para versões minificadas        |
| `minify:html` | Minifica todos os arquivos HTML, removendo comentários e espaços desnecessários               |
| `imagemin`    | Otimiza as imagens PNG do projeto usando `imagemin-pngquant`                                  |
| `build`       | Executa todos os scripts anteriores em sequência, gerando a versão final otimizada em `/dist` |

---

## 🧠 Boas Práticas e Ferramentas Utilizadas

- **HTML5 Semântico**
- **CSS3 Modular e Responsivo**
- **JavaScript Moderno (ES6+)**
- **Controle de versão com Git e GitHub**
- **Automação de build com Node.js e NPM**
- **Acessibilidade conforme WCAG 2.1**
- **Otimização para produção (minificação e compressão)**

---

## 🧩 Estrutura da Versão de Produção (`/dist`)

```
📦 dist
├── 📂 css
│   └── style.min.css
├── 📂 js
│   ├── main.min.js
│   ├── formValidation.min.js
│   ├── masks.min.js
│   └── themeToggle.min.js
├── 📂 assets
│   └── 📂 images
│       └── (imagens otimizadas)
├── index.html
├── projetos.html
└── cadastro.html
```

---

## 🌈 Acessibilidade

- Navegação completa via teclado;
- Labels e descrições compatíveis com leitores de tela;
- Contraste mínimo de 4.5:1;
- Alternância entre modo claro e modo escuro;
- Estrutura semântica para navegação assistiva.

---

## 🧾 Versionamento GitFlow

| Tipo de Branch | Finalidade                                     |
| -------------- | ---------------------------------------------- |
| `main`         | Versão de produção                             |
| `develop`      | Integração de novas features                   |
| `feature/*`    | Desenvolvimento de funcionalidades específicas |
| `chore/*`      | Ajustes e tarefas técnicas (ex: otimização)    |
| `release/*`    | Preparação de versões para produção            |

---

## 🧱 Tecnologias

- HTML5, CSS3, JavaScript (ES6+)
- Node.js 22+
- NPM Scripts
- Git / GitHub
- WCAG 2.1 AA
- Ferramentas:  
  `clean-css-cli`, `terser`, `html-minifier`, `mkdirp`, `imagemin`, `imagemin-pngquant`

---

## 💡 Como Executar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/MichelVieira-Dev/miaudoquintal_versionado.git
   ```
2. Acesse o diretório:
   ```bash
   cd miaudoquintal_versionado
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Gere a versão de produção:
   ```bash
   npm run build
   ```
5. Acesse os arquivos minificados na pasta `dist`.

---

## 📬 Contato

💬 Instagram: [@miaudoquintal](https://www.instagram.com/miaudoquintal/)

---

## 🧾 Licença

Este projeto foi desenvolvido para fins educacionais e está sob a licença **MIT**.
