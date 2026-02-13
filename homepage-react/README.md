````markdown
# 🎨 Luiz Ramos | Designer – Landing Page

Landing page institucional desenvolvida em **React + Vite + Tailwind CSS** para apresentar o trabalho do designer **Luiz Ramos**, com foco em conversão, portfólio e contato.

O objetivo é reproduzir com fidelidade o layout criado no Figma, mantendo tipografia, cores, espaçamentos e micro-interações (hover, glow, pills, etc.).

---

## 🧩 Tecnologias utilizadas

- [React](https://react.dev/) – biblioteca para construção da interface
- [Vite](https://vitejs.dev/) – bundler e dev server rápido
- [TypeScript ou JavaScript](https://www.typescriptlang.org/) – de acordo com o template criado
- [Tailwind CSS](https://tailwindcss.com/) – estilização utilitária
- [PostCSS](https://postcss.org/) – processamento do CSS
- Google Fonts – família `Poppins` para a tipografia

---

## 🚀 Como rodar o projeto localmente

### 📌 Pré-requisitos

- Node.js (versão 18+ recomendada)
- npm ou yarn instalado
- Git (opcional, mas recomendado)

---

### 📥 Clonar o repositório

```bash
git clone https://github.com/seu-usuario/luiz-ramos-landing.git
cd luiz-ramos-landing
````

---

### 📦 Instalar dependências

```bash
npm install
# ou
yarn
```

---

### ▶️ Rodar em modo desenvolvimento

```bash
npm run dev
# ou
yarn dev
```

O Vite vai subir em algo como:

```
http://localhost:5173/
```

Abra esse endereço no navegador.

---

### 🏗 Build para produção

```bash
npm run build
# ou
yarn build
```

Os arquivos otimizados ficam na pasta:

```
dist/
```

---

### 👀 Pré-visualizar o build

```bash
npm run preview
# ou
yarn preview
```

---

## 🧱 Estrutura do projeto

Estrutura simplificada das pastas principais:

```bash
src/
  assets/
    fotopage.png        # avatar da navbar
    luiz-imagem.png     # foto principal do hero
  components/
    Header.tsx          # navbar com avatar, links e toggle de tema
    Hero.tsx            # seção principal com headline, CTA e foto
  App.tsx               # composição das seções
  main.tsx              # ponto de entrada do React
  index.css             # estilos globais + Tailwind + fonte Poppins

tailwind.config.cjs     # configuração de cores customizadas
vite.config.ts          # configuração do Vite
index.html              # HTML base
```

---

## 🎨 UI / Design

A landing page reproduz o layout do Figma com:

### 🧊 Navbar “glassmorphism”

* Faixa escura arredondada (`border-radius: 9999px`)
* Avatar com borda azul
* Links: **Início | Serviços | Portfólio | Contato**
* Sublinhado na página ativa
* Toggle de tema (visual)

---

### 🚀 Hero principal

**Tag:** “Conexão e valor” com linha e glow radial

**Headline:**

> “A sua marca merece mais que um design bonito.”
> “Merece resultados.” (em azul)

* Texto de apoio com foco em identidade visual, sites e landing pages
* CTA primário **“Ver meus projetos”** com botão degradê e glow forte
* CTA secundário **“Contato”** com borda azul

---

### 📸 Foto + Shape + Pills

* Foto recortada do Luiz com notebook
* Shape azul orgânico ao fundo
* Grupo de pills:

  * Branding
  * Performance
  * Conversão (destacada em azul com glow)
  * Impacto

---

## 🎨 Paleta de cores

| Elemento             | Cor                   |
| -------------------- | --------------------- |
| Azul principal       | `#3179FF`             |
| Texto principal (h1) | `#CCCCCC`             |
| Texto secundário (p) | `#999999`             |
| Fundo dark           | `#151515` – `#101010` |

---

## ⚙️ Detalhes de implementação

### 🎯 Tailwind CSS

Cores customizadas adicionadas no `tailwind.config.cjs`:

```js
extend: {
  colors: {
    azul: "#3179FF",
    preto: "#151515",
    footer: "#101010",
    h1: "#CCCCCC",
    ptext: "#999999",
  },
},
```

Permite usar classes como:

* `text-azul`, `bg-azul`
* `text-h1`, `text-ptext`
* `bg-preto`, `bg-footer`

---

### 🔤 Fonte Poppins

Importada em `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
}
```

> ⚠️ Atenção: o `@import` da fonte deve vir antes de qualquer seletor normal (`* { ... }`) para evitar erros do PostCSS.

---

## 🧪 Boas práticas e próximos passos

Sugestões de evolução:

* [ ] Implementar alternância real de tema claro/escuro usando estado global ou Context API
* [ ] Tornar os links da navbar âncoras com scroll suave
* [ ] Adicionar seções “Serviços”, “Portfólio” e “Contato”
* [ ] Configurar deploy automático (Vercel, Netlify ou GitHub Pages)
* [ ] Adicionar testes com React Testing Library (opcional)

---

## 👨‍💻 Autor

**Luiz Ramos – Designer**
Interface baseada no layout criado no Figma.

Implementação front-end por **Ernandes Costa (Engenharia de Software)**.

---

## 📄 Licença

Projeto para fins de estudo e portfólio.

Adapte esta seção caso deseje utilizar uma licença específica (MIT, Apache 2.0, etc.).

```
```
