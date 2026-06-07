"use client";

const SITE_URL = "https://helciohumberto.github.io/blog-minimal";

export default function ShareButtons({ slug, title }: { slug: string; title: string }) {
  const url = `${SITE_URL}/posts/${slug}`;
  const encoded = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const links = [
    {
      label: "Twitter",
      href: `https://twitter.com/intent/tweet?url=${encoded}&text=${encodedTitle}`,
    },
    {
      label: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encoded}`,
    },
    {
      label: "WhatsApp",
      href: `https://wa.me/?text=${encodedTitle}%20${encoded}`,
    },
  ];

  return (
    <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap" }}>
      {links.map((l) => (
        <a
          key={l.label}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          className="share-link"
        >
          ↗ {l.label}
        </a>
      ))}
    </div>
  );
}
