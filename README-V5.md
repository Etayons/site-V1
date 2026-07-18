# Etayons · V5

Snapshot complet du site au 18 juillet 2026, dans l'état déployé sur Vercel.

**Stack** : Next.js 15 (App Router) · React 19 · TypeScript 5.7 · Tailwind 3.4 · GSAP · MDX
**Production** : https://etayons.fr
**Dépôt** : https://github.com/Etayons/etayons-site

---

## Ce qui change depuis la V4

La V4 était un site statique multi-pages généré par script. La V5 est l'application
Next.js, avec quatre chantiers menés dessus.

### Pages articles refondues

- Bandeau aligné sur le gabarit commun des autres pages : 475 px, contenu calé en
  haut. Il était auparavant à 380 px et centré verticalement.
- Structure à deux niveaux, `wrap` à 1200 px puis contrainte de lecture à 46 rem
  à l'intérieur : la marge gauche tombe exactement au même endroit que sur les
  autres pages, tout en gardant une ligne d'environ 70 caractères.
- Titre ramené de 48 à 40 px, corps de texte passé à 17 px avec un interlignage
  de 1,75.
- Fil d'Ariane visible, chapô sous le titre, bloc de fin avec appel à l'action.

### SEO

- `BlogPosting` et `BreadcrumbList` en JSON-LD sur chaque article, `Blog` sur la
  liste, `Organization` sur toutes les pages.
- Microdonnées `itemProp` en complément du JSON-LD.
- OpenGraph `article` complet, carte Twitter large, directives robots explicites.
- URL canonique sur les 9 pages, accueil compris.
- Sitemap à dates de contenu explicites plutôt que la date du build.
- 404 en `noindex`.

### Sémantique et accessibilité

- `<article>` englobant son propre `<header>`, listes `<ul>`/`<li>` pour toutes les
  navigations, `<address>`, `<time>`, `<aside>`, titres de niveau 2 dans le pied
  de page.
- `aria-current` sur le lien de navigation actif.
- Lien d'évitement vers le contenu principal.
- Anneau de focus visible sur tous les éléments interactifs.
- Cibles tactiles à 44 px minimum.

### Contrastes

Deux défauts systémiques corrigés, mesurés par calcul sur la palette oklch :

- Un second jeton `--primary-on-light` (or assombri) pour le texte sur fond clair.
  L'or standard plafonnait à 3,32:1, sous le seuil WCAG AA. Le nouveau atteint
  4,78:1. L'or d'origine reste utilisé sur fond marine, où il donne 4,97:1.
- Le survol de `.btns` passait en fond transparent avec texte or, soit 2,03:1 sur
  une section blanche. Il utilise désormais un or assombri avec texte marine.
  Nouvelle classe `.btnp-light` pour les boutons secondaires sur fond clair.

### Interface

- En-tête en menu déroulant sous 1024 px, avec fermeture au changement de page, à
  la touche Échap et au clic à l'extérieur.
- Hauteur du héros dictée par le contenu sur mobile, pleine hauteur en `svh` sur
  desktop.
- Dépendance `resend` supprimée. Le formulaire passe par Web3Forms, comme en V3.

---

## Installation

```bash
npm ci
npm run dev        # http://localhost:3000
npm run build      # build de production
npm run lint
npm run typecheck
```

Node 20 minimum, 22 recommandé. Node 18 n'est plus accepté par Vercel.

## Formulaire de contact

`contact-form.tsx` → `POST /api/contact` → validation Zod et limitation de débit
→ `api.web3forms.com/submit`.

La clé Web3Forms est intégrée au code, elle est publique par conception. Pour en
utiliser une autre, renseigner `WEB3FORMS_ACCESS_KEY` dans les variables
d'environnement Vercel.

## Ajouter un article

Créer un fichier `.mdx` dans `src/content/blog/` avec ce frontmatter :

```yaml
---
title: "Titre de l'article"
excerpt: "Résumé affiché sur la carte et dans les résultats Google."
date: "2026-07-18"
author: "Équipe Etayons"
category: "Nom de la catégorie"
readingTime: "6 min"
---
```

Le sitemap, la page liste, les données structurées et les métadonnées se mettent à
jour automatiquement.

## Mettre à jour le sitemap

Les dates de `src/app/sitemap.ts` sont volontairement fixes. Les modifier à la main
quand le contenu d'une page change réellement. Les articles utilisent la date de leur
frontmatter, et la page liste du blog reprend celle de l'article le plus récent.

---

## Structure

```
src/app/          routes, métadonnées, sitemap, robots, API contact
src/components/   composants d'interface
src/content/blog/ articles au format MDX
src/data/         fiches métier, cas clients, FAQ
src/hooks/        révélation au défilement
src/lib/          lecture des articles, schémas de validation
public/           logo et image de partage
```

Audit complet dans `AUDIT-avant-deploiement.md`, à la racine du dossier parent.
