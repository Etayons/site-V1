import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getAllPostSlugs, getPostBySlug } from '@/lib/blog';

const BASE_URL = 'https://etayons.fr';
const OG_IMAGE = `${BASE_URL}/og-image.png`;

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const url = `${BASE_URL}/blog/${slug}`;

  return {
    title: post.title,
    description: post.excerpt,
    authors: [{ name: post.author }],
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      locale: 'fr_FR',
      siteName: 'Etayons',
      title: post.title,
      description: post.excerpt,
      url,
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: [post.author],
      section: post.category,
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [OG_IMAGE],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
  };
}

function formatDate(iso: string): string {
  if (!iso) return '';
  return new Date(iso).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const url = `${BASE_URL}/blog/${slug}`;

  // Donnée structurée article : indique à Google le type de contenu, la date,
  // l'auteur et l'éditeur. Condition d'éligibilité aux résultats enrichis.
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: [OG_IMAGE],
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: 'fr-FR',
    articleSection: post.category,
    author: { '@type': 'Organization', name: post.author, url: BASE_URL },
    publisher: {
      '@type': 'Organization',
      name: 'Etayons',
      url: BASE_URL,
      logo: { '@type': 'ImageObject', url: `${BASE_URL}/logo-etayons.png` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    isPartOf: { '@type': 'Blog', name: 'Le blog Etayons', url: `${BASE_URL}/blog` },
  };

  // Fil d'Ariane : affiché par Google sous le titre du résultat de recherche.
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: url },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* L'article englobe son propre en-tête : le H1 et les métadonnées appartiennent
          au contenu, pas à un bandeau décoratif détaché. */}
      <article itemScope itemType="https://schema.org/BlogPosting">
        {/* Bandeau aligné sur le gabarit commun : 475px de haut, contenu calé en haut */}
        <header className="gridbg relative flex min-h-[475px] flex-col justify-start bg-marine pb-16 pt-32 text-white">
          {/* `wrap` reste à 1200px pour aligner la marge gauche sur les autres
              pages ; la largeur de lecture est contrainte à l'intérieur. */}
          <div className="wrap">
            <div className="max-w-[46rem]">
              <nav aria-label="Fil d'Ariane">
                <ol className="m-0 flex list-none flex-wrap items-center gap-2 p-0 text-sm text-blue-gray">
                  <li>
                    <Link href="/" className="text-blue-gray no-underline hover:text-gold">
                      Accueil
                    </Link>
                  </li>
                  <li aria-hidden="true" className="text-white/30">
                    /
                  </li>
                  <li>
                    <Link href="/blog" className="text-blue-gray no-underline hover:text-gold">
                      Blog
                    </Link>
                  </li>
                </ol>
              </nav>
              <p className="eyb mt-6 text-gold" itemProp="articleSection">
                {post.category}
              </p>
              <h1
                className="mt-4 text-[1.75rem] font-bold leading-[1.15] sm:text-[2.5rem]"
                itemProp="headline"
              >
                {post.title}
              </h1>
              <p
                className="mt-5 text-base leading-7 text-blue-gray sm:text-lg"
                itemProp="description"
              >
                {post.excerpt}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-blue-gray">
                <span itemProp="author" itemScope itemType="https://schema.org/Organization">
                  <span itemProp="name">{post.author}</span>
                </span>
                <span aria-hidden="true" className="text-white/30">
                  ·
                </span>
                <time dateTime={post.date} itemProp="datePublished">
                  {formatDate(post.date)}
                </time>
                <span aria-hidden="true" className="text-white/30">
                  ·
                </span>
                <span>{post.readingTime} de lecture</span>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="hair absolute bottom-0 left-0 right-0" />
        </header>

        {/* Largeur de lecture ramenée à environ 70 caractères par ligne */}
        <div className="bg-white pb-20 pt-14">
          <div className="wrap">
            <div className="max-w-[46rem]">
              <div className="prose-etayons" itemProp="articleBody">
                <MDXRemote source={post.content} />
              </div>
              <footer className="mt-14 border-t border-line pt-10">
                <p className="mb-6 text-base text-muted">
                  Un besoin de renfort sur vos études ? Parlons de votre plan de charge.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/contact" className="btns">
                    Discutons de votre projet
                  </Link>
                  <Link href="/blog" className="btnp-light">
                    Voir tous les articles
                  </Link>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
