import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "sobre",
  description: "Engenheiro de software e pequeno agropecuarista. Escrevo sobre tecnologia, mercados e criptomoedas.",
};

const STACK: { category: string; items: string[] }[] = [
  {
    category: "linguagens",
    items: ["TypeScript", "JavaScript", "Solidity", "Python", "Java"],
  },
  {
    category: "backend & runtime",
    items: ["Node.js", "Express", "Fastify", "NestJS", "REST", "GraphQL"],
  },
  {
    category: "web3 & blockchain",
    items: ["Ethers.js", "Viem", "Wagmi", "Hardhat", "Foundry", "OpenZeppelin", "IPFS", "The Graph"],
  },
  {
    category: "frontend",
    items: ["React", "Next.js"],
  },
  {
    category: "banco de dados",
    items: ["PostgreSQL", "MongoDB", "Redis"],
  },
  {
    category: "infra & tools",
    items: ["Docker", "Git", "GitHub Actions", "AWS", "Linux"],
  },
];

function Tag({ label }: { label: string }) {
  return (
    <span
      style={{
        fontSize: "0.78rem",
        background: "var(--tag-bg)",
        border: "1px solid var(--border)",
        padding: "3px 10px",
        borderRadius: "3px",
        color: "var(--tag-color)",
        letterSpacing: "0.02em",
      }}
    >
      {label}
    </span>
  );
}

export default function SobrePage() {
  return (
    <div className="prose" style={{ maxWidth: "none" }}>
      <p style={{ fontSize: "0.72rem", color: "var(--meta-color)", letterSpacing: "0.12em", marginBottom: "1.5rem" }}>
        SOBRE MIM
      </p>

      <h1 style={{ marginTop: 0 }}>Hélcio</h1>

      <p>
        Sou engenheiro de software e pequeno agropecuarista.
      </p>

      <p>
        Criar software e criar gado têm mais em comum do que parece. Os dois exigem constância, e
        ambos revelam cedo quem está só no entusiasmo.
      </p>

      <p>
        Trabalho com tecnologia, mercados e criptomoedas. O que me atrai é entender como os sistemas
        funcionam de verdade: quem carrega o incentivo, quem paga o custo, e por que a maioria faz
        a leitura errada.
      </p>

      <h2>Stack</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "1.5rem" }}>
        {STACK.map(({ category, items }) => (
          <div key={category}>
            <p style={{
              fontSize: "0.68rem",
              color: "var(--meta-color)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "0.4rem",
            }}>
              {category}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
              {items.map((item) => <Tag key={item} label={item} />)}
            </div>
          </div>
        ))}
      </div>

      <h2>Interesses</h2>
      <ul>
        <li>Criptomoedas, DeFi e mercados digitais</li>
        <li>Blockchain e contratos inteligentes (Solidity)</li>
        <li>Agronegócio e tecnologia no campo</li>
        <li>Engenharia de software e arquitetura de sistemas</li>
        <li>Escrita técnica e aprendizado em público</li>
      </ul>

      <h2>Onde me encontrar</h2>
      <ul>
        <li>
          Twitter / X:{" "}
          <a href="https://twitter.com/humdevberto" target="_blank" rel="noopener noreferrer">
            @humdevberto
          </a>
        </li>
        <li>
          GitHub:{" "}
          <a href="https://github.com/helciohumberto" target="_blank" rel="noopener noreferrer">
            github.com/helciohumberto
          </a>
        </li>
        <li>
          Email:{" "}
          <a href="mailto:helciohumberto@gmail.com">helciohumberto@gmail.com</a>
        </li>
      </ul>
    </div>
  );
}
