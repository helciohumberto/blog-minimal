# helciohumberto.dev — Blog

Blog minimalista sobre tecnologia, blockchain e engenharia de software.

**Live:** [helciohumberto.github.io/blog-minimal](https://helciohumberto.github.io/blog-minimal)

---

## Stack

- **Next.js 16** — App Router, static export (`output: "export"`)
- **Tailwind CSS v4**
- **TypeScript**
- **gray-matter** — frontmatter dos posts
- **remark + rehype** — Markdown → HTML com syntax highlighting
- **Fuse.js** — busca client-side
- **feed** — geração de RSS

Deploy automático via GitHub Actions → GitHub Pages.

## Desenvolvimento

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # gera /out para produção
npm run lint
```

## Novo post

Crie um arquivo em `posts/` com o frontmatter:

```markdown
---
title: "Título do post"
date: "2026-01-01"
excerpt: "Descrição curta para SEO e listagem."
category: tecnologia
tags: [tag1, tag2]
---

Conteúdo em Markdown...
```

Categorias disponíveis: `tecnologia` · `blockchain` · `criptomoedas` · `estudos`

### Imagem OG

Adicione o post em `scripts/gen-og.mjs` e rode:

```bash
node scripts/gen-og.mjs
```

O arquivo gerado vai para `public/og/<slug>.png`.
