import Link from "next/link";
import type { PostMeta } from "@/types/post";

const CATEGORY_SYMBOL: Record<string, string> = {
  estudos: "◈",
  blockchain: "⬡",
  tecnologia: "◉",
  criptomoedas: "◆",
};

export default function PostCard({ post }: { post: PostMeta }) {
  return (
    <article
      style={{
        borderBottom: "1px solid var(--border)",
        paddingBottom: "1.5rem",
        marginBottom: "1.5rem",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.6rem",
          marginBottom: "0.4rem",
          fontSize: "0.72rem",
          color: "var(--meta-color)",
          letterSpacing: "0.06em",
        }}
      >
        <span>{CATEGORY_SYMBOL[post.category] ?? "·"}</span>
        <span>{post.category}</span>
        <span>·</span>
        <time dateTime={post.date}>{post.date}</time>
        <span>·</span>
        <span>{post.readingTime} min</span>
      </div>

      <Link href={`/posts/${post.slug}`}>
        <h2
          className="post-title"
          style={{
            fontSize: "1rem",
            fontWeight: 700,
            letterSpacing: "-0.01em",
            marginBottom: "0.4rem",
          }}
        >
          {post.title}
        </h2>
      </Link>

      <p style={{ fontSize: "0.85rem", color: "var(--excerpt-color)", lineHeight: 1.6, marginBottom: "0.6rem" }}>
        {post.excerpt}
      </p>

      {post.tags.length > 0 && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
          {post.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: "0.68rem",
                background: "var(--tag-bg)",
                border: "1px solid var(--border)",
                padding: "1px 6px",
                borderRadius: "2px",
                color: "var(--tag-color)",
                letterSpacing: "0.04em",
              }}
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
