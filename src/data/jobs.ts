export interface Job {
  slug: string;
  title: string;
  level: string;
  tags: string[];
  reference: string;
  statut: string;
  localisation: string;
  experience: string;
  rattachement: string;
  contexte: string;
  missions: { title: string; items: string[] }[];
  profil: {
    formation: string;
    competencesTechniques: string[];
    qualitesPersonnelles: string[];
  };
  conditions: string[];
}

export const jobs: Job[] = [
  {
    slug: 'economiste',
    title: 'Économiste de la Construction',
    level: 'Confirmé · Senior',
    tags: ['Métrés', 'DPGF', 'CCTP', 'AutoCAD'],
    reference: 'ETY-ECO-2025',
    statut: 'CDI / Freelance / Portage · Cadre',
    localisation: 'Antananarivo, Madagascar · Télétravail',
    experience: 'Confirmé à senior',
    rattachement: 'Direction Technique / Études de Prix',
    contexte: 'L\'Économiste de la Construction / Ingénieur Études de Prix détermine le coût global des projets de construction, de l\'avant-projet au bouclage de l\'offre d\'exécution. Alliant expertise technique, chiffrage rigoureux et maîtrise de la DAO, il/elle garantit l\'optimisation financière et la rentabilité des ouvrages (Gros Œuvre et Tous Corps d\'État), dans le respect des normes de qualité et des exigences du DCE.',
    missions: [
      {
        title: 'Rédaction des pièces écrites et livrables',
        items: ['Participer activement à la rédaction des pièces écrites : CCTP et notices descriptives.', 'Élaborer les trames de DPGF et procéder au montage complet de la feuille de vente pour le dossier de bouclage.'],
      },
      {
        title: 'Métrés et chiffrage (TCE / Gros Œuvre)',
        items: ['Réaliser des avant-métrés détaillés sur l\'ensemble des corps d\'état (Gros Œuvre, Second Œuvre, cloisons, plâtrerie, menuiseries).', 'Calculer les déboursés secs, définir les coefficients de vente et établir le prix de revient global des opérations.', 'Consulter les fournisseurs et sous-traitants pour l\'actualisation des bordereaux de prix.'],
      },
      {
        title: 'Analyse des dossiers et études préalables',
        items: ['Analyser de manière critique les DCE, plans architecturaux et notes de calcul structurelles.', 'Effectuer les reconnaissances techniques et identifier les contraintes liées au contexte d\'exécution du chantier.'],
      },
    ],
    profil: {
      formation: 'Bac+3 (Licence Professionnelle) à Bac+5 (Master d\'Ingénieur) en Génie Civil, BTP ou Économie de la Construction. Établissements de référence : IST d\'Antananarivo, LTP Génie Civil Mahamasina ou équivalents internationaux. Une première expérience en métré, économie de la construction ou études de prix est indispensable.',
      competencesTechniques: ['Techniques de chiffrage : calcul de déboursés secs, établissement de DPGF, analyses de ratios financiers TCE.', 'Logiciels DAO : maîtrise indispensable d\'AutoCAD (dessin, planification, dimensionnement).', 'Notions en infographie 3D / visualisation architecturale ou suivi administratif technique.'],
      qualitesPersonnelles: ['Rigueur analytique absolue, précision mathématique et sens aigu du détail.', 'Excellente maîtrise du français (oral et écrit) pour l\'analyse des pièces juridico-techniques.', 'Maîtrise du pack Office.', 'Méthodique, autonome et proactif.'],
    },
    conditions: ['CDI / Freelance · Statut cadre ou assimilé', 'Télétravail depuis Madagascar, en appui des équipes françaises', 'Connexion haut débit stable requise pour les missions internationales'],
  },
  {
    slug: 'structure-ba',
    title: 'Ingénieur(e) Structure Béton Armé',
    level: 'Confirmé · Sénior',
    tags: ['Eurocodes', 'Robot', 'AutoCAD', 'Revit'],
    reference: 'ETY-STR-2025',
    statut: 'CDI / Freelance · Cadre',
    localisation: 'Antananarivo, Madagascar · Télétravail',
    experience: 'Confirmé · Sénior (4 à 8 ans)',
    rattachement: 'Responsable Bureau d\'Études Structure',
    contexte: 'L\'Ingénieur(e) Structure Béton Armé prend en charge les études de conception et de dimensionnement des ouvrages en béton armé (bâtiments, parkings, ouvrages d\'art courants) transmis à distance par nos clients. Il·elle produit les notes de calcul et les plans d\'armatures conformes aux Eurocodes, garantissant la sécurité et l\'optimisation des structures à chaque phase du projet.',
    missions: [
      {
        title: 'Conception et calcul de structures',
        items: ['Analyser les données architecturales, géotechniques et les contraintes du projet transmises par le client.', 'Réaliser les modélisations et calculs de structures en béton armé (dalles, poutres, voiles, fondations, escaliers).', 'Dimensionner les éléments structurels selon les Eurocodes (EN 1992) et les normes françaises associées.', 'Optimiser les sections et les ferraillages pour concilier sécurité, fonctionnalité et économie de matière.'],
      },
      {
        title: 'Production des livrables',
        items: ['Produire des notes de calcul claires, vérifiées et traçables, à destination des équipes du client.', 'Établir les plans de coffrage et d\'armatures en coordination avec les dessinateurs et projeteurs BIM.', 'Vérifier la compatibilité des plans structure avec les plans architecturaux et les autres corps d\'état.', 'Rédiger les notes de synthèse et les hypothèses de calcul à joindre aux dossiers techniques.'],
      },
      {
        title: 'Coordination',
        items: ['Participer aux revues de conception en visioconférence avec les équipes client et les architectes.', 'Contribuer à l\'amélioration des modèles de calcul et des outils internes du bureau.'],
      },
    ],
    profil: {
      formation: 'BTS, Licence, Master ou diplôme d\'ingénieur en Génie Civil, Structures ou Ingénierie du Bâtiment (ou équivalent international). Une expérience confirmée (4 ans minimum) en bureau d\'études structure béton armé est exigée ; la maîtrise de Robot Structural Analysis est incontournable.',
      competencesTechniques: ['Calcul de structures béton armé : dalles pleines, poutres, voiles, fondations superficielles et profondes.', 'Connaissance approfondie des Eurocodes (EN 1990, EN 1991, EN 1992).', 'Robot Structural Analysis (modélisation et calcul aux éléments finis) ; SCIA Engineer et/ou Advance Design.', 'Plans d\'armatures sur AutoCAD ; pratique de Revit Structure appréciée.', 'Interactions sol-structure et rapports géotechniques (G2, G3), collaboration en environnement BIM.'],
      qualitesPersonnelles: ['Excellent français écrit et oral : notes de calcul lisibles par des ingénieurs français.', 'Rigueur absolue dans les vérifications de calcul, zéro tolérance sur les erreurs de dimensionnement.', 'Autonomie de l\'avant-projet à l\'exécution ; capacité à expliquer ses hypothèses en visioconférence.', 'Organisation et respect des délais dans un contexte de travail entièrement à distance.'],
    },
    conditions: ['CDI / Freelance · Statut cadre ou assimilé', 'Télétravail depuis Madagascar, en appui des équipes françaises', 'Connexion haut débit stable requise pour les missions internationales'],
  },
  {
    slug: 'vrd',
    title: 'Chargé(e) d\'études VRD',
    level: 'Confirmé · Sénior',
    tags: ['AutoCAD', 'Civil 3D', 'Mensura', 'Covadis'],
    reference: 'ETY-VRD-2025',
    statut: 'CDI / Freelance · Cadre',
    localisation: 'Antananarivo, Madagascar · Télétravail',
    experience: 'Confirmé · Sénior (3 à 8 ans)',
    rattachement: 'Responsable Bureau d\'Études VRD',
    contexte: 'Le·la Chargé(e) d\'études VRD prend en charge les études de conception et de dimensionnement des projets de voirie, réseaux d\'assainissement, éclairage public et aménagements urbains transmis à distance. Il·elle produit l\'ensemble des livrables techniques (plans, notes de calcul, pièces écrites) aux phases AVP, PRO, DCE et EXE, permettant à nos partenaires français de piloter leurs projets avec rigueur et réactivité.',
    missions: [
      {
        title: 'Études et production VRD',
        items: ['Réaliser les études de conception VRD en phase AVP, PRO, DCE et EXE à partir des données transmises à distance.', 'Produire les plans de voirie, de réseaux d\'assainissement (EP/EU), d\'éclairage public et d\'aménagements paysagers.', 'Effectuer les calculs hydrauliques (dimensionnement réseaux EP/EU, bassins de rétention) et géotechniques de base.', 'Réaliser les cubatures de terrassement et établir les profils en long et en travers.'],
      },
      {
        title: 'Pièces écrites et estimatifs',
        items: ['Rédiger les pièces écrites : CCTP, DPGF, estimatifs, mémoires techniques.', 'Établir les métrés et les estimatifs de coûts des travaux VRD.', 'Assurer la conformité des études aux normes françaises (Fascicule 70, DTU, NF EN).'],
      },
      {
        title: 'Coordination',
        items: ['Coordonner les livrables avec les autres corps de métier en visioconférence.', 'Participer aux réunions de coordination et intégrer les observations du maître d\'œuvre ou du client.'],
      },
    ],
    profil: {
      formation: 'BTS, Licence, Master ou diplôme d\'ingénieur en Génie Civil, Travaux Publics ou Infrastructures (ou équivalent international). Une expérience confirmée en bureau d\'études VRD sur des missions AVP/PRO/DCE est indispensable ; la pratique autonome d\'AutoCAD et Civil 3D (ou Mensura/Covadis) est exigée.',
      competencesTechniques: ['Conception VRD : planimétrie, altimétrie, calculs de pente, dimensionnement de réseaux.', 'Normes françaises VRD (Fascicule 70, circulaire 77-284, DTU associés).', 'AutoCAD pour la production de plans VRD ; Civil 3D ou Mensura pour cubatures et profils.', 'Outils SIG (QGIS ou équivalent) ; lecture de plans topographiques, géotechniques et hydrologiques.', 'Rédaction de CCTP, DPGF et estimatifs de qualité en français.'],
      qualitesPersonnelles: ['Excellent français écrit : rédaction claire et précise des pièces techniques.', 'Rigueur et méthodologie dans la production de livrables sans erreur.', 'Autonomie et organisation pour gérer plusieurs dossiers simultanément.', 'Réactivité et respect des délais dans un environnement de travail à distance.'],
    },
    conditions: ['CDI / Freelance · Statut cadre ou assimilé', 'Télétravail depuis Madagascar, en appui des équipes françaises', 'Connexion haut débit stable requise pour les missions internationales'],
  },
  {
    slug: 'responsable-etudes-prix',
    title: 'Responsable Études de Prix GO/TCE',
    level: 'Confirmé · Sénior',
    tags: ['Métrés TCE', 'DPGF', 'ATTIC+', 'Excel avancé'],
    reference: 'ETY-EDP-2025',
    statut: 'CDI / Freelance',
    localisation: 'Antananarivo, Madagascar · Télétravail',
    experience: '3 à 8 ans minimum',
    rattachement: 'Direction Technique / Études de Prix',
    contexte: 'Le·la Responsable Études de Prix GO/TCE joue un rôle stratégique en phase amont : il·elle analyse les appels d\'offres transmis par les clients, chiffre les projets en Gros Œuvre et Tous Corps d\'État (bâtiment, génie civil) et monte les dossiers de réponse complets. Son travail permet à nos partenaires français de répondre avec compétitivité et rigueur, sans mobiliser leurs équipes internes sur des tâches chronophages de chiffrage.',
    missions: [
      {
        title: 'Analyse et métrés',
        items: ['Analyser les dossiers d\'appels d\'offres (DCE) et en extraire les exigences techniques, juridiques et commerciales.', 'Étudier les plans, coupes et documents graphiques transmis à distance pour identifier les contraintes du projet.', 'Réaliser les métrés et quantifier les ouvrages à partir des pièces écrites et graphiques.'],
      },
      {
        title: 'Chiffrage et optimisation',
        items: ['Évaluer les coûts directs et indirects : matériaux, main-d\'œuvre, sous-traitance, frais généraux.', 'Consulter les fournisseurs et sous-traitants pour obtenir les meilleures offres de prix.', 'Établir les déboursiers et analyser les ratios de prix par ouvrage pour fiabiliser le chiffrage.', 'Proposer des variantes techniques ou économiques pour optimiser le coût global de l\'offre.'],
      },
      {
        title: 'Montage du dossier de réponse',
        items: ['Monter le dossier de réponse : devis détaillé, mémoire technique, dossiers administratifs et planning prévisionnel.', 'Travailler en lien étroit avec le chef de projet et les équipes travaux du client.', 'Contribuer à l\'amélioration continue des outils et méthodes de chiffrage (matrices Excel, bases de prix, gabarits).'],
      },
    ],
    profil: {
      formation: 'BTS, Licence, Master ou diplôme d\'ingénieur en Génie Civil, Bâtiment, Travaux Publics ou Économie de la Construction (quel que soit le pays d\'obtention). Une première expérience en métré, économie de la construction ou ingénierie études est indispensable.',
      competencesTechniques: ['Solides bases en génie civil, gros œuvre et/ou second œuvre ; normes françaises et code des marchés publics.', 'Analyse autonome d\'une DCE (plans, CCTP, DPGF, BPU, DQE) et constitution de matrices de chiffrage.', 'Logiciels de métrés et devis : ATTIC+, Batigest, QuoterPlan ou équivalent ; Excel avancé (matrices de coûts).', 'Lecture de plans sur AutoCAD / Revit (la modélisation 3D est un plus).'],
      qualitesPersonnelles: ['Excellent français écrit et oral : communication fluide avec les équipes et clients en France.', 'Rigueur absolue et sens du détail : une erreur de chiffrage engage la rentabilité d\'un projet.', 'Esprit d\'analyse et de synthèse ; autonomie et bonne organisation à distance.', 'Réactivité : gérer plusieurs appels d\'offres simultanément dans les délais impartis.'],
    },
    conditions: ['CDI / Freelance · Statut cadre ou assimilé', 'Télétravail depuis Madagascar, en appui des équipes françaises', 'Connexion haut débit stable requise pour les missions internationales'],
  },
  {
    slug: 'bim-modeleur',
    title: 'BIM Modeleur',
    level: 'Confirmé',
    tags: ['Revit', 'Navisworks', 'Tekla', 'LOD 400'],
    reference: 'ETY-BIM-2025',
    statut: 'CDI / Freelance · Cadre',
    localisation: 'Antananarivo, Madagascar · Télétravail',
    experience: 'Confirmé (2 à 5 ans)',
    rattachement: 'Responsable BIM / Bureau d\'Études',
    contexte: 'Le·la BIM Modeleur·euse prend en charge la modélisation numérique des ouvrages (structure, architecture, réseaux) dans des environnements BIM collaboratifs. Il·elle produit et maintient des maquettes numériques de haute qualité (LOD 200 à LOD 400) à partir des pièces transmises à distance, contribuant directement à la coordination inter-métiers et à la qualité des livrables de nos clients.',
    missions: [
      {
        title: 'Modélisation',
        items: ['Créer et développer les maquettes BIM structure, architecture et/ou MEP sous Revit à partir des données du client.', 'Modéliser les ouvrages aux niveaux de développement requis (LOD 200 à LOD 400) selon les cahiers des charges BIM.', 'Intégrer les données techniques fournies (notes de calcul, plans papier, fichiers DWG) dans la maquette.', 'Modéliser sous Tekla Structures pour la charpente métallique ou le béton armé préfabriqué (selon profil).'],
      },
      {
        title: 'Production et synthèse',
        items: ['Réaliser les plans de coffrage, d\'armatures ou d\'exécution directement depuis la maquette Revit.', 'Coordonner les maquettes multi-corps d\'état et détecter les clashs via Navisworks.', 'Produire les extractions de quantitatifs et les tableaux de données depuis la maquette.'],
      },
      {
        title: 'Coordination et qualité',
        items: ['Mettre à jour la maquette au fil des évolutions et gérer les versions avec rigueur.', 'Participer aux réunions de coordination BIM en visioconférence et remonter les incohérences.', 'Appliquer la convention BIM du projet (nommage, LOD, système de coordonnées).'],
      },
    ],
    profil: {
      formation: 'BTS, Licence, Master ou diplôme d\'ingénieur en Génie Civil, Architecture, Ingénierie du Bâtiment, BIM Management ou construction numérique. Toute certification BIM / Revit est un atout. Une expérience confirmée sur Revit (2 ans minimum) avec production effective de livrables BIM est indispensable.',
      competencesTechniques: ['Maîtrise avancée de Revit (Architecture et/ou Structure) : modélisation, familles, vues, feuilles, nomenclatures.', 'Niveaux de développement LOD 200 / 300 / 350 / 400 et leur application pratique.', 'Navisworks pour la coordination inter-maquettes et la détection des clashs ; Tekla Structures appréciée.', 'AutoCAD pour les échanges DWG ; conventions BIM françaises et outils collaboratifs (ACC/BIM 360, Trimble Connect).'],
      qualitesPersonnelles: ['Excellent français écrit : communication claire avec les équipes projets françaises.', 'Précision et souci du détail : une maquette propre est la base d\'une coordination sans erreur.', 'Autonomie dans la gestion des fichiers et des versions de maquette.', 'Réactivité pour intégrer les révisions ; aisance dans le travail collaboratif à distance.'],
    },
    conditions: ['CDI / Freelance · Statut cadre ou assimilé', 'Télétravail depuis Madagascar, en appui des équipes françaises', 'Connexion haut débit stable requise pour les missions internationales'],
  },
  {
    slug: 'assistant-technique',
    title: 'Assistant(e) Technique Bureau d\'Études',
    level: 'Junior · Confirmé',
    tags: ['GED', 'Pack Office', 'DCE', 'Suivi de dossiers'],
    reference: 'ETY-AST-2025',
    statut: 'CDI / Freelance',
    localisation: 'Antananarivo, Madagascar · Télétravail',
    experience: 'Junior · Confirmé (1 à 4 ans)',
    rattachement: 'Direction Technique',
    contexte: 'L\'Assistant(e) Technique Bureau d\'Études assure le suivi administratif et technique des dossiers confiés par les clients : préparation des documents de production, organisation des flux d\'informations, contrôle de la conformité et de la complétude des livrables. Son travail permet aux ingénieurs et projeteurs de se concentrer sur leur cœur de métier technique.',
    missions: [
      {
        title: 'Gestion des dossiers d\'appel d\'offres',
        items: ['Réceptionner, analyser et classer les DCE transmis par les clients : plans, CCTP, CCAP, RC, DQE.', 'Vérifier la complétude des pièces transmises et signaler les documents manquants.', 'Préparer les dossiers de réponse administratifs : attestations, formulaires DC1/DC2, actes d\'engagement, déclarations.'],
      },
      {
        title: 'Support technique et production',
        items: ['Réaliser des métrés simples et des relevés de quantités sur la base de plans transmis à distance.', 'Assister les ingénieurs dans la constitution des mémoires techniques et des dossiers de réponse.', 'Rédiger et mettre en forme les courriers, comptes rendus de réunion et rapports techniques.'],
      },
      {
        title: 'Suivi et gestion documentaire',
        items: ['Assurer le suivi des plannings de production et relancer les intervenants en cas de retard.', 'Gérer les archives numériques : nommage, classement, versionning des fichiers.', 'Préparer les dossiers de facturation, suivre les situations de travaux et coordonner la transmission des livrables.'],
      },
    ],
    profil: {
      formation: 'BTS, Licence ou formation technique en Gestion, Génie Civil, Économie de la Construction ou administration de projets (quel que soit le pays d\'obtention). Une première expérience en bureau d\'études, entreprise de BTP ou cabinet d\'architecture est souhaitée.',
      competencesTechniques: ['Bonne connaissance de l\'environnement BTP et des documents techniques (plans, CCTP, DPGF, BPU, DQE).', 'Métrés simples à partir de plans DWG ou PDF ; lecture de plans (architecture, structure, VRD).', 'Outils bureautiques avancés : Word, Excel, PowerPoint ; gestion documentaire (SharePoint, Dropbox, FTP).', 'Processus administratifs des marchés publics français (formulaires DC, actes d\'engagement) appréciés.'],
      qualitesPersonnelles: ['Excellent français écrit : orthographe irréprochable et rédaction de documents professionnels.', 'Rigueur et sens de l\'organisation : plusieurs dossiers gérés sans erreur ni oubli.', 'Proactivité, discrétion et professionnalisme dans la gestion de documents confidentiels.', 'Aisance dans les échanges à distance et apprentissage rapide des process de chaque client.'],
    },
    conditions: ['CDI / Freelance · Statut cadre ou assimilé', 'Télétravail depuis Madagascar, en appui des équipes françaises', 'Connexion haut débit stable requise pour les missions internationales'],
  },
];

export function getJob(slug: string): Job | undefined {
  return jobs.find((job) => job.slug === slug);
}
