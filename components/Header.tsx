import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import HeaderSearch from "./HeaderSearch";
import type { PostMeta } from "@/types/post";

const NAV = [
  { href: "/", label: "~/home" },
  { href: "/sobre", label: "~/sobre" },
  { href: "/projetos", label: "~/projetos" },
  { href: "/contato", label: "~/contato" },
];

export default function Header({ posts }: { posts: PostMeta[] }) {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        borderBottom: "1px solid var(--border)",
        padding: "1rem 0",
        background: "var(--bg)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
    >
      <div
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding: "0 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "0.75rem",
        }}
      >
        <Link
          href="/"
          style={{
            fontSize: "0.9rem",
            fontWeight: 700,
            letterSpacing: "0.08em",
            opacity: 0.9,
          }}
        >
          ✦ helciohumberto.dev
        </Link>

        <nav style={{ display: "flex", alignItems: "center", gap: "1.2rem", flexWrap: "wrap" }}>
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="nav-link"
              style={{
                fontSize: "0.75rem",
                letterSpacing: "0.04em",
              }}
            >
              {n.label}
            </Link>
          ))}
          <HeaderSearch posts={posts} />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
