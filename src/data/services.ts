/**
 * Prestations commerciales (pages /services/...).
 *
 * À ne pas confondre avec `jobs.ts`, qui décrit les fiches de poste du
 * recrutement. Ici, on s'adresse aux bureaux d'études qui cherchent un renfort.
 *
 * Toutes les conditions reprennent le contrat-cadre Etayons :
 * période test de 3 mois (art. 5.3), engagement de 6 mois par accord
 * d'application (art. 4), grille tarifaire 2026 (art. 8.1.1), frais de gestion
 * de 490 € HT par an et par Relais (art. 8.1.3). Le contrôle technique des
 * livrables reste au client (art. 7.3) : ne jamais promettre de « validation »
 * des livrables par Etayons.
 */

export interface Service {
  slug: string;
  /** Valeur transmise au formulaire de contact (?service=) et au tracking. */
  formValue: string;
  menuLabel: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  /** Situations typiques où le client fait appel à un Relais. */
  besoins: string[];
  livrables: { title: string; items: string[] }[];
  logiciels: string[];
  /** Ce qui est demandé au client pour démarrer. */
  entrees: string[];
  prixDepuis: string;
  prixDetail: string;
  /** Fiche de poste correspondante, pour le lien « profils recherchés ». */
  jobSlug: string;
  /** Articles du blog liés, par slug. */
  articles: string[];
}

export const services: Service[] = [
  {
    slug: 'bim-revit',
    formValue: 'BIM / Revit',
    menuLabel: 'Modélisation BIM / Revit',
    title: 'Un modeleur BIM Revit dédié à votre équipe',
    metaTitle: 'Renfort BIM Revit pour bureau d’études',
    metaDescription:
      'Un modeleur BIM Revit francophone, dédié à votre bureau d’études : maquettes LOD 200 à 400, plans de production, synthèse Navisworks. Période test de 3 mois, démarrage en 3 semaines.',
    intro:
      'Votre maquette prend du retard et le recrutement d’un modeleur Revit s’éternise. Un Relais Etayons rejoint votre équipe, travaille dans votre environnement et applique votre convention BIM, sur vos horaires.',
    besoins: [
      'Un rendu APD, PRO ou EXE approche et la maquette n’est pas à jour.',
      'Votre BIM Manager passe son temps à modéliser au lieu de coordonner.',
      'Vous devez passer des plans 2D DWG à une maquette Revit exploitable.',
      'Un poste de modeleur est ouvert depuis des semaines sans candidat convaincant.',
    ],
    livrables: [
      {
        title: 'Modélisation',
        items: [
          'Maquettes structure, architecture ou MEP sous Revit, à partir de vos plans, DWG et notes de calcul.',
          'Niveaux de développement LOD 200 à 400, selon le cahier des charges BIM du projet.',
          'Familles Revit et gabarits adaptés à vos standards.',
        ],
      },
      {
        title: 'Production',
        items: [
          'Plans de coffrage, d’armatures ou d’exécution extraits de la maquette.',
          'Nomenclatures et extractions de quantitatifs.',
          'Exports IFC et DWG pour vos partenaires.',
        ],
      },
      {
        title: 'Coordination',
        items: [
          'Détection de clashs sous Navisworks et remontée des incohérences.',
          'Mise à jour de la maquette au fil des révisions, avec gestion des versions.',
          'Participation à vos réunions de coordination BIM en visioconférence.',
        ],
      },
    ],
    logiciels: ['Revit', 'Navisworks', 'AutoCAD', 'Tekla Structures (selon profil)', 'ACC / BIM 360', 'Trimble Connect'],
    entrees: [
      'Votre convention BIM ou, à défaut, vos règles de nommage et de LOD.',
      'Vos gabarits et familles Revit.',
      'Les accès à votre environnement commun de données et vos licences métier.',
      'Un interlocuteur désigné qui fixe les priorités et valide les livrables.',
    ],
    prixDepuis: 'À partir de 700 € HT / mois',
    prixDetail:
      'Selon le diplôme et l’expérience du profil, sur la base de 140 heures par mois. Frais de gestion et d’équipement : 490 € HT par an.',
    jobSlug: 'bim-modeleur',
    articles: ['bim-niveau-2-conventions-licences', 'rgpd-confidentialite-relais-dedie'],
  },
  {
    slug: 'structure-beton-arme',
    formValue: 'Structure béton armé',
    menuLabel: 'Structure béton armé',
    title: 'Un ingénieur structure béton armé dédié à votre équipe',
    metaTitle: 'Renfort ingénieur structure béton armé',
    metaDescription:
      'Un ingénieur structure béton armé francophone, dédié à votre bureau d’études : notes de calcul aux Eurocodes, plans de coffrage et d’armatures. Période test de 3 mois, démarrage en 3 semaines.',
    intro:
      'Les notes de calcul s’accumulent et vos ingénieurs ne suivent plus. Un Relais Etayons rejoint votre bureau d’études structure, calcule selon les Eurocodes et produit vos plans, sous votre direction technique.',
    besoins: [
      'Plusieurs projets arrivent en même temps en phase PRO ou EXE.',
      'Vos ingénieurs seniors passent trop de temps sur la production de plans.',
      'Vous refusez des affaires faute de capacité de calcul.',
      'Un poste d’ingénieur structure reste ouvert depuis plusieurs mois.',
    ],
    livrables: [
      {
        title: 'Calcul',
        items: [
          'Modélisation et dimensionnement des éléments en béton armé : dalles, poutres, poteaux, voiles, fondations, escaliers.',
          'Calculs selon les Eurocodes 0, 1 et 2 et leurs annexes nationales françaises.',
          'Prise en compte des hypothèses géotechniques transmises (missions G2, G3).',
        ],
      },
      {
        title: 'Production',
        items: [
          'Notes de calcul rédigées en français, avec hypothèses explicites.',
          'Plans de coffrage et d’armatures, nomenclatures d’aciers.',
          'Vérification de la cohérence avec les plans d’architecte et des autres lots.',
        ],
      },
      {
        title: 'Coordination',
        items: [
          'Participation à vos revues de conception en visioconférence.',
          'Intégration des remarques du contrôleur technique et du bureau de contrôle.',
        ],
      },
    ],
    logiciels: ['Robot Structural Analysis', 'SCIA Engineer', 'Advance Design', 'AutoCAD', 'Revit Structure'],
    entrees: [
      'Les plans d’architecte, le rapport géotechnique et les hypothèses du projet.',
      'Vos modèles de notes de calcul et vos cartouches.',
      'Vos licences de calcul et de dessin.',
      'Un ingénieur référent qui fixe les priorités, relit et signe les livrables.',
    ],
    prixDepuis: 'À partir de 1 500 € HT / mois',
    prixDetail:
      'Pour un ingénieur junior, sur la base de 140 heures par mois ; profils confirmés et seniors selon la grille. Frais de gestion et d’équipement : 490 € HT par an.',
    jobSlug: 'structure-ba',
    articles: ['eurocodes-madagascar-double-competence', 'penurie-dessinateurs-projeteurs-cout-recrutement'],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
