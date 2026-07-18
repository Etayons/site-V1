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
}

export interface BlogPost extends BlogPostMeta {
  content: string;
}

function readPostFile(slug: string): { data: Record<string, string>; content: string } {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, 'utf-8');
  return matter(raw);
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
      content,
    };
  } catch {
    return null;
  }
}
