export type Locale = 'en' | 'fr' | 'ar'

export const localeConfig = {
  en: {
    path: '/',
    lang: 'en',
    dir: 'ltr',
    label: 'English',
    flag: 'EN',
    title: 'AnyTech - Your IT Partner in Tunisia',
    description:
      'AnyTech supports companies with custom software, web and mobile development, cybersecurity, cloud, SEO, digital marketing, and managed IT services.',
  },
  fr: {
    path: '/fr',
    lang: 'fr',
    dir: 'ltr',
    label: 'Français',
    flag: 'FR',
    title: 'AnyTech - Votre partenaire IT en Tunisie',
    description:
      'AnyTech accompagne les entreprises dans leur transformation digitale avec des solutions sur mesure: développement logiciel, web, mobile, cybersécurité, cloud, SEO et infogérance.',
  },
  ar: {
    path: '/ar',
    lang: 'ar',
    dir: 'rtl',
    label: 'العربية',
    flag: 'AR',
    title: 'AnyTech - شريكك التقني في تونس',
    description:
      'AnyTech ترافق الشركات في التحول الرقمي عبر تطوير البرمجيات، الويب، تطبيقات الجوال، الأمن السيبراني، السحابة، SEO، والتسيير التقني.',
  },
} as const

const frContent = {
  nav: ['Services', 'Solutions', 'Expertise', 'Projets', 'Contact'],
  navLabel: 'Navigation principale',
  heroEyebrow: 'YOUR IT PARTNER',
  heroTitle: 'Votre partenaire IT pour avancer plus vite.',
  heroBody:
    'AnyTech accompagne les entreprises dans leur transformation digitale avec des solutions technologiques sur mesure, sécurisées et conçues pour générer de vrais résultats.',
  heroSupport:
    'Software • Web • Mobile • Cybersecurity • Cloud • SEO • Digital Marketing • IT',
  primaryCta: 'Démarrer votre projet',
  secondaryCta: 'Parler à un expert',
  trustText: 'Étude de votre projet offerte • Réponse rapide • Solutions sur mesure',
  partnerEyebrow: 'Plus qu’un prestataire. Votre partenaire IT.',
  partnerTitle: 'Technologie, sécurité et stratégie digitale réunies.',
  partnerBody:
    'Que vous soyez une startup, une PME ou une entreprise en croissance, nous vous accompagnons de l’idée jusqu’à la mise en production, et au-delà.',
  pillars: [
    ['Solutions sur mesure', 'Des technologies adaptées à vos besoins réels.'],
    ['Sécurité intégrée', 'Nous pensons sécurité dès la conception.'],
    ['Accompagnement durable', 'Un partenaire qui reste à vos côtés après la livraison.'],
  ],
  servicesEyebrow: 'Nos expertises',
  servicesTitle: 'Une équipe technologique pour votre projet de bout en bout.',
  servicesIntro:
    'Nous construisons, sécurisons, optimisons et faisons évoluer les systèmes digitaux qui soutiennent votre activité.',
  services: [
    {
      title: 'Développement logiciel',
      body: 'Des applications et plateformes sur mesure pour automatiser vos processus, améliorer votre productivité et répondre précisément à vos besoins.',
      solutions: ['Applications métier', 'Logiciels de gestion', 'SaaS', 'API & systèmes intégrés', 'Automatisation'],
      cta: 'Découvrir le développement',
    },
    {
      title: 'Web development',
      body: 'Des sites modernes, rapides, responsive et optimisés pour convertir vos visiteurs en clients.',
      solutions: ['Sites vitrines', 'Sites corporate', 'E-commerce', 'Applications web', 'Landing pages'],
    },
    {
      title: 'Mobile development',
      body: 'Des applications mobiles modernes et performantes pour Android et iOS, pensées pour l’usage réel de vos clients.',
      solutions: ['Applications iOS', 'Applications Android', 'Cross-platform', 'Applications métier', 'UX/UI mobile'],
    },
    {
      title: 'Cybersécurité',
      body: 'Identification des risques, sécurisation des infrastructures et protection contre les cybermenaces.',
      solutions: ['Audit de sécurité', 'Sécurisation des systèmes', 'Protection des données', 'Sécurité applicative'],
    },
    {
      title: 'Cloud & DevOps',
      body: 'Des infrastructures plus agiles, fiables et scalables pour soutenir vos applications critiques.',
      solutions: ['Cloud', 'Docker', 'CI/CD', 'Déploiement', 'Monitoring'],
    },
    {
      title: 'SEO & marketing digital',
      body: 'SEO, contenu et acquisition digitale pour améliorer votre visibilité et convertir les bonnes audiences.',
      solutions: ['SEO local', 'Google Business', 'Content marketing', 'Social media', 'Publicité digitale'],
    },
    {
      title: 'Infogérance & infrastructure',
      body: 'Maintenance, support et gestion de votre environnement informatique professionnel.',
      solutions: ['Support technique', 'Réseaux', 'Gestion des postes', 'Serveurs', 'Conseil IT'],
    },
    {
      title: 'Matériel informatique',
      body: 'Conseil, installation et maintenance de matériel professionnel adapté à vos besoins.',
      solutions: ['Choix matériel', 'Installation', 'Maintenance', 'Postes de travail', 'Réseaux'],
    },
  ],
  whyTitle: 'Pourquoi AnyTech ?',
  whyBody:
    'Nous ne vendons pas simplement des lignes de code ou des services IT. Nous cherchons à comprendre votre entreprise, vos objectifs et vos contraintes afin de construire une solution réellement utile.',
  whyItems: [
    ['01', 'Sur mesure', 'Chaque entreprise est différente. Nos solutions aussi.'],
    ['02', 'Une vision 360°', 'Développement, infrastructure, sécurité, SEO et marketing réunis au même endroit.'],
    ['03', 'Sécurité by design', 'La sécurité n’est pas une option ajoutée à la fin du projet.'],
    ['04', 'Pensé pour évoluer', 'Nos solutions sont conçues pour accompagner votre croissance.'],
  ],
  solutionsTitle: 'Nos solutions',
  solutions: [
    ['Lancez votre idée.', 'De la conception du MVP au lancement de votre produit digital.', 'MVP • Web • Mobile • SaaS • Branding • SEO'],
    ['Digitalisez votre entreprise.', 'Automatisez vos processus et modernisez votre environnement informatique.', 'Logiciels • ERP • Cloud • Réseaux • Cybersécurité'],
    ['Passez à l’échelle supérieure.', 'Des solutions robustes pour améliorer vos performances et votre infrastructure.', 'Applications métier • Cloud • DevOps • Sécurité • Data'],
  ],
  methodTitle: 'Notre méthode',
  method: [
    ['Comprendre', 'Nous analysons votre activité, vos objectifs, vos utilisateurs et vos contraintes.'],
    ['Stratégie', 'Nous définissons la meilleure approche technique et digitale pour votre projet.'],
    ['Développer', 'Notre équipe transforme la stratégie en produit réel, performant et sécurisé.'],
    ['Lancer', 'Déploiement, configuration, optimisation et accompagnement au lancement.'],
    ['Faire évoluer', 'Maintenance, sécurité, évolution, SEO et optimisation continue.'],
  ],
  techTitle: 'Technologies',
  techBody:
    'Nous sélectionnons notre stack en fonction de vos besoins, de votre budget et de vos objectifs, jamais l’inverse.',
  technologies: ['Next.js', 'React', 'Angular', 'FastAPI', 'Node.js', 'Python', 'PostgreSQL', 'Docker', 'Linux', 'Cloud', 'Git', 'CI/CD', 'APIs', 'AI'],
  seoTitle: 'Créer un site web n’est que la première étape.',
  seoBody:
    'Nous optimisons votre présence digitale pour vous aider à apparaître devant les bonnes personnes, au bon moment.',
  seoItems: ['SEO technique', 'SEO local', 'Optimisation Google', 'Content strategy', 'Core Web Vitals', 'Google Business Profile', 'Conversion optimization'],
  seoCta: 'Améliorer ma visibilité',
  securityTitle: 'Security first',
  securityBody:
    'Une faille de sécurité peut coûter du temps, de l’argent et surtout la confiance de vos clients. AnyTech vous aide à identifier les vulnérabilités et à renforcer votre environnement informatique.',
  securityCta: 'Évaluer ma sécurité',
  projectsTitle: 'Nos réalisations',
  projectsBody: 'Découvrez quelques-uns des projets sur lesquels nous avons accompagné nos clients.',
  projects: [
    ['Web & E-commerce', 'Une expérience digitale pensée pour convertir.'],
    ['Software Solution', 'Une plateforme métier développée sur mesure.'],
    ['Mobile Application', 'Une application conçue pour simplifier l’expérience utilisateur.'],
    ['IT & Infrastructure', 'Une infrastructure sécurisée et optimisée.'],
  ],
  finalTitle: 'Construisons-le ensemble.',
  finalBody:
    'Que vous souhaitiez créer un logiciel, lancer un site web, développer une application mobile, sécuriser votre infrastructure ou améliorer votre visibilité en ligne, notre équipe est là pour vous accompagner.',
  finalNote:
    'Pas encore de cahier des charges ? Aucun problème. Nous pouvons vous aider à définir votre projet.',
  faqTitle: 'Questions fréquentes',
  faq: [
    ['Quels types d’entreprises accompagnez-vous ?', 'Nous travaillons avec des startups, PME, entrepreneurs et entreprises qui souhaitent développer ou améliorer leurs solutions digitales et leur infrastructure IT.'],
    ['Développez-vous des solutions sur mesure ?', 'Oui. Nos logiciels, plateformes web et applications mobiles sont développés selon les besoins spécifiques de chaque entreprise.'],
    ['Pouvez-vous reprendre un projet existant ?', 'Oui. Nous pouvons analyser, maintenir, sécuriser et faire évoluer une solution existante.'],
    ['Proposez-vous de la maintenance après le développement ?', 'Oui. Nous pouvons assurer la maintenance, les mises à jour, la sécurité et l’évolution de votre solution.'],
    ['Faites-vous du SEO local ?', 'Oui. Nous travaillons notamment sur le référencement local, la visibilité Google, le contenu et l’optimisation technique.'],
    ['Pouvez-vous gérer plusieurs besoins IT au même endroit ?', 'Oui. C’est justement notre positionnement: AnyTech est votre IT partner, avec plusieurs expertises réunies au sein d’un même partenaire.'],
  ],
  footerTagline:
    'Solutions digitales, développement logiciel, cybersécurité, cloud, SEO et accompagnement IT pour les entreprises.',
  contact: {
    city: 'Monastir, Tunisie',
    phone: '+216 27 553 981',
    email: 'contact@anytech.tn',
    website: 'www.anytech.tn',
  },
} as const

export const content = {
  fr: frContent,
  en: {
    ...frContent,
    nav: ['Services', 'Solutions', 'Expertise', 'Projects', 'Contact'],
    heroEyebrow: 'YOUR IT PARTNER',
    heroTitle: 'Your IT partner for what comes next.',
    heroBody:
      'AnyTech helps companies transform with secure, custom technology solutions built to create measurable business results.',
    primaryCta: 'Start your project',
    secondaryCta: 'Talk to an expert',
    trustText: 'Free project review • Fast response • Custom solutions',
    footerTagline:
      'Digital solutions, custom software, cybersecurity, cloud, SEO, and IT support for growing companies.',
    faqTitle: 'Questions, answered',
  },
  ar: {
    ...frContent,
    nav: ['الخدمات', 'الحلول', 'الخبرات', 'المشاريع', 'تواصل'],
    heroTitle: 'شريكك التقني للنمو والتحول الرقمي.',
    heroBody:
      'AnyTech ترافق الشركات بحلول تقنية مخصصة وآمنة، من البرمجيات إلى الأمن السيبراني والسحابة وSEO.',
    primaryCta: 'ابدأ مشروعك',
    secondaryCta: 'تحدث مع خبير',
    trustText: 'دراسة مشروع مجانية • رد سريع • حلول مخصصة',
    faqTitle: 'أسئلة شائعة',
  },
} as const

export function getContent(locale: Locale = 'en') {
  return content[locale]
}

export function getLocaleConfig(locale: Locale = 'en') {
  return localeConfig[locale]
}
