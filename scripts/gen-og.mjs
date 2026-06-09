import sharp from 'sharp';
import { writeFileSync } from 'fs';

const posts = [
  {
    slug: 'bitcoin-derretimento-2026',
    title: ['O derretimento do Bitcoin:', 'o que aconteceu e', 'o que aprender'],
    category: 'CRIPTOMOEDAS',
  },
  {
    slug: 'ethereum-2026',
    title: ['Ethereum em 2026:', 'além do hype,', 'o que ficou de pé'],
    category: 'CRIPTOMOEDAS',
  },
  {
    slug: 'btc-60k-o-que-esta-acontecendo',
    title: ['BTC a $60k:', 'o que está acontecendo', 'e o que fazer agora'],
    category: 'CRIPTOMOEDAS',
  },
  {
    slug: 'autocustodia-bitcoin-guia',
    title: ['Not your keys,', 'not your coins:', 'guia de autocustódia'],
    category: 'CRIPTOMOEDAS',
  },
  {
    slug: 'defi-o-que-e-como-funciona',
    title: ['DeFi: o sistema', 'financeiro sem', 'ninguém no meio'],
    category: 'BLOCKCHAIN',
  },
  {
    slug: 'trade-perfeito-analise-tecnica-ia',
    title: ['O trade perfeito:', 'análise técnica', '+ IA'],
    category: 'CRIPTOMOEDAS',
  },
];

const url = 'helciohumberto.github.io/blog-minimal';

for (const post of posts) {
  const titleLines = post.title
    .map((line, i) => `<text x="80" y="${270 + i * 85}" fill="#ffffff" font-family="'Courier New', Courier, monospace" font-size="62" font-weight="bold">${line}</text>`)
    .join('\n  ');

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="#0a0a0a"/>
  <text x="80" y="195" fill="#3d8fa3" font-family="'Courier New', Courier, monospace" font-size="16" letter-spacing="3">+ HELCIO.DEV · ${post.category}</text>
  ${titleLines}
  <text x="80" y="${270 + post.title.length * 85 + 30}" fill="#3d8fa3" font-family="'Courier New', Courier, monospace" font-size="18">${url}</text>
  <text x="1120" y="600" fill="#2e2e2e" font-family="'Courier New', Courier, monospace" font-size="16" text-anchor="end">~/blog</text>
</svg>`;

  const outPath = `public/og/${post.slug}.png`;
  await sharp(Buffer.from(svg)).png().toFile(outPath);
  console.log(`generated: ${outPath}`);
}
