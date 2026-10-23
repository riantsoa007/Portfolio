import React, { useState } from "react";

// ─── Design tokens ───────────────────────────────────────────────
const C = {
  ink: "#1C2A2C",
  paper: "#FAF8F4",
  rust: "#A6482A",
  rustDark: "#7E3218",
  rustLight: "#E39272",
  teal: "#2B6B62",
  body: "#3A4648",
  muted: "#5A6466",
  warm: "#6F655A",
  rule: "#E0D8CB",
  navRule: "#E6DFD3",
  chipBorder: "#DCD3C5",
  chipText: "#4E463D",
  chipBg: "#EFE9DF",
  footerText: "#F3EEE6",
  footerMuted: "#A9B4B2",
  footerRule: "#3A4A4C",
};

const F = {
  serif: "'Cormorant Garamond', Georgia, serif",
  sans: "'Hanken Grotesk', system-ui, sans-serif",
  mono: "'JetBrains Mono', monospace",
};

const EMAIL = "ramanampamonjysandratra@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/rsandratra";

// ─── Language Data ───────────────────────────────────────────────
const content = {
  fr: {
    nav: { work: "Projets", experience: "Expérience", skills: "Compétences", education: "Formation", contact: "Contact" },
    hero: {
      kicker: "Antananarivo, Madagascar — Full-stack & IA appliquée",
      role: "Ingénieur Développeur",
      summary: "Ingénieur développeur avec plus de 5 ans d'expérience en développement full-stack (Symfony, React, Next.js, Java) et sur des projets d'intelligence artificielle appliquée.",
      ctaContact: "Me contacter",
    },
    stats: [
      { value: "5+", label: "années d'expérience en développement" },
      { value: "1 000+", label: "appels transcrits et analysés par IA" },
      { value: "90 %+", label: "de précision en transcription Whisper" },
      { value: "15 min → 1 s", label: "temps de chargement du catalogue" },
    ],
    work: {
      label: "Projets marquants",
      title: "Des résultats mesurables, du socle technique à la mise en production.",
      projects: [
        {
          client: "Hubera · 2026",
          metric: "−80 %",
          metricLabel: "de temps de traitement manuel",
          name: "EVAL IA — analyse des appels téléconseillers",
          desc: "Transcription automatique de plus de 1 000 appels avec Whisper et Qwen2.5:14b, et une interface Next.js utilisée chaque jour par l'équipe qualité.",
          stack: ["Python", "Next.js", "Whisper", "Qwen2.5:14b"],
        },
        {
          client: "Hubera · 2026",
          metric: "50+",
          metricLabel: "utilisateurs internes au quotidien",
          name: "FAMAS — logiciel de gestion d'entreprise",
          desc: "Socle technique Symfony + Next.js, plus de 15 fonctionnalités métier, suivi client hebdomadaire et mise en production.",
          stack: ["Next.js", "Symfony", "MySQL"],
        },
        {
          client: "Kill the Tape · Etech",
          metric: "15 min → 1 s",
          metricLabel: "temps de chargement du catalogue",
          name: "Optimisation d'un catalogue Symfony",
          desc: "Refonte des performances, refactorisation de plus de 20 fonctionnalités et migration vers une nouvelle infrastructure sans interruption de service.",
          stack: ["Symfony 7", "Twig", "PostgreSQL"],
        },
      ],
    },
    experience: {
      label: "Expérience",
      title: "Plus de cinq ans à construire des applications web, mobiles et IA.",
      jobs: [
        {
          role: "Développeur Full-Stack (Next.js / Symfony)",
          company: "Hubera",
          location: "Antananarivo, Madagascar",
          period: "Janvier 2026 — aujourd’hui",
          project: "Projet FAMAS — logiciel de gestion d'entreprise",
          highlights: [
            "Conception et mise en place du socle technique, back-end (Symfony) et front-end (Next.js), posant les bases d'une application utilisée au quotidien par plus de 50 utilisateurs internes",
            "Développement de plus de 15 fonctionnalités métier en lien direct avec les besoins du client",
            "Organisation de réunions hebdomadaires de suivi avec le client sur plus de 6 mois de collaboration continue",
            "Déploiement de l'application en préproduction, puis mise en production",
          ],
          stack: ["Next.js", "Symfony", "MySQL", "Git", "JIRA"],
        },
        {
          role: "Développeur IA (Python / Next.js)",
          company: "Hubera",
          location: "Antananarivo, Madagascar",
          period: "Février 2026 — juillet 2026",
          project: "Projet EVAL IA — transcription et analyse d'appels téléphoniques (téléconseillers)",
          highlights: [
            "Transcription automatique de plus de 1 000 appels en Python à l'aide du LLM Qwen2.5:14b et d'un modèle entraîné pour ce cas d'usage, réduisant de 80 % le temps de traitement manuel",
            "Utilisation de Whisper pour la transcription audio des appels, avec un taux de précision supérieur à 90 %",
            "Développement d'une interface Next.js consultée quotidiennement par l'équipe qualité pour l'analyse de plusieurs centaines d'appels",
          ],
          stack: ["Python", "Next.js", "Whisper", "Qwen2.5:14b"],
        },
        {
          role: "Support interne & projets internes (GLPI)",
          company: "Hubera",
          location: "Antananarivo, Madagascar",
          period: "2025 — aujourd’hui",
          project: null,
          highlights: [
            "Support technique interne via GLPI : gestion et résolution de plus de 200 tickets, réduisant de 30 % le temps moyen de résolution",
            "Développement et maintenance d'une dizaine de projets internes à l'entreprise",
          ],
          stack: ["Docker", "PHP", "CodeIgniter", "Symfony"],
        },
        {
          role: "Développeur Symfony / React Native",
          company: "Maison Luciani — Etech Consulting",
          location: "Antananarivo, Madagascar",
          period: "Septembre 2023 — janvier 2025",
          project: null,
          highlights: [
            "Mise en place du socle technique de l'application mobile React Native, utilisée par plusieurs milliers d'utilisateurs",
            "Maintenance évolutive et corrective : réduction de 40 % du nombre de bugs signalés en production",
            "Développement et intégration de plus de 20 API REST avec Symfony",
            "Conception UML (diagrammes de séquence) pour l'ensemble des modules métier",
            "Intégration d’un système de paiement sécurisé BNP Paribas",
            "Génération et déploiement des builds iOS et Android via GitLab CI/CD, avec un cycle de publication bimensuel",
          ],
          stack: ["React Native 0.68", "Symfony 7", "Tailwind", "MySQL", "SQLite", "GitLab CI/CD", "Figma"],
        },
        {
          role: "Développeur Symfony",
          company: "Kill the Tape — Etech Consulting",
          location: "Antananarivo, Madagascar",
          period: "Février 2022 — juin 2024",
          project: null,
          highlights: [
            "Optimisation majeure du temps de chargement du catalogue, passant de 15 minutes à 1 seconde",
            "Amélioration et refactorisation de plus de 20 fonctionnalités existantes pour la performance et la maintenabilité",
            "Développement d'une dizaine de nouvelles fonctionnalités métier",
            "Mise en production de l'application sur une nouvelle infrastructure serveur, sans interruption de service",
          ],
          stack: ["Symfony 7", "Twig", "PostgreSQL", "SVN", "Git", "Figma"],
        },
        {
          role: "Développeur React / Java",
          company: "Aro (assurance agriculture / élevage) — Etech Consulting",
          location: "Antananarivo, Madagascar",
          period: "Février 2022 — février 2023",
          project: null,
          highlights: [
            "Affichage cartographique avec géolocalisation en temps réel, réduisant de 30 % le temps de recherche des utilisateurs",
            "Gestion de plus de 1 000 comptes : création, authentification sécurisée, rôles et permissions",
            "Fiabilisation de la génération de documents HTML → PDF, éliminant plus de 90 % des erreurs de rendu",
            "Cérémonies Agile sur des sprints de 2 semaines : daily, sprint planning, reviews et rétrospectives",
          ],
          stack: ["React 18", "Spring Boot", "Java", "Redis", "Tailwind", "Docker"],
        },
      ],
    },
    skills: {
      label: "Compétences",
      title: "Une stack large, du back-end aux modèles de langage.",
      groups: [
        { label: "Langages & frameworks", items: ["Symfony", "Next.js", "React", "React Native", "Java", "Spring Boot", "Python", "PHP", "JavaScript", "HTML", "CSS"] },
        { label: "IA & traitement du langage", items: ["Whisper", "Qwen2.5:14b", "Entraînement de modèles"] },
        { label: "Bases de données", items: ["MySQL", "PostgreSQL", "Oracle", "MongoDB"] },
        { label: "Outils & environnements", items: ["Git", "Docker", "JIRA", "SVN", "Claude AI"] },
      ],
    },
    education: {
      label: "Formation",
      degrees: [
        {
          degree: "Master 2 MBDS",
          school: "Université Côte d’Azur",
          period: "Janv. 2022 — déc. 2023",
          detail: "Spécialisation Big Data — mention bien",
        },
        {
          degree: "Licence",
          school: "IT University",
          period: "Janv. 2018 — déc. 2021",
          detail: "Spécialisation développement d'applications web — mention assez bien",
        },
      ],
    },
    languages: {
      label: "Langues",
      list: [
        { name: "Français", level: "C1" },
        { name: "Anglais", level: "B2" },
      ],
    },
    contact: {
      label: "Contact",
      title: "Travaillons ensemble.",
      email: "E-mail",
      phone: "Téléphone",
      location: "Localisation",
      backTop: "Retour en haut ↑",
    },
  },
  en: {
    nav: { work: "Work", experience: "Experience", skills: "Skills", education: "Education", contact: "Contact" },
    hero: {
      kicker: "Antananarivo, Madagascar — Full-stack & applied AI",
      role: "Software Engineer",
      summary: "Software engineer with 5+ years of experience in full-stack development (Symfony, React, Next.js, Java) and applied artificial intelligence projects.",
      ctaContact: "Get in touch",
    },
    stats: [
      { value: "5+", label: "years of development experience" },
      { value: "1 000+", label: "calls transcribed and analysed with AI" },
      { value: "90 %+", label: "Whisper transcription accuracy" },
      { value: "15 min → 1 s", label: "catalogue load time" },
    ],
    work: {
      label: "Selected work",
      title: "Measurable results, from technical foundation to production.",
      projects: [
        {
          client: "Hubera · 2026",
          metric: "−80 %",
          metricLabel: "manual processing time",
          name: "EVAL IA — call-centre call analysis",
          desc: "Automatic transcription of 1,000+ calls with Whisper and Qwen2.5:14b, plus a Next.js interface used daily by the quality team.",
          stack: ["Python", "Next.js", "Whisper", "Qwen2.5:14b"],
        },
        {
          client: "Hubera · 2026",
          metric: "50+",
          metricLabel: "daily internal users",
          name: "FAMAS — business management software",
          desc: "Symfony + Next.js foundation, 15+ business features, weekly client follow-up and production release.",
          stack: ["Next.js", "Symfony", "MySQL"],
        },
        {
          client: "Kill the Tape · Etech",
          metric: "15 min → 1 s",
          metricLabel: "catalogue load time",
          name: "Symfony catalogue optimisation",
          desc: "Performance overhaul, 20+ features refactored and migration to a new infrastructure with zero downtime.",
          stack: ["Symfony 7", "Twig", "PostgreSQL"],
        },
      ],
    },
    experience: {
      label: "Experience",
      title: "Five+ years building web, mobile and AI applications.",
      jobs: [
        {
          role: "Full-Stack Developer (Next.js / Symfony)",
          company: "Hubera",
          location: "Antananarivo, Madagascar",
          period: "January 2026 — present",
          project: "FAMAS project — business management software",
          highlights: [
            "Designed and set up the technical foundation, back-end (Symfony) and front-end (Next.js), for an application used daily by 50+ internal users",
            "Built 15+ business features directly driven by client needs",
            "Ran weekly follow-up meetings with the client over 6+ months of continuous collaboration",
            "Deployed the application to pre-production, then to production",
          ],
          stack: ["Next.js", "Symfony", "MySQL", "Git", "JIRA"],
        },
        {
          role: "AI Developer (Python / Next.js)",
          company: "Hubera",
          location: "Antananarivo, Madagascar",
          period: "February 2026 — July 2026",
          project: "EVAL IA project — transcription and analysis of call-centre phone calls",
          highlights: [
            "Automatically transcribed 1,000+ calls in Python using the Qwen2.5:14b LLM and a model trained for this use case, cutting manual processing time by 80%",
            "Used Whisper for call audio transcription, with accuracy above 90%",
            "Built a Next.js interface used daily by the quality team to analyse hundreds of calls",
          ],
          stack: ["Python", "Next.js", "Whisper", "Qwen2.5:14b"],
        },
        {
          role: "Internal Support & Internal Projects (GLPI)",
          company: "Hubera",
          location: "Antananarivo, Madagascar",
          period: "2025 — present",
          project: null,
          highlights: [
            "Internal technical support via GLPI: handled and resolved 200+ tickets, cutting average resolution time by 30%",
            "Developed and maintained around ten internal company projects",
          ],
          stack: ["Docker", "PHP", "CodeIgniter", "Symfony"],
        },
        {
          role: "Symfony / React Native Developer",
          company: "Maison Luciani — Etech Consulting",
          location: "Antananarivo, Madagascar",
          period: "September 2023 — January 2025",
          project: null,
          highlights: [
            "Set up the technical foundation of the React Native mobile app, used by several thousand users",
            "Evolutive and corrective maintenance: 40% fewer bugs reported in production",
            "Built and integrated 20+ REST APIs with Symfony",
            "UML design (sequence diagrams) for every business module",
            "Integrated a secure BNP Paribas payment system",
            "Generated and shipped iOS and Android builds through GitLab CI/CD, moving to a twice-monthly release cycle",
          ],
          stack: ["React Native 0.68", "Symfony 7", "Tailwind", "MySQL", "SQLite", "GitLab CI/CD", "Figma"],
        },
        {
          role: "Symfony Developer",
          company: "Kill the Tape — Etech Consulting",
          location: "Antananarivo, Madagascar",
          period: "February 2022 — June 2024",
          project: null,
          highlights: [
            "Major catalogue load-time optimisation, from 15 minutes down to 1 second",
            "Improved and refactored 20+ existing features for performance and maintainability",
            "Built around ten new business features",
            "Moved the application to a new server infrastructure with zero downtime",
          ],
          stack: ["Symfony 7", "Twig", "PostgreSQL", "SVN", "Git", "Figma"],
        },
        {
          role: "React / Java Developer",
          company: "Aro (agriculture / livestock insurance) — Etech Consulting",
          location: "Antananarivo, Madagascar",
          period: "February 2022 — February 2023",
          project: null,
          highlights: [
            "Built map display with real-time geolocation, cutting user search time by 30%",
            "Managed 1,000+ user accounts: creation, secure authentication, roles and permissions",
            "Hardened HTML → PDF document generation, eliminating 90%+ of rendering errors",
            "Agile ceremonies on 2-week sprints: dailies, sprint planning, reviews and retrospectives",
          ],
          stack: ["React 18", "Spring Boot", "Java", "Redis", "Tailwind", "Docker"],
        },
      ],
    },
    skills: {
      label: "Skills",
      title: "A broad stack, from back-end to language models.",
      groups: [
        { label: "Languages & frameworks", items: ["Symfony", "Next.js", "React", "React Native", "Java", "Spring Boot", "Python", "PHP", "JavaScript", "HTML", "CSS"] },
        { label: "AI & language processing", items: ["Whisper", "Qwen2.5:14b", "Model training"] },
        { label: "Databases", items: ["MySQL", "PostgreSQL", "Oracle", "MongoDB"] },
        { label: "Tools & environments", items: ["Git", "Docker", "JIRA", "SVN", "Claude AI"] },
      ],
    },
    education: {
      label: "Education",
      degrees: [
        {
          degree: "Master 2 MBDS",
          school: "Université Côte d’Azur",
          period: "Jan 2022 — Dec 2023",
          detail: "Big Data specialisation — with honours (bien)",
        },
        {
          degree: "Bachelor's degree",
          school: "IT University",
          period: "Jan 2018 — Dec 2021",
          detail: "Web application development specialisation — with honours (assez bien)",
        },
      ],
    },
    languages: {
      label: "Languages",
      list: [
        { name: "French", level: "C1" },
        { name: "English", level: "B2" },
      ],
    },
    contact: {
      label: "Contact",
      title: "Let's work together.",
      email: "Email",
      phone: "Phone",
      location: "Location",
      backTop: "Back to top ↑",
    },
  },
};

// ─── Shared styles ──────────────────────────────────────────────
const container = { maxWidth: "1160px", margin: "0 auto" };

const sectionLabel = {
  margin: 0, fontSize: "13px", fontWeight: 600, letterSpacing: "0.28em",
  textTransform: "uppercase", color: C.rust,
};

const sectionTitle = {
  margin: 0, fontFamily: F.serif, fontSize: "40px", fontWeight: 500, lineHeight: 1.1,
  color: C.ink, flex: "999 1 480px", maxWidth: "760px",
};

// ─── Icons ──────────────────────────────────────────────────────
const ArrowRight = () => (
  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" /><path d="M13 6l6 6-6 6" />
  </svg>
);

const ArrowUpRight = () => (
  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7" /><path d="M8 7h9v9" />
  </svg>
);

// ─── Small components ───────────────────────────────────────────
const SectionHeading = ({ label, title, mb = "48px" }) => (
  <div style={{
    display: "flex", flexWrap: "wrap", alignItems: "baseline", justifyContent: "space-between",
    gap: "12px 32px", marginBottom: mb,
  }}>
    <h2 style={sectionLabel}>{label}</h2>
    <p style={sectionTitle}>{title}</p>
  </div>
);

const StackChip = ({ name }) => (
  <span style={{
    fontFamily: F.mono, fontSize: "12px", color: C.chipText,
    border: `1px solid ${C.chipBorder}`, borderRadius: "4px", padding: "4px 8px",
  }}>
    {name}
  </span>
);

const SkillChip = ({ name }) => (
  <span style={{
    fontSize: "14px", fontWeight: 500, color: C.ink, background: C.chipBg,
    borderRadius: "4px", padding: "6px 10px",
  }}>
    {name}
  </span>
);

const ProjectCard = ({ project }) => (
  <article style={{
    display: "flex", flexDirection: "column", gap: "14px",
    borderTop: `2px solid ${C.ink}`, paddingTop: "24px",
  }}>
    <span style={{ fontFamily: F.mono, fontSize: "12px", color: C.teal }}>{project.client}</span>
    <span style={{ fontFamily: F.serif, fontSize: "60px", fontWeight: 600, lineHeight: 1, color: C.rust }}>{project.metric}</span>
    <span style={{ fontSize: "14px", color: C.muted, marginTop: "-6px" }}>{project.metricLabel}</span>
    <h3 style={{ margin: "12px 0 0", fontSize: "22px", fontWeight: 600, lineHeight: 1.3, color: C.ink }}>{project.name}</h3>
    <p style={{ margin: 0, fontSize: "16px", lineHeight: 1.6, color: C.body }}>{project.desc}</p>
    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "4px" }}>
      {project.stack.map((s) => <StackChip key={s} name={s} />)}
    </div>
  </article>
);

const ExperienceItem = ({ job }) => (
  <article style={{
    display: "flex", flexWrap: "wrap", gap: "16px 48px", padding: "40px 0",
    borderTop: `1px solid ${C.rule}`,
  }}>
    <div style={{ flex: "1 1 240px", display: "flex", flexDirection: "column", gap: "6px" }}>
      <span style={{ fontSize: "15px", fontStyle: "italic", color: C.warm }}>{job.period}</span>
      <span style={{ fontSize: "16px", fontWeight: 600, color: C.teal }}>{job.company}</span>
      <span style={{ fontSize: "14px", color: C.warm }}>{job.location}</span>
    </div>
    <div style={{ flex: "999 1 560px", minWidth: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
      <h3 style={{ margin: 0, fontSize: "24px", fontWeight: 600, lineHeight: 1.25, color: C.ink }}>{job.role}</h3>
      {job.project && (
        <p style={{ margin: 0, fontSize: "16px", fontWeight: 500, color: C.ink }}>{job.project}</p>
      )}
      <ul style={{
        margin: "4px 0 0", padding: "0 0 0 20px", display: "flex", flexDirection: "column", gap: "8px",
        fontSize: "16px", lineHeight: 1.6, color: C.body,
      }}>
        {job.highlights.map((h, i) => <li key={i} style={{ paddingLeft: "4px" }}>{h}</li>)}
      </ul>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "8px" }}>
        {job.stack.map((s) => <StackChip key={s} name={s} />)}
      </div>
    </div>
  </article>
);

// ─── Main Portfolio ─────────────────────────────────────────────
export default function Portfolio() {
  const [lang, setLang] = useState("fr");
  const t = content[lang];

  const navItems = ["work", "experience", "skills", "education", "contact"];

  const contactItems = [
    { label: t.contact.email, value: EMAIL, href: `mailto:${EMAIL}`, breakAll: true },
    { label: t.contact.phone, value: "+261 34 18 258 32", href: "tel:+261341825832" },
    { label: "LinkedIn", value: "linkedin.com/in/rsandratra", href: LINKEDIN },
    { label: t.contact.location, value: "Antananarivo 101, Madagascar", href: null },
  ];

  return (
    <div lang={lang} style={{
      fontFamily: F.sans, color: C.ink, background: C.paper, minHeight: "100vh", width: "100%",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Hanken+Grotesk:ital,wght@0,400;0,500;0,600;0,700;1,400&family=JetBrains+Mono:wght@400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; background: ${C.paper}; }

        ::selection { background: ${C.chipBg}; color: ${C.ink}; }

        #top, #work, #experience, #skills, #education, #contact { scroll-margin-top: 72px; }

        .pf-link { color: ${C.rust}; text-decoration: none; transition: color 0.2s ease; }
        .pf-link:hover { color: ${C.rustDark}; }

        .nav-link { color: ${C.ink}; text-decoration: none; padding: 10px 0; transition: color 0.2s ease; }
        .nav-link:hover { color: ${C.rust}; }

        .lang-btn {
          min-width: 44px; height: 36px; border: 0; border-radius: 999px; cursor: pointer;
          font-family: ${F.mono}; font-size: 13px; font-weight: 500;
          background: transparent; color: ${C.ink}; transition: background 0.2s ease, color 0.2s ease;
        }
        .lang-btn.active { background: ${C.ink}; color: ${C.paper}; }

        .cta {
          display: flex; align-items: center; justify-content: space-between; gap: 12px;
          min-height: 52px; padding: 0 22px; border-radius: 6px; font-weight: 600; font-size: 16px;
          text-decoration: none; transition: background 0.2s ease, color 0.2s ease;
        }
        .cta-solid { background: ${C.ink}; color: ${C.paper}; }
        .cta-solid:hover { background: ${C.rust}; color: ${C.paper}; }
        .cta-outline { border: 1px solid ${C.ink}; color: ${C.ink}; }
        .cta-outline:hover { background: ${C.ink}; color: ${C.paper}; }

        .footer-link { color: ${C.footerText}; text-decoration: none; transition: color 0.2s ease; }
        .footer-link:hover { color: ${C.rustLight}; }

        a:focus-visible, button:focus-visible { outline: 2px solid ${C.rust}; outline-offset: 3px; }
        footer a:focus-visible { outline-color: ${C.rustLight}; }

        @media (prefers-reduced-motion: reduce) {
          html { scroll-behavior: auto; }
          * { transition: none !important; }
        }
      `}</style>

      {/* ─── Navigation ─── */}
      <header style={{
        position: "sticky", top: 0, zIndex: 10, background: "rgba(250,248,244,0.94)",
        backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)",
        borderBottom: `1px solid ${C.navRule}`,
      }}>
        <div style={{
          ...container, padding: "14px 24px", display: "flex", flexWrap: "wrap", alignItems: "center",
          justifyContent: "space-between", gap: "12px 24px",
        }}>
          <a href="#top" style={{
            fontFamily: F.serif, fontSize: "24px", fontWeight: 600, color: C.ink,
            letterSpacing: "-0.01em", textDecoration: "none",
          }}>
            R. Ramanampamonjy
          </a>
          <nav aria-label="Navigation" style={{
            display: "flex", flexWrap: "wrap", alignItems: "center", gap: "4px 22px",
            fontSize: "15px", fontWeight: 500,
          }}>
            {navItems.map((s) => (
              <a key={s} href={`#${s}`} className="nav-link">{t.nav[s]}</a>
            ))}
            <div role="group" aria-label="Langue / Language" style={{
              display: "flex", border: `1px solid ${C.ink}`, borderRadius: "999px", padding: "3px", gap: "2px",
            }}>
              {["fr", "en"].map((code) => (
                <button key={code} type="button" aria-pressed={lang === code}
                  className={`lang-btn ${lang === code ? "active" : ""}`}
                  onClick={() => setLang(code)}>
                  {code.toUpperCase()}
                </button>
              ))}
            </div>
          </nav>
        </div>
      </header>

      <main id="top">
        {/* ─── Hero ─── */}
        <section style={{ ...container, padding: "96px 24px 0" }}>
          <p style={{
            margin: "0 0 28px", fontFamily: F.mono, fontSize: "13px", color: C.teal, letterSpacing: "0.04em",
          }}>
            {t.hero.kicker}
          </p>
          <h1 style={{
            margin: 0, fontFamily: F.serif, fontWeight: 500, fontSize: "clamp(56px, 10vw, 128px)",
            lineHeight: 0.92, letterSpacing: "-0.025em", color: C.ink,
          }}>
            Riantsoa<br />Ramanampamonjy
          </h1>
          <div style={{
            display: "flex", flexWrap: "wrap", gap: "32px 64px", alignItems: "flex-end",
            justifyContent: "space-between", marginTop: "40px", paddingBottom: "40px",
            borderBottom: `2px solid ${C.rust}`,
          }}>
            <div style={{ flex: "999 1 520px", minWidth: 0 }}>
              <p style={{ margin: "0 0 18px", fontSize: "26px", fontWeight: 500, color: C.rust }}>{t.hero.role}</p>
              <p style={{ margin: 0, maxWidth: "620px", fontSize: "19px", lineHeight: 1.6, color: C.body }}>{t.hero.summary}</p>
            </div>
            <div style={{ flex: "1 1 260px", display: "flex", flexDirection: "column", gap: "14px" }}>
              <a href={`mailto:${EMAIL}`} className="cta cta-solid">
                <span>{t.hero.ctaContact}</span>
                <ArrowRight />
              </a>
              <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="cta cta-outline">
                <span>LinkedIn</span>
                <ArrowUpRight />
              </a>
            </div>
          </div>

          {/* Stats */}
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "32px", padding: "40px 0 0",
          }}>
            {t.stats.map((s) => (
              <div key={s.value} style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <span style={{ fontFamily: F.serif, fontSize: "52px", fontWeight: 600, lineHeight: 1, color: C.ink }}>{s.value}</span>
                <span style={{ fontSize: "15px", lineHeight: 1.45, color: C.muted }}>{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Selected work ─── */}
        <section id="work" style={{ ...container, padding: "128px 24px 0" }}>
          <SectionHeading label={t.work.label} title={t.work.title} />
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "48px 40px",
          }}>
            {t.work.projects.map((p) => <ProjectCard key={p.name} project={p} />)}
          </div>
        </section>

        {/* ─── Experience ─── */}
        <section id="experience" style={{ ...container, padding: "128px 24px 0" }}>
          <SectionHeading label={t.experience.label} title={t.experience.title} mb="24px" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            {t.experience.jobs.map((job, i) => <ExperienceItem key={i} job={job} />)}
          </div>
        </section>

        {/* ─── Skills ─── */}
        <section id="skills" style={{ ...container, padding: "128px 24px 0" }}>
          <SectionHeading label={t.skills.label} title={t.skills.title} />
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "40px 32px",
          }}>
            {t.skills.groups.map((g) => (
              <div key={g.label} style={{
                display: "flex", flexDirection: "column", gap: "16px",
                borderTop: `2px solid ${C.ink}`, paddingTop: "20px",
              }}>
                <h3 style={{ margin: 0, fontSize: "17px", fontWeight: 600, color: C.ink }}>{g.label}</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {g.items.map((n) => <SkillChip key={n} name={n} />)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Education + Languages ─── */}
        <section id="education" style={{ ...container, padding: "128px 24px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "64px" }}>
            <div style={{ flex: "999 1 560px", minWidth: 0 }}>
              <h2 style={{ ...sectionLabel, margin: "0 0 32px" }}>{t.education.label}</h2>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {t.education.degrees.map((d) => (
                  <div key={d.degree} style={{
                    display: "flex", flexWrap: "wrap", gap: "8px 32px", padding: "24px 0",
                    borderTop: `1px solid ${C.rule}`,
                  }}>
                    <span style={{ flex: "1 1 180px", fontSize: "15px", fontStyle: "italic", color: C.warm }}>{d.period}</span>
                    <div style={{ flex: "999 1 320px", display: "flex", flexDirection: "column", gap: "4px" }}>
                      <span style={{ fontFamily: F.serif, fontSize: "28px", fontWeight: 600, color: C.ink }}>{d.degree}</span>
                      <span style={{ fontSize: "16px", fontWeight: 600, color: C.teal }}>{d.school}</span>
                      <span style={{ fontSize: "15px", lineHeight: 1.55, color: C.body }}>{d.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ flex: "1 1 260px" }}>
              <h2 style={{ ...sectionLabel, margin: "0 0 32px" }}>{t.languages.label}</h2>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {t.languages.list.map((x) => (
                  <div key={x.name} style={{
                    display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "16px",
                    padding: "24px 0", borderTop: `1px solid ${C.rule}`,
                  }}>
                    <span style={{ fontFamily: F.serif, fontSize: "28px", fontWeight: 600, color: C.ink }}>{x.name}</span>
                    <span style={{ fontFamily: F.mono, fontSize: "14px", color: C.teal }}>{x.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ─── Contact / Footer ─── */}
      <footer id="contact" style={{ background: C.ink, color: C.footerText }}>
        <div style={{ ...container, padding: "112px 24px 40px" }}>
          <h2 style={{ ...sectionLabel, margin: "0 0 20px", color: C.rustLight }}>{t.contact.label}</h2>
          <p style={{
            margin: "0 0 48px", fontFamily: F.serif, fontSize: "clamp(44px, 7vw, 88px)", fontWeight: 500,
            lineHeight: 1, letterSpacing: "-0.02em",
          }}>
            {t.contact.title}
          </p>
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "32px",
            padding: "40px 0", borderTop: `1px solid ${C.footerRule}`, borderBottom: `1px solid ${C.footerRule}`,
          }}>
            {contactItems.map((c) => (
              <div key={c.label} style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span style={{ fontFamily: F.mono, fontSize: "12px", color: C.footerMuted }}>{c.label}</span>
                {c.href ? (
                  <a href={c.href} className="footer-link"
                    {...(c.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    style={{ fontSize: "18px", fontWeight: 500, wordBreak: c.breakAll ? "break-all" : "normal" }}>
                    {c.value}
                  </a>
                ) : (
                  <span style={{ fontSize: "18px", fontWeight: 500 }}>{c.value}</span>
                )}
              </div>
            ))}
          </div>
          <div style={{
            display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "12px",
            paddingTop: "28px", fontSize: "14px", color: C.footerMuted,
          }}>
            <span>© {new Date().getFullYear()} Riantsoa Ramanampamonjy</span>
            <a href="#top" className="pf-link" style={{ color: C.rustLight }}>{t.contact.backTop}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}