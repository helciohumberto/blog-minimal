import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "contato",
  description: "Entre em contato.",
};

export default function ContatoPage() {
  return (
    <div className="prose" style={{ maxWidth: "none" }}>
      <p style={{ fontSize: "0.72rem", opacity: 0.35, letterSpacing: "0.12em", marginBottom: "1.5rem" }}>
        CONTATO
      </p>

      <h1 style={{ marginTop: 0 }}>entrar em contato</h1>

      <p>
        A forma mais direta é por email:{" "}
        <a href="mailto:helciohumberto@gmail.com">helciohumberto@gmail.com</a>
      </p>

      <p>
        Também estou no GitHub:{" "}
        <a href="https://github.com/helciohumberto" target="_blank" rel="noopener noreferrer">
          github.com/helciohumberto
        </a>
      </p>

      <p style={{ opacity: 0.5, fontSize: "0.85rem", marginTop: "2rem" }}>
        Respondo com calma. Não faço spam.
      </p>
    </div>
  );
}
