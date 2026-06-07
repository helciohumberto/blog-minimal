import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "projetos",
  description: "Projetos de software e experimentos.",
};

const projects = [
  {
    name: "blog-minimal",
    description: "Este blog. Next.js + SSG, hospedado no GitHub Pages.",
    url: "https://github.com/helciohumberto/blog-minimal",
    tags: ["next.js", "typescript", "markdown"],
  },
  {
    name: "meu-financeiro",
    description: "Este é um projeto de finanças pessoais. React + Node.js + MongoDB.",
    url: "https://github.com/helciohumberto/meu-financeiro",
    tags: ["react", "node.js", "mongoDB"],
  }
];

export default function ProjetosPage() {
  return (
    <>
      <div style={{ marginBottom: "2.5rem" }}>
        <p style={{ fontSize: "0.72rem", opacity: 0.35, letterSpacing: "0.12em", marginBottom: "0.4rem" }}>
          PROJETOS
        </p>
        <h1 style={{ fontSize: "1.4rem", fontWeight: 700, letterSpacing: "-0.02em" }}>
          trabalhos & experimentos
        </h1>
      </div>

      <div>
        {projects.map((p) => (
          <div
            key={p.name}
            style={{
              borderBottom: "1px solid var(--border)",
              paddingBottom: "1.5rem",
              marginBottom: "1.5rem",
            }}
          >
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "0.95rem", fontWeight: 700, letterSpacing: "-0.01em" }}
            >
              {p.name} ↗
            </a>
            <p style={{ fontSize: "0.85rem", opacity: 0.6, marginTop: "0.4rem", lineHeight: 1.6 }}>
              {p.description}
            </p>
            <div style={{ display: "flex", gap: "0.4rem", marginTop: "0.6rem", flexWrap: "wrap" }}>
              {p.tags.map((t) => (
                <span
                  key={t}
                  style={{
                    fontSize: "0.68rem",
                    background: "var(--tag-bg)",
                    border: "1px solid var(--border)",
                    padding: "1px 6px",
                    borderRadius: "2px",
                    opacity: 0.7,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
