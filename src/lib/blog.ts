import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const BLOG_DIR = path.join(process.cwd(), 'src/content/blog');

export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  readingTime: string;
  /** Titre court pour Google (balise <title>) ; le H1 garde `title`. */
  seoTitle: string;
  /** Prestation liée (slug de services.ts), pour le CTA de fin d'article. */
  service: string;
  /** Articles recommandés, par slug, dans l'ordre d'affichage. */
  related: string[];
  /** Date de dernière révision réelle du contenu (ISO), sinon `date`. */
  updated: string;
}

export interface BlogPost extends BlogPostMeta {
  content: string;
}

function readPostFile(slug: string): { data: Record<string, string>; content: string } {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, 'utf-8');
  return matter(raw);
}

function extraFields(slug: string, data: Record<string, string>) {
  return {
    seoTitle: data['seoTitle'] ?? data['title'] ?? slug,
    service: data['service'] ?? '',
    related: (data['related'] ?? '')
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean),
    updated: data['updated'] ?? data['date'] ?? '',
  };
}

export function getAllPostSlugs(): string[] {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''));
}

export function getAllPosts(): BlogPostMeta[] {
  return getAllPostSlugs()
    .map((slug) => {
      const { data } = readPostFile(slug);
      return {
        slug,
        title: data['title'] ?? slug,
        excerpt: data['excerpt'] ?? '',
        date: data['date'] ?? '',
        author: data['author'] ?? 'Équipe Etayons',
        category: data['category'] ?? '',
        readingTime: data['readingTime'] ?? '',
        ...extraFields(slug, data),
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const { data, content } = readPostFile(slug);
    return {
      slug,
      title: data['title'] ?? slug,
      excerpt: data['excerpt'] ?? '',
      date: data['date'] ?? '',
      author: data['author'] ?? 'Équipe Etayons',
      category: data['category'] ?? '',
      readingTime: data['readingTime'] ?? '',
      ...extraFields(slug, data),
      content,
    };
  } catch {
    return null;
  }
}
