"use client";
import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Fuse from "fuse.js";
import PostCard from "./PostCard";
import type { PostMeta } from "@/types/post";

const MONTHS_PT = ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"];

export default function SearchBar({ posts, hideInput }: { posts: PostMeta[]; hideInput?: boolean }) {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") ?? "");

  useEffect(() => {
    setQuery(searchParams.get("q") ?? "");
  }, [searchParams]);

  const year = searchParams.get("year");
  const month = searchParams.get("month");

  const dateFiltered = useMemo(() => {
    if (!year && !month) return posts;
    return posts.filter((p) => {
      const [y, m] = p.date.split("-");
      return (!year || y === year) && (!month || m === month);
    });
  }, [posts, year, month]);

  const fuse = useMemo(
    () => new Fuse(dateFiltered, { keys: ["title", "excerpt", "tags", "category"], threshold: 0.35 }),
    [dateFiltered]
  );

  const results = query.trim() ? fuse.search(query).map((r) => r.item) : dateFiltered;

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

      {(year || month) && (
        <p style={{ fontSize: "0.72rem", opacity: 0.4, marginBottom: "1.5rem", letterSpacing: "0.06em" }}>
          {month ? MONTHS_PT[Number(month) - 1] : ""}{month && year ? " " : ""}{year ?? ""}
          {" · "}{results.length} post{results.length !== 1 ? "s" : ""}
        </p>
      )}

      {query.trim() && !(year || month) && (
        <p style={{ fontSize: "0.75rem", opacity: 0.4, marginBottom: "1.5rem", letterSpacing: "0.04em" }}>
          {results.length} resultado{results.length !== 1 ? "s" : ""} para &quot;{query}&quot;
        </p>
      )}

      {results.length > 0
        ? results.map((post) => <PostCard key={post.slug} post={post} />)
        : (query.trim() || year || month) && (
            <p style={{ opacity: 0.4, fontSize: "0.85rem" }}>Nenhum post encontrado.</p>
          )}
    </div>
  );
}
