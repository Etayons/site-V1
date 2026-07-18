export interface CaseStudy {
  role: string;
  title: string;
  context: string;
  result: string;
  technicalSkills: string[];
  humanSkills: string[];
  image: string;
}

export const caseStudies: CaseStudy[] = [
  {
    role: 'Économiste de la construction',
    title: "Fiabiliser le chiffrage d'un programme de logements",
    context:
      "Une maîtrise d'œuvre enchaîne trois phases (ESQ, APD, DCE) sur un programme de 90 logements : les métrés et pièces écrites saturent son économiste interne.",
    result:
      'DPGF et CCTP livrés à chaque phase dans les délais, avec un écart budget final inférieur à 3 %.',
    technicalSkills: ['Métrés & DPGF', 'CCTP / pièces écrites', 'Économie de projet ESQ→DCE'],
    humanSkills: ['Précision', 'Dialogue MOA / MOE', 'Tenue des délais'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=60',
  },
  {
    role: "Chargé d'études Structure (BA)",
    title: "Absorber une vague d'études béton armé",
    context:
      "Résidence R+6 de 140 logements : le BE doit produire l'ensemble des notes de calcul, plans de coffrage et de ferraillage dans un calendrier serré.",
    result:
      '60 notes de calcul et plans de ferraillage livrés en 10 semaines, sans aucun retour majeur au visa.',
    technicalSkills: ['Eurocode 2', 'Robot / Arche', 'Coffrage & ferraillage'],
    humanSkills: ['Rigueur', 'Traçabilité des hypothèses', 'Autonomie'],
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=60',
  },
  {
    role: "Chargé d'études VRD",
    title: "Tenir le DCE d'un lotissement de 74 lots",
    context:
      'Voiries, assainissement, réseaux secs : le BE VRD doit boucler le dossier PRO/DCE complet en parallèle de deux autres opérations.',
    result:
      'Dossier PRO/DCE livré en 6 semaines, profils en long et carnets de détails validés sans reprise.',
    technicalSkills: ['Covadis / Mensura', 'AutoCAD', 'Assainissement & nivellement'],
    humanSkills: ['Coordination géomètre / MOE', 'Rigueur réglementaire', 'Sens du terrain'],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=60',
  },
  {
    role: "Chargé d'études Électricité",
    title: "Dimensionner les lots CFO / CFA d'un tertiaire",
    context:
      "Immeuble de bureaux de 12 000 m² : bilans de puissance, schémas unifilaires et études d'éclairement à produire en phase EXE.",
    result:
      'Bilans de puissance et 120 schémas unifilaires livrés, conformité NF C 15-100 validée au premier visa.',
    technicalSkills: ['Caneco BT', 'Dialux', 'AutoCAD / Revit MEP'],
    humanSkills: ['Méthode', 'Coordination avec le BE fluides', 'Veille normative'],
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=900&q=60',
  },
  {
    role: 'BIM Modeleur',
    title: "Maintenir la maquette d'un centre logistique en EXE",
    context:
      'Maquette Revit multi-lots à tenir au LOD 400, familles paramétriques à créer et synthèse Navisworks hebdomadaire face à 5 entreprises.',
    result: '2 200 clashs résolus, nomenclatures propres et jalons de synthèse tous respectés.',
    technicalSkills: ['Revit', 'Familles paramétriques', 'Navisworks / LOD 400'],
    humanSkills: ["Esprit d'équipe", 'Réactivité aux visas', 'Rigueur de nomenclature'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&q=60',
  },
  {
    role: 'Responsable Études de Prix GO/TCE',
    title: "Absorber un pic d'appels d'offres sans exploser les coûts",
    context:
      "Recruter un chargé d'études de prix prend des mois ; pour les gros dossiers, beaucoup basculent sur des freelances ou BE externes coûteux et ponctuels.",
    result:
      'Avec un Relais dédié, le chiffrage GO/TCE reste maîtrisé toute l’année, même en pic ou sur gros dossier.',
    technicalSkills: ['Métrés TCE', 'DPGF / DQE', 'ATTIC+ · Excel'],
    humanSkills: ['Rigueur', 'Réactivité', 'Analyse & synthèse'],
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=900&q=60',
  },
];
