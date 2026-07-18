import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    "Ressources et éclairages sur l'externalisation technique, le BIM et l'ingénierie structure : le blog Etayons.",
  alternates: { canonical: 'https://etayons.fr/blog' },
};

function formatDate(iso: string): string {
  if (!iso) return '';
  return new Date(iso).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default function BlogPage() {
  const posts = getAllPosts();

  // Schéma Blog : aide Google à relier la liste et chaque article publié.
  const blogJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Le blog Etayons',
    url: 'https://etayons.fr/blog',
    inLanguage: 'fr-FR',
    publisher: { '@type': 'Organization', name: 'Etayons', url: 'https://etayons.fr' },
    blogPost: posts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      author: { '@type': 'Organization', name: post.author },
      url: `https://etayons.fr/blog/${post.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <section className="gridbg relative flex min-h-[475px] flex-col justify-start bg-marine pb-16 pt-32 text-white">
        <div className="wrap">
          <div className="eyb text-gold">Ressources</div>
          <h1 className="mt-4 max-w-3xl text-3xl font-bold leading-tight sm:text-5xl">
            Le blog <span className="text-gold">Etayons.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-blue-gray">
            Des repères concrets pour les bureaux d&apos;études : coûts réels, normes, BIM et plan de
            charge. Écrit par des ingénieurs, pas par un service marketing.
          </p>
        </div>
        <div className="hair absolute bottom-0 left-0 right-0" />
      </section>

      <section className="bg-white py-12">
        <div className="wrap">
          {posts.length === 0 ? (
            <p className="text-base text-muted">Aucun article pour le moment.</p>
          ) : (
            <ul className="m-0 grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <li key={post.slug} className="flex">
                  <article className="flex w-full flex-col">
                    <Link href={`/blog/${post.slug}`} className="pil flex flex-1 flex-col !p-5">
                      <p className="eyb text-[0.62rem]">{post.category}</p>
                      <h2 className="mt-2 line-clamp-2 text-base font-semibold leading-snug text-marine">
                        {post.title}
                      </h2>
                      <p className="mt-2 line-clamp-3 flex-1 text-[0.82rem] leading-6 text-muted">
                        {post.excerpt}
                      </p>
                      <footer className="mt-3 flex items-center justify-between text-[0.7rem] text-muted">
                        <time dateTime={post.date}>{formatDate(post.date)}</time>
                        <span>{post.readingTime}</span>
                      </footer>
                      <span aria-hidden="true" className="mt-2 text-sm font-medium text-gold-dark">
                        Lire l&apos;article →
                      </span>
                    </Link>
                  </article>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  );
}
