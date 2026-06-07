import { Feed } from "feed";
import { getAllPosts } from "./posts";

const SITE_URL = "https://helciohumberto.github.io/blog-minimal";
const AUTHOR = { name: "Hélcio", email: "helciohumberto@gmail.com" };

export function generateRssFeed(): string {
  const posts = getAllPosts();

  const feed = new Feed({
    title: "Hélcio — Blog Minimalista",
    description: "Tecnologia, criptomoedas, blockchain e engenharia de software.",
    id: SITE_URL,
    link: SITE_URL,
    language: "pt-BR",
    favicon: `${SITE_URL}/favicon.ico`,
    copyright: `© ${new Date().getFullYear()} Hélcio`,
    author: AUTHOR,
  });

  posts.forEach((post) => {
    feed.addItem({
      title: post.title,
      id: `${SITE_URL}/posts/${post.slug}`,
      link: `${SITE_URL}/posts/${post.slug}`,
      description: post.excerpt,
      date: new Date(post.date),
      category: [{ name: post.category }],
    });
  });

  return feed.rss2();
}
