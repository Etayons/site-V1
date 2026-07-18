import type { MetadataRoute } from 'next';
import { jobs } from '@/data/jobs';
import { getAllPosts } from '@/lib/blog';

const BASE_URL = 'https://etayons.fr';

/**
 * Dates de dernière modification réelle du contenu.
 *
 * Elles étaient auparavant calculées avec `new Date()`, ce qui datait toutes les
 * pages du jour du déploiement. Un `lastmod` qui bouge alors que le contenu n'a
 * pas changé est un signal non fiable : Google finit par l'ignorer pour tout le
 * site, y compris pour les pages réellement mises à jour.
 *
 * À mettre à jour à la main quand le contenu d'une page change vraiment.
 * Les articles portent déjà leur date dans le frontmatter MDX.
 */
const PAGE_UPDATED: Record<string, string> = {
  '': '2026-07-18',
  '/a-propos': '2026-07-18',
  '/carriere': '2026-07-18',
  '/blog': '2026-07-18',
  '/contact': '2026-07-18',
};

/** Dernière révision des fiches de poste (reprise des 6 PDF sources). */
const JOBS_UPDATED = '2026-07-18';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = Object.entries(PAGE_UPDATED).map(([path, date]) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(date),
    changeFrequency: 'monthly' as MetadataRoute.Sitemap[number]['changeFrequency'],
    priority: path === '' ? 1 : 0.8,
  }));

  const jobPages = jobs.map((job) => ({
    url: `${BASE_URL}/carriere/${job.slug}`,
    lastModified: new Date(JOBS_UPDATED),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const posts = getAllPosts();

  const blogPages = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }));

  // La liste du blog est datée de son article le plus récent : elle change
  // réellement à chaque publication, et seulement à ce moment-là.
  const latestPost = posts[0]?.date;
  const blogIndex = staticPages.find((page) => page.url === `${BASE_URL}/blog`);
  if (latestPost && blogIndex) {
    blogIndex.lastModified = new Date(latestPost);
    blogIndex.changeFrequency = 'weekly';
  }

  return [...staticPages, ...jobPages, ...blogPages];
}
