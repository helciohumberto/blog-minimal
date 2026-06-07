---
title: "Deployando Next.js no GitHub Pages em 2026"
date: "2026-05-28"
excerpt: "Como configurar um blog Next.js com export estático e deploy automático no GitHub Pages usando GitHub Actions."
category: tecnologia
tags: [next.js, github-pages, ci-cd, deploy]
---

## O setup

Next.js suporta exportação estática (`output: "export"`) desde a versão 13. Isso gera um diretório `out/` com HTML puro — perfeito para GitHub Pages.

## next.config.ts

```typescript
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};
```

`trailingSlash: true` garante compatibilidade com o roteamento do GitHub Pages.

## GitHub Actions

Crie `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: out/

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v4
        id: deployment
```

## Configurar o repositório

1. Settings → Pages → Source: **GitHub Actions**
2. Push para `main`
3. Aguardar o workflow concluir

## Armadilhas comuns

- **Route handlers** (`route.ts`) funcionam em SSG como arquivos estáticos — output normal.
- **API Routes dinâmicas** não funcionam. Tudo precisa ser gerado no build.
- **`generateStaticParams`** é obrigatório para rotas dinâmicas com `output: "export"`.

Deploy em ~2 minutos, zero custo, zero servidor.
