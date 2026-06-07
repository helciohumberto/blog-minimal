import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const VALID_CATEGORIES = ["estudos", "blockchain", "tecnologia", "criptomoedas"] as const;
type Category = (typeof VALID_CATEGORIES)[number];

type Props = { params: Promise<{ categoria: string }> };

export function generateStaticParams() {
  return VALID_CATEGORIES.map((categoria) => ({ categoria }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categoria } = await params;
  return { title: `${categoria} · categorias` };
}

export default async function CategoriaPage({ params }: Props) {
  const { categoria } = await params;
  if (!VALID_CATEGORIES.includes(categoria as Category)) notFound();

  const posts = getAllPosts().filter((p) => p.category === categoria);

  return (
    <>
      <div style={{ marginBottom: "2.5rem" }}>
        <p style={{ fontSize: "0.72rem", opacity: 0.35, letterSpacing: "0.12em", marginBottom: "0.4rem" }}>
          CATEGORIA
        </p>
        <h1 style={{ fontSize: "1.4rem", fontWeight: 700, letterSpacing: "-0.02em" }}>
          {categoria}
        </h1>
        <p style={{ fontSize: "0.8rem", opacity: 0.4, marginTop: "0.4rem" }}>
          {posts.length} post{posts.length !== 1 ? "s" : ""}
        </p>
      </div>

      {posts.length > 0
        ? posts.map((post) => <PostCard key={post.slug} post={post} />)
        : <p style={{ opacity: 0.4, fontSize: "0.85rem" }}>Nenhum post nesta categoria ainda.</p>}
    </>
  );
}
