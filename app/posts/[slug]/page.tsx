import { getAllPostSlugs, getPost } from "@/lib/posts";
import ShareButtons from "@/components/ShareButtons";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

const SITE_URL = "https://helciohumberto.github.io/blog-minimal";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = await getPost(slug);
    const ogImage = `${SITE_URL}/og/${slug}.png`;
    return {
      title: post.title,
      description: post.excerpt,
      openGraph: {
        title: post.title,
        description: post.excerpt,
        type: "article",
        publishedTime: post.date,
        images: [{ url: ogImage, width: 1200, height: 630 }],
      },
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description: post.excerpt,
        images: [ogImage],
      },
    };
  } catch {
    return { title: "Post não encontrado" };
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  let post;
  try {
    post = await getPost(slug);
  } catch {
    notFound();
  }

  return (
    <article>
      <div style={{ marginBottom: "2rem" }}>
        <div
          style={{
            fontSize: "0.72rem",
            color: "var(--meta-color)",
            letterSpacing: "0.08em",
            marginBottom: "0.8rem",
            display: "flex",
            gap: "0.6rem",
            flexWrap: "wrap",
          }}
        >
          <Link href="/" style={{ color: "var(--meta-color)" }}>
            ~/home
          </Link>
          <span>/</span>
          <Link href={`/categorias/${post.category}`} style={{ color: "var(--meta-color)" }}>
            {post.category}
          </Link>
        </div>

        <h1
          style={{
            fontSize: "1.5rem",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            lineHeight: 1.3,
            marginBottom: "0.75rem",
          }}
        >
          {post.title}
        </h1>

        <div
          style={{
            fontSize: "0.72rem",
            color: "var(--meta-color)",
            letterSpacing: "0.06em",
            display: "flex",
            gap: "0.8rem",
            flexWrap: "wrap",
          }}
        >
          <time dateTime={post.date}>{post.date}</time>
          <span>·</span>
          <span>{post.readingTime} min de leitura</span>
          {post.tags.length > 0 && (
            <>
              <span>·</span>
              <span>{post.tags.map((t) => `#${t}`).join(" ")}</span>
            </>
          )}
        </div>
      </div>

      <hr style={{ border: "none", borderTop: "1px solid var(--border)", marginBottom: "2rem" }} />

      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <hr style={{ border: "none", borderTop: "1px solid var(--border)", margin: "2.5rem 0 1.5rem" }} />

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
        <p style={{ fontSize: "0.72rem", opacity: 0.4, letterSpacing: "0.06em" }}>
          compartilhar
        </p>
        <ShareButtons slug={post.slug} title={post.title} />
      </div>
    </article>
  );
}
