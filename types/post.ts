export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: "estudos" | "blockchain" | "tecnologia" | "criptomoedas";
  tags: string[];
  readingTime: number;
}

export interface Post extends PostMeta {
  content: string;
}
