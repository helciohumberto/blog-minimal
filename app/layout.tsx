import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConstellationBg from "@/components/ConstellationBg";

const SITE_URL = "https://helciohumberto.github.io/blog-minimal";

export const metadata: Metadata = {
  title: {
    default: "helciohumberto.dev — Blog",
    template: "%s · helciohumberto.dev",
  },
  description:
    "Blog minimalista sobre tecnologia, blockchain e engenharia de software por Hélcio.",
  openGraph: {
    siteName: "helciohumberto.dev",
    type: "website",
    locale: "pt_BR",
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: [`${SITE_URL}/og-image.png`],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  alternates: {
    types: {
      "application/rss+xml": "/rss.xml",
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <ConstellationBg />
        <Header />
        <main
          style={{
            flex: 1,
            position: "relative",
            zIndex: 10,
            maxWidth: "720px",
            width: "100%",
            margin: "0 auto",
            padding: "2.5rem 1.5rem",
          }}
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
