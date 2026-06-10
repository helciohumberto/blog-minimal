import Link from "next/link";
import type { PostMeta } from "@/types/post";

const MONTHS_PT = ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"];

export default function Sidebar({ posts }: { posts: PostMeta[] }) {
  const grouped: Record<string, Record<string, number>> = {};
  for (const post of posts) {
    const [year, month] = post.date.split("-");
    if (!grouped[year]) grouped[year] = {};
    grouped[year][month] = (grouped[year][month] ?? 0) + 1;
  }
  const years = Object.keys(grouped).sort((a, b) => Number(b) - Number(a));

  return (
    <aside className="sidebar">
      <div style={{ fontSize: "0.65rem", letterSpacing: "0.12em", opacity: 0.35, marginBottom: "1rem" }}>
        ARQUIVO
      </div>
      {years.map((year) => (
        <div key={year} style={{ marginBottom: "1.2rem" }}>
          <div style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.06em", opacity: 0.6, marginBottom: "0.4rem" }}>
            {year}
          </div>
          {Object.entries(grouped[year])
            .sort(([a], [b]) => Number(b) - Number(a))
            .map(([month, count]) => (
              <Link
                key={month}
                href={`/?year=${year}&month=${month}`}
                className="nav-link"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "0.72rem",
                  padding: "3px 0",
                  letterSpacing: "0.03em",
                }}
              >
                <span>{MONTHS_PT[Number(month) - 1]}</span>
                <span style={{ opacity: 0.35 }}>{count}</span>
              </Link>
            ))}
        </div>
      ))}
    </aside>
  );
}
