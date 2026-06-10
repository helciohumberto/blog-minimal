"use client";
import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Fuse from "fuse.js";
import PostCard from "./PostCard";
import type { PostMeta } from "@/types/post";

export default function SearchBar({ posts, hideInput }: { posts: PostMeta[]; hideInput?: boolean }) {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") ?? "");

  useEffect(() => {
    setQuery(searchParams.get("q") ?? "");
  }, [searchParams]);

  const fuse = useMemo(
    () =>
      new Fuse(posts, {
        keys: ["title", "excerpt", "tags", "category"],
        threshold: 0.35,
      }),
    [posts]
  );

  const results = query.trim()
    ? fuse.search(query).map((r) => r.item)
    : posts;

  return (
    <div>
      {!hideInput && (
        <div style={{ marginBottom: "2rem", position: "relative" }}>
          <span
            style={{
              position: "absolute",
              left: "0.75rem",
              top: "50%",
              transform: "translateY(-50%)",
              opacity: 0.35,
              fontSize: "0.85rem",
              pointerEvents: "none",
            }}
          >
            /
          </span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="buscar posts..."
            aria-label="Buscar posts"
            style={{
              width: "100%",
              background: "var(--code-bg)",
              border: "1px solid var(--border)",
              color: "var(--fg)",
              fontFamily: "inherit",
              fontSize: "0.85rem",
              padding: "0.6rem 0.75rem 0.6rem 2rem",
              borderRadius: "4px",
              outline: "none",
              letterSpacing: "0.02em",
            }}
          />
        </div>
      )}

      {query.trim() && (
        <p style={{ fontSize: "0.75rem", opacity: 0.4, marginBottom: "1.5rem", letterSpacing: "0.04em" }}>
          {results.length} resultado{results.length !== 1 ? "s" : ""} para &quot;{query}&quot;
        </p>
      )}

      {results.length > 0
        ? results.map((post) => <PostCard key={post.slug} post={post} />)
        : query.trim() && (
            <p style={{ opacity: 0.4, fontSize: "0.85rem" }}>Nenhum post encontrado.</p>
          )}
    </div>
  );
}
