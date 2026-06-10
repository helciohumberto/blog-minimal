"use client";
import { useState, useMemo, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import type { PostMeta } from "@/types/post";

const MONTHS_PT = ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"];

export default function HeaderSearch({ posts }: { posts: PostMeta[] }) {
  const [query, setQuery] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const [panelQuery, setPanelQuery] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setPanelOpen(false);
  }, [pathname]);

  function handleDesktopSubmit(e: React.FormEvent) {
    e.preventDefault();
    const q = query.trim();
    router.push(q ? `/?q=${encodeURIComponent(q)}` : "/");
    setQuery("");
  }

  function handlePanelSearch(e: React.FormEvent) {
    e.preventDefault();
    const q = panelQuery.trim();
    router.push(q ? `/?q=${encodeURIComponent(q)}` : "/");
    setPanelOpen(false);
  }

  function handleMonthClick(year: string, month: string) {
    router.push(`/?year=${year}&month=${month}`);
    setPanelOpen(false);
  }

  const grouped = useMemo(() => {
    const g: Record<string, Record<string, number>> = {};
    for (const post of posts) {
      const [year, month] = post.date.split("-");
      if (!g[year]) g[year] = {};
      g[year][month] = (g[year][month] ?? 0) + 1;
    }
    return g;
  }, [posts]);

  const years = useMemo(() => Object.keys(grouped).sort((a, b) => Number(b) - Number(a)), [grouped]);

  return (
    <>
      {/* Desktop: small inline input */}
      <form onSubmit={handleDesktopSubmit} className="desktop-search" style={{ position: "relative" }}>
        <span style={{ position: "absolute", left: "0.5rem", top: "50%", transform: "translateY(-50%)", opacity: 0.35, fontSize: "0.75rem", pointerEvents: "none" }}>
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

      {/* Mobile: toggle button */}
      <button
        className="mobile-search-btn"
        onClick={() => setPanelOpen((v) => !v)}
        style={{
          background: "none",
          border: "1px solid var(--border)",
          color: "var(--fg)",
          fontFamily: "inherit",
          fontSize: "0.72rem",
          padding: "0.3rem 0.7rem",
          borderRadius: "3px",
          cursor: "pointer",
          letterSpacing: "0.04em",
        }}
      >
        {panelOpen ? "✕ fechar" : "buscar"}
      </button>

      {/* Mobile panel */}
      {panelOpen && (
        <div
          className="mobile-panel"
          style={{
            position: "fixed",
            top: "53px",
            left: 0,
            right: 0,
            bottom: 0,
            background: "var(--bg)",
            zIndex: 40,
            overflowY: "auto",
            padding: "1.2rem 1.5rem",
            borderTop: "1px solid var(--border)",
          }}
        >
          {/* Search input */}
          <form onSubmit={handlePanelSearch} style={{ position: "relative", marginBottom: "1.5rem" }}>
            <span style={{ position: "absolute", left: "0.75rem", top: "50%", transform: "translateY(-50%)", opacity: 0.35, fontSize: "0.85rem", pointerEvents: "none" }}>
              /
            </span>
            <input
              autoFocus
              type="search"
              value={panelQuery}
              onChange={(e) => setPanelQuery(e.target.value)}
              placeholder="buscar posts..."
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
          </form>

          {/* Archive */}
          <div>
            <div style={{ fontSize: "0.65rem", letterSpacing: "0.12em", opacity: 0.35, marginBottom: "0.75rem" }}>
              ARQUIVO
            </div>
            {years.map((year) => (
              <div key={year} style={{ marginBottom: "0.75rem" }}>
                <div style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.06em", opacity: 0.6, marginBottom: "0.35rem" }}>
                  {year}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  {Object.entries(grouped[year])
                    .sort(([a], [b]) => Number(b) - Number(a))
                    .map(([month, count]) => (
                      <button
                        key={month}
                        onClick={() => handleMonthClick(year, month)}
                        style={{
                          background: "none",
                          border: "1px solid var(--border)",
                          color: "var(--fg)",
                          fontFamily: "inherit",
                          fontSize: "0.7rem",
                          padding: "2px 8px",
                          borderRadius: "3px",
                          cursor: "pointer",
                          letterSpacing: "0.03em",
                        }}
                      >
                        {MONTHS_PT[Number(month) - 1]} <span style={{ opacity: 0.4 }}>{count}</span>
                      </button>
                    ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      )}
    </>
  );
}
