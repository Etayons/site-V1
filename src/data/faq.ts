export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: 'Quel type de contrat proposez-vous et avec quelle souplesse ?',
    answer:
      "Un contrat de prestation B2B modulable : le volume d'intervention suit votre plan de charge, à la hausse comme à la baisse, sans engagement structurel ni embauche de votre côté.",
  },
  {
    question: "Comment se passe le pilotage d'une équipe à distance ?",
    answer:
      "Nos collaborateurs travaillent directement dans vos outils, en temps réel. Avec seulement +1h de décalage l'été et +2h l'hiver, les échanges se font en continu sur toute votre journée : méthodes partagées, reporting transparent, aucun tunnel de production opaque.",
  },
  {
    question: 'Quelles sont les qualifications de vos équipes ?',
    answer:
      'Des ingénieurs et techniciens diplômés, entièrement francophones, rompus aux référentiels européens et aux logiciels métiers exigeants : AutoCAD, Revit, SolidWorks, Tekla, Robot ou encore Advance Design.',
  },
  {
    question: 'Que se passe-t-il si le profil retenu ne convient pas ?',
    answer:
      "Vous restez libre à chaque étape : aucun profil présenté ne vous engage. Et si, au cours des trois premiers mois de collaboration, le Relais intégré ne répond pas à vos attentes, nous organisons son remplacement sans facturation supplémentaire.",
  },
  {
    question: 'D\'où viennent vos talents ?',
    answer:
      "D'un vivier de plusieurs milliers de profils techniques à Madagascar, pays francophone dont les ingénieurs sont formés aux méthodologies européennes et reconnus pour leur engagement.",
  },
  {
    question: 'Sous quel délai le Relais est-il opérationnel ?',
    answer:
      'Environ 4 semaines au total : 3 semaines pour identifier et qualifier les candidats, puis 1 semaine pour vos entretiens de validation avant le premier jour de mission.',
  },
  {
    question: 'Quelles garanties de sécurité et de confidentialité offrez-vous ?',
    answer:
      "NDA signé dès le départ, droits d'accès attribués au plus juste, projets strictement cloisonnés et équipes formées en continu à la sécurité industrielle. Une assurance cyber-risques est par ailleurs incluse dans nos prestations.",
  },
  {
    question: 'Qui manage le Relais au quotidien ?',
    answer:
      'Le pilotage technique vous revient : plan de charge, méthodes, contrôle qualité. Nous prenons en charge tout le reste (contrat de travail, matériel, administratif, assiduité et management RH), avec des points qualité réguliers organisés ensemble.',
  },
  {
    question: 'Comment sont fournis le matériel et les accès ?',
    answer:
      'Chaque mission précise l\'équipement fourni par Etayons : poste dimensionné au besoin, double écran, connexion dédiée, suite bureautique. Vos accès métiers (VPN/SSO, licences, lignes dédiées) restent délivrés et validés par vos soins.',
  },
  {
    question: 'Votre modèle est-il éthique vis-à-vis de vos équipes ?',
    answer:
      "Oui, c'est son fondement : salaires positionnés dans le haut du marché malgache de l'ingénierie, conditions de travail premium, formation continue et parcours de carrière structuré. Un partenariat durable ne se construit pas autrement.",
  },
];
