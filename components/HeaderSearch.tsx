"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function HeaderSearch() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const q = query.trim();
    router.push(q ? `/?q=${encodeURIComponent(q)}` : "/");
  }

  return (
    <form onSubmit={handleSubmit} style={{ position: "relative" }}>
      <span
        style={{
          position: "absolute",
          left: "0.5rem",
          top: "50%",
          transform: "translateY(-50%)",
          opacity: 0.35,
          fontSize: "0.75rem",
          pointerEvents: "none",
        }}
      >
        /
      </span>
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="buscar..."
        aria-label="Buscar posts"
        style={{
          background: "var(--code-bg)",
          border: "1px solid var(--border)",
          color: "var(--fg)",
          fontFamily: "inherit",
          fontSize: "0.72rem",
          padding: "0.35rem 0.5rem 0.35rem 1.4rem",
          borderRadius: "3px",
          outline: "none",
          width: "130px",
          letterSpacing: "0.02em",
        }}
      />
    </form>
  );
}
