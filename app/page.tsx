import { Suspense } from "react";
import { getAllPosts } from "@/lib/posts";
import SearchBar from "@/components/SearchBar";

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <>
      <div style={{ marginBottom: "2.5rem" }}>
        <p style={{ fontSize: "0.72rem", opacity: 0.8, letterSpacing: "0.12em", marginBottom: "0.5rem" }}>
          TRANSMISSÃO EM ANDAMENTO
        </p>
        <h1 style={{ fontSize: "1.4rem", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: "0.6rem" }}>
          arquivo de sinais
        </h1>
        <p style={{ fontSize: "0.85rem", opacity: 0.55, lineHeight: 1.6 }}>
          Notas sobre tecnologia, criptomoedas, blockchain e engenharia de software.
        </p>
      </div>

      <Suspense>
        <SearchBar posts={posts} hideInput />
      </Suspense>
    </>
  );
}
