import React, { useState, useEffect, useRef, useCallback } from "react";

// ─── Language Data ───────────────────────────────────────────────
const content = {
  en: {
    nav: { about: "About", skills: "Skills", experience: "Experience", education: "Education", contact: "Contact" },
    hero: {
      greeting: "Hello, I'm",
      name: "Riantsoa",
      surname: "Ramanampamonjy",
      role: "Software Engineer",
      subtitle: "Building performant web & mobile experiences with Symfony, React & React Native",
      cta: "Explore my work",
      download: "Download CV",
    },
    about: {
      title: "About Me",
      p1: "I'm a passionate Software Engineer based in Antananarivo, Madagascar, with a Master's degree in Big Data from Université Côte d'Azur (Honors).",
      p2: "With 3+ years of professional experience, I specialize in building robust web applications with Symfony and interactive mobile experiences with React Native. I thrive in Agile environments and love optimizing performance — like reducing a catalog load time from 15 minutes to just 1 second.",
      p3: "I'm driven by clean code, impactful solutions, and continuous learning.",
    },
    skills: {
      title: "Technical Arsenal",
      categories: {
        languages: "Languages & Frameworks",
        databases: "Databases",
        tools: "Tools & DevOps",
        soft: "Soft Skills",
      },
    },
    experience: {
      title: "Professional Journey",
      jobs: [
        {
          role: "Symfony / React Native Developer",
          project: "Maison Luciani",
          company: "Etech Consulting",
          location: "Antananarivo, Madagascar",
          period: "Sep 2023 — Jan 2025",
          highlights: [
            "Architected the mobile application foundation using React Native",
            "Developed and integrated REST APIs with Symfony",
            "Integrated a secure BNP Paribas payment system",
            "Generated iOS & Android builds via GitLab CI/CD",
            "Contributed to UML design and functional/technical specifications",
            "Practiced Agile: stand-ups, sprint planning, reviews & retrospectives",
          ],
        },
        {
          role: "Symfony Developer",
          project: "Kill the Tape",
          company: "Etech Consulting",
          location: "Antananarivo, Madagascar",
          period: "Feb 2022 — Jun 2024",
          highlights: [
            "Optimized catalog loading from 15 min → 1 sec (900x improvement)",
            "Refactored legacy features for better performance & maintainability",
            "Developed new business features from functional & technical specs",
            "Prepared and deployed application on new server infrastructure",
          ],
        },
        {
          role: "React Developer",
          project: "Aro (Insurance — Agriculture/Livestock)",
          company: "Etech Consulting",
          location: "Antananarivo, Madagascar",
          period: "Feb 2022 — Feb 2023",
          highlights: [
            "Implemented real-time geolocation map display",
            "Built user management: authentication, roles & permissions",
            "Improved HTML → PDF document generation system",
            "Active participant in Agile ceremonies",
          ],
        },
      ],
    },
    education: {
      title: "Education",
      degrees: [
        {
          degree: "Master 2 MBDS",
          school: "Université Côte d'Azur",
          period: "2022 — 2023",
          detail: "Big Data Specialization — Honors",
        },
        {
          degree: "Licence (Bachelor's)",
          school: "IT University",
          period: "2018 — 2021",
          detail: "Application & Web Development — Merit",
        },
      ],
    },
    contact: {
      title: "Let's Connect",
      subtitle: "I'm always open to new opportunities and collaborations.",
      email: "Email",
      phone: "Phone",
      location: "Location",
      linkedin: "LinkedIn",
      send: "Send Message",
      namePlaceholder: "Your name",
      emailPlaceholder: "Your email",
      messagePlaceholder: "Your message...",
    },
    footer: "Designed & built with passion",
  },
  fr: {
    nav: { about: "À propos", skills: "Compétences", experience: "Expérience", education: "Formation", contact: "Contact" },
    hero: {
      greeting: "Bonjour, je suis",
      name: "Riantsoa",
      surname: "Ramanampamonjy",
      role: "Ingénieur Logiciel",
      subtitle: "Je crée des expériences web & mobile performantes avec Symfony, React & React Native",
      cta: "Découvrir mon travail",
      download: "Télécharger CV",
    },
    about: {
      title: "À Propos",
      p1: "Je suis un Ingénieur Logiciel passionné basé à Antananarivo, Madagascar, titulaire d'un Master en Big Data de l'Université Côte d'Azur (Mention Bien).",
      p2: "Fort de plus de 3 ans d'expérience professionnelle, je me spécialise dans la construction d'applications web robustes avec Symfony et d'expériences mobiles interactives avec React Native. Je m'épanouis dans les environnements Agile et j'adore l'optimisation des performances — comme réduire un temps de chargement de catalogue de 15 minutes à seulement 1 seconde.",
      p3: "Je suis motivé par le code propre, les solutions à fort impact et l'apprentissage continu.",
    },
    skills: {
      title: "Arsenal Technique",
      categories: {
        languages: "Langages & Frameworks",
        databases: "Bases de données",
        tools: "Outils & DevOps",
        soft: "Savoir-être",
      },
    },
    experience: {
      title: "Parcours Professionnel",
      jobs: [
        {
          role: "Développeur Symfony / React Native",
          project: "Maison Luciani",
          company: "Etech Consulting",
          location: "Antananarivo, Madagascar",
          period: "Sep 2023 — Jan 2025",
          highlights: [
            "Mise en place de la fondation technique de l'application mobile React Native",
            "Développement et intégration d'APIs REST avec Symfony",
            "Intégration d'un système de paiement sécurisé BNP Paribas",
            "Génération des builds iOS & Android via GitLab CI/CD",
            "Contribution à la conception UML et aux spécifications fonctionnelles/techniques",
            "Pratique Agile : stand-ups, planification de sprints, revues & rétrospectives",
          ],
        },
        {
          role: "Développeur Symfony",
          project: "Kill the Tape",
          company: "Etech Consulting",
          location: "Antananarivo, Madagascar",
          period: "Fév 2022 — Juin 2024",
          highlights: [
            "Optimisation du chargement catalogue de 15 min → 1 sec (amélioration x900)",
            "Refactoring des fonctionnalités existantes pour la performance & maintenabilité",
            "Développement de nouvelles fonctionnalités métier selon les spécifications",
            "Préparation et déploiement de l'application sur une nouvelle infrastructure",
          ],
        },
        {
          role: "Développeur React",
          project: "Aro (Assurance Agriculture/Élevage)",
          company: "Etech Consulting",
          location: "Antananarivo, Madagascar",
          period: "Fév 2022 — Fév 2023",
          highlights: [
            "Implémentation d'une carte avec géolocalisation en temps réel",
            "Gestion utilisateurs : authentification, rôles & permissions",
            "Amélioration du système de génération HTML → PDF",
            "Participation active aux cérémonies Agile",
          ],
        },
      ],
    },
    education: {
      title: "Formation",
      degrees: [
        {
          degree: "Master 2 MBDS",
          school: "Université Côte d'Azur",
          period: "2022 — 2023",
          detail: "Spécialisation Big Data — Mention Bien",
        },
        {
          degree: "Licence",
          school: "IT University",
          period: "2018 — 2021",
          detail: "Développement Application & Web — Mention Assez Bien",
        },
      ],
    },
    contact: {
      title: "Connectons-nous",
      subtitle: "Je suis toujours ouvert aux nouvelles opportunités et collaborations.",
      email: "Email",
      phone: "Téléphone",
      location: "Localisation",
      linkedin: "LinkedIn",
      send: "Envoyer",
      namePlaceholder: "Votre nom",
      emailPlaceholder: "Votre email",
      messagePlaceholder: "Votre message...",
    },
    footer: "Conçu & développé avec passion",
  },
};

const skillsData = {
  languages: [
    { name: "Symfony", level: 95, icon: "🎵" },
    { name: "React", level: 90, icon: "⚛️" },
    { name: "React Native", level: 88, icon: "📱" },
    { name: "PHP", level: 93, icon: "🐘" },
    { name: "JavaScript", level: 90, icon: "✨" },
    { name: "Java", level: 75, icon: "☕" },
  ],
  databases: [
    { name: "MySQL", level: 90, icon: "🗄️" },
    { name: "PostgreSQL", level: 85, icon: "🐘" },
    { name: "MongoDB", level: 78, icon: "🍃" },
    { name: "Oracle", level: 70, icon: "🔴" },
  ],
  tools: [
    { name: "Git", level: 92, icon: "🔀" },
    { name: "Docker", level: 85, icon: "🐳" },
    { name: "GitLab CI/CD", level: 82, icon: "🚀" },
    { name: "JIRA", level: 88, icon: "📋" },
    { name: "SVN", level: 75, icon: "📂" },
  ],
  soft: [
    { name: "Agile / Scrum", level: 92, icon: "🔄" },
    { name: "UML Design", level: 85, icon: "📐" },
    { name: "REST API Design", level: 90, icon: "🔗" },
    { name: "Problem Solving", level: 95, icon: "🧩" },
  ],
};

// ─── Animated Background Particles ──────────────────────────────
const ParticleField = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const mouse = useRef({ x: -1000, y: -1000 });
  const raf = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const count = Math.min(80, Math.floor((w * h) / 15000));
    particles.current = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 2 + 1,
      o: Math.random() * 0.4 + 0.1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const pts = particles.current;
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        const dx = mouse.current.x - p.x;
        const dy = mouse.current.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          p.x -= dx * 0.01;
          p.y -= dy * 0.01;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212,175,55,${p.o})`;
        ctx.fill();

        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j];
          const d = Math.hypot(p.x - q.x, p.y - q.y);
          if (d < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(212,175,55,${0.08 * (1 - d / 120)})`;
            ctx.stroke();
          }
        }
      }
      raf.current = requestAnimationFrame(draw);
    };

    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    const onMouse = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouse);
    draw();

    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
};

// ─── Intersection Observer Hook ─────────────────────────────────
const useInView = (threshold = 0.15) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.unobserve(el); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
};

// ─── Skill Bar Component ────────────────────────────────────────
const SkillBar = ({ name, level, icon, delay, inView }) => (
  <div style={{
    display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px",
    opacity: inView ? 1 : 0, transform: inView ? "translateX(0)" : "translateX(-30px)",
    transition: `all 0.6s cubic-bezier(.22,1,.36,1) ${delay}s`,
  }}>
    <span style={{ fontSize: "20px", width: "28px", textAlign: "center" }}>{icon}</span>
    <div style={{ flex: 1 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
        <span style={{ fontSize: "13px", fontWeight: 600, color: "#e8e0d0", fontFamily: "'DM Sans', sans-serif" }}>{name}</span>
        <span style={{ fontSize: "12px", color: "#d4af37", fontFamily: "'JetBrains Mono', monospace" }}>{level}%</span>
      </div>
      <div style={{ height: "6px", borderRadius: "3px", background: "rgba(255,255,255,0.06)", overflow: "hidden" }}>
        <div style={{
          height: "100%", borderRadius: "3px",
          background: "linear-gradient(90deg, #d4af37, #f0d060)",
          width: inView ? `${level}%` : "0%",
          transition: `width 1.2s cubic-bezier(.22,1,.36,1) ${delay + 0.2}s`,
        }} />
      </div>
    </div>
  </div>
);

// ─── Timeline Card ──────────────────────────────────────────────
const TimelineCard = ({ job, index, inView }) => (
  <div style={{
    position: "relative", paddingLeft: "40px", paddingBottom: "48px",
    opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(40px)",
    transition: `all 0.7s cubic-bezier(.22,1,.36,1) ${index * 0.2}s`,
  }}>
    {/* Timeline line */}
    <div style={{
      position: "absolute", left: "8px", top: "12px", bottom: 0, width: "2px",
      background: "linear-gradient(to bottom, #d4af37, rgba(212,175,55,0.1))",
    }} />
    {/* Timeline dot */}
    <div style={{
      position: "absolute", left: "0", top: "6px", width: "18px", height: "18px",
      borderRadius: "50%", border: "2px solid #d4af37", background: "#0d0d0d",
      boxShadow: "0 0 12px rgba(212,175,55,0.3)",
    }} />
    <div style={{
      background: "linear-gradient(135deg, rgba(212,175,55,0.06), rgba(255,255,255,0.02))",
      border: "1px solid rgba(212,175,55,0.12)", borderRadius: "16px", padding: "28px",
      backdropFilter: "blur(10px)",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px", marginBottom: "8px" }}>
        <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#d4af37", margin: 0, fontFamily: "'Playfair Display', serif" }}>{job.role}</h3>
        <span style={{ fontSize: "12px", color: "#999", fontFamily: "'JetBrains Mono', monospace", whiteSpace: "nowrap", background: "rgba(212,175,55,0.1)", padding: "4px 10px", borderRadius: "20px" }}>{job.period}</span>
      </div>
      <p style={{ fontSize: "14px", color: "#b8a070", margin: "0 0 4px", fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}>{job.project}</p>
      <p style={{ fontSize: "12px", color: "#777", margin: "0 0 16px", fontFamily: "'DM Sans', sans-serif" }}>{job.company} · {job.location}</p>
      <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
        {job.highlights.map((h, i) => (
          <li key={i} style={{
            fontSize: "13px", color: "#c0b89a", lineHeight: 1.7, paddingLeft: "18px", position: "relative",
            fontFamily: "'DM Sans', sans-serif", marginBottom: "4px",
          }}>
            <span style={{ position: "absolute", left: 0, color: "#d4af37" }}>›</span>
            {h}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

// ─── Main Portfolio ─────────────────────────────────────────────
export default function Portfolio() {
  const [lang, setLang] = useState("en");
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroLoaded, setHeroLoaded] = useState(false);
  const t = content[lang];

  useEffect(() => {
    const timer = setTimeout(() => setHeroLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY);
      const sections = ["hero", "about", "skills", "experience", "education", "contact"];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.4) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  }, []);

  const [aboutRef, aboutInView] = useInView();
  const [skillsRef, skillsInView] = useInView();
  const [expRef, expInView] = useInView();
  const [eduRef, eduInView] = useInView();
  const [contactRef, contactInView] = useInView();

  const navItems = ["about", "skills", "experience", "education", "contact"];

  return (
    <div style={{
      minHeight: "100vh", background: "#0a0a0a", color: "#e8e0d0", margin: 0, padding: 0,
      fontFamily: "'DM Sans', sans-serif", overflowX: "hidden",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=DM+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@300;400;500&display=swap');

        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { background: #0a0a0a; overflow-x: hidden; }

        ::selection { background: rgba(212,175,55,0.3); color: #fff; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #0a0a0a; }
        ::-webkit-scrollbar-thumb { background: #d4af37; border-radius: 3px; }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(212,175,55,0.2); }
          50% { box-shadow: 0 0 40px rgba(212,175,55,0.4); }
        }
        @keyframes text-shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }
        @keyframes blink-caret {
          50% { border-color: transparent; }
        }
        @keyframes grain {
          0%, 100% { transform: translate(0,0); }
          10% { transform: translate(-5%,-10%); }
          20% { transform: translate(-15%,5%); }
          30% { transform: translate(7%,-25%); }
          40% { transform: translate(-5%,25%); }
          50% { transform: translate(-15%,10%); }
          60% { transform: translate(15%,0%); }
          70% { transform: translate(0%,15%); }
          80% { transform: translate(3%,35%); }
          90% { transform: translate(-10%,10%); }
        }

        .grain-overlay {
          position: fixed; top: -50%; left: -50%; width: 200%; height: 200%;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none; z-index: 1; opacity: 0.6;
          animation: grain 8s steps(10) infinite;
        }

        .nav-link {
          background: none; border: none; color: #888; font-size: 13px; cursor: pointer;
          font-family: 'JetBrains Mono', monospace; padding: 8px 16px; border-radius: 20px;
          transition: all 0.3s ease; text-transform: uppercase; letter-spacing: 1px;
          font-weight: 400;
        }
        .nav-link:hover { color: #d4af37; background: rgba(212,175,55,0.08); }
        .nav-link.active { color: #d4af37; background: rgba(212,175,55,0.12); }

        .lang-btn {
          background: none; border: 1px solid rgba(212,175,55,0.3); color: #d4af37;
          font-size: 12px; cursor: pointer; padding: 6px 14px; border-radius: 20px;
          font-family: 'JetBrains Mono', monospace; transition: all 0.3s ease;
          font-weight: 500; letter-spacing: 1px;
        }
        .lang-btn:hover { background: rgba(212,175,55,0.15); border-color: #d4af37; }

        .hero-cta {
          display: inline-flex; align-items: center; gap: 10px; padding: 16px 36px;
          background: linear-gradient(135deg, #d4af37, #c49b2a); color: #0a0a0a;
          border: none; border-radius: 50px; font-size: 15px; font-weight: 700;
          cursor: pointer; font-family: 'DM Sans', sans-serif; letter-spacing: 0.5px;
          transition: all 0.4s cubic-bezier(.22,1,.36,1); box-shadow: 0 4px 24px rgba(212,175,55,0.3);
        }
        .hero-cta:hover {
          transform: translateY(-3px); box-shadow: 0 8px 40px rgba(212,175,55,0.5);
          background: linear-gradient(135deg, #e0c050, #d4af37);
        }

        .hero-cta-outline {
          display: inline-flex; align-items: center; gap: 10px; padding: 15px 36px;
          background: transparent; color: #d4af37;
          border: 2px solid rgba(212,175,55,0.4); border-radius: 50px; font-size: 15px;
          font-weight: 600; cursor: pointer; font-family: 'DM Sans', sans-serif;
          letter-spacing: 0.5px; transition: all 0.4s cubic-bezier(.22,1,.36,1);
        }
        .hero-cta-outline:hover {
          transform: translateY(-3px); border-color: #d4af37;
          background: rgba(212,175,55,0.08);
        }

        .section-title {
          font-family: 'Playfair Display', serif; font-size: clamp(32px, 5vw, 52px);
          font-weight: 900; margin-bottom: 16px; position: relative; display: inline-block;
        }
        .section-title::after {
          content: ''; position: absolute; bottom: -8px; left: 0; width: 60px; height: 3px;
          background: linear-gradient(90deg, #d4af37, transparent); border-radius: 2px;
        }

        .stat-card {
          text-align: center; padding: 24px;
          background: linear-gradient(135deg, rgba(212,175,55,0.08), rgba(255,255,255,0.02));
          border: 1px solid rgba(212,175,55,0.1); border-radius: 16px;
          transition: all 0.4s ease;
        }
        .stat-card:hover {
          transform: translateY(-4px); border-color: rgba(212,175,55,0.25);
          box-shadow: 0 8px 30px rgba(212,175,55,0.1);
        }

        .contact-input {
          width: 100%; padding: 14px 20px; background: rgba(255,255,255,0.04);
          border: 1px solid rgba(212,175,55,0.15); border-radius: 12px; color: #e8e0d0;
          font-size: 14px; font-family: 'DM Sans', sans-serif; outline: none;
          transition: all 0.3s ease;
        }
        .contact-input:focus {
          border-color: #d4af37; box-shadow: 0 0 20px rgba(212,175,55,0.1);
          background: rgba(255,255,255,0.06);
        }
        .contact-input::placeholder { color: #666; }

        .contact-submit {
          width: 100%; padding: 16px; background: linear-gradient(135deg, #d4af37, #c49b2a);
          color: #0a0a0a; border: none; border-radius: 12px; font-size: 16px;
          font-weight: 700; cursor: pointer; font-family: 'DM Sans', sans-serif;
          transition: all 0.4s ease; letter-spacing: 0.5px;
        }
        .contact-submit:hover {
          box-shadow: 0 8px 30px rgba(212,175,55,0.4); transform: translateY(-2px);
        }

        .hamburger {
          display: none; background: none; border: none; cursor: pointer; padding: 8px;
          z-index: 1001;
        }
        .hamburger span {
          display: block; width: 24px; height: 2px; background: #d4af37;
          margin: 5px 0; transition: all 0.3s ease; border-radius: 2px;
        }

        @media (max-width: 768px) {
          .hamburger { display: block; }
          .desktop-nav { display: none !important; }
          .mobile-menu {
            position: fixed; top: 0; right: 0; width: 280px; height: 100vh;
            background: rgba(10,10,10,0.98); backdrop-filter: blur(20px);
            display: flex; flex-direction: column; padding: 80px 30px 30px;
            gap: 8px; z-index: 1000; border-left: 1px solid rgba(212,175,55,0.1);
            transform: translateX(100%); transition: transform 0.4s cubic-bezier(.22,1,.36,1);
          }
          .mobile-menu.open { transform: translateX(0); }
          .mobile-menu .nav-link {
            font-size: 16px; text-align: left; padding: 12px 16px;
          }
        }
      `}</style>

      <div className="grain-overlay" />
      <ParticleField />

      {/* ─── Navigation ─── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 999, padding: "16px 40px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        background: scrollY > 50 ? "rgba(10,10,10,0.9)" : "transparent",
        backdropFilter: scrollY > 50 ? "blur(20px)" : "none",
        borderBottom: scrollY > 50 ? "1px solid rgba(212,175,55,0.08)" : "none",
        transition: "all 0.4s ease",
      }}>
        <div style={{
          fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: 900,
          color: "#d4af37", cursor: "pointer", letterSpacing: "-0.5px",
        }} onClick={() => scrollTo("hero")}>
          R<span style={{ color: "#e8e0d0" }}>.</span>R
        </div>

        <div className="desktop-nav" style={{ display: "flex", gap: "4px", alignItems: "center" }}>
          {navItems.map((s) => (
            <button key={s} className={`nav-link ${activeSection === s ? "active" : ""}`}
              onClick={() => scrollTo(s)}>
              {t.nav[s]}
            </button>
          ))}
          <div style={{ width: "1px", height: "20px", background: "rgba(255,255,255,0.1)", margin: "0 8px" }} />
          <button className="lang-btn" onClick={() => setLang(l => l === "en" ? "fr" : "en")}>
            {lang === "en" ? "FR" : "EN"}
          </button>
        </div>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span style={{ transform: menuOpen ? "rotate(45deg) translate(5px,5px)" : "none" }} />
          <span style={{ opacity: menuOpen ? 0 : 1 }} />
          <span style={{ transform: menuOpen ? "rotate(-45deg) translate(5px,-5px)" : "none" }} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {navItems.map((s) => (
          <button key={s} className={`nav-link ${activeSection === s ? "active" : ""}`}
            onClick={() => scrollTo(s)}>{t.nav[s]}</button>
        ))}
        <button className="lang-btn" style={{ marginTop: "16px", alignSelf: "flex-start" }}
          onClick={() => { setLang(l => l === "en" ? "fr" : "en"); setMenuOpen(false); }}>
          {lang === "en" ? "FR 🇫🇷" : "EN 🇬🇧"}
        </button>
      </div>
      {menuOpen && <div onClick={() => setMenuOpen(false)} style={{ position: "fixed", inset: 0, zIndex: 998, background: "rgba(0,0,0,0.5)" }} />}

      {/* ─── Hero Section ─── */}
      <section id="hero" style={{
        minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
        position: "relative", padding: "120px 40px 80px", overflow: "hidden",
      }}>
        {/* Large decorative elements */}
        <div style={{
          position: "absolute", top: "-20%", right: "-10%", width: "600px", height: "600px",
          borderRadius: "50%", border: "1px solid rgba(212,175,55,0.05)",
          animation: "float 8s ease-in-out infinite",
        }} />
        <div style={{
          position: "absolute", bottom: "-10%", left: "-5%", width: "400px", height: "400px",
          borderRadius: "50%", background: "radial-gradient(circle, rgba(212,175,55,0.04) 0%, transparent 70%)",
          animation: "float 12s ease-in-out infinite reverse",
        }} />

        <div style={{ maxWidth: "900px", position: "relative", zIndex: 2, textAlign: "center" }}>
          <p style={{
            fontFamily: "'JetBrains Mono', monospace", fontSize: "14px", color: "#d4af37",
            marginBottom: "20px", letterSpacing: "4px", textTransform: "uppercase",
            opacity: heroLoaded ? 1 : 0, transform: heroLoaded ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s cubic-bezier(.22,1,.36,1) 0.2s",
          }}>
            {t.hero.greeting}
          </p>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontSize: "clamp(48px, 8vw, 96px)",
            fontWeight: 900, lineHeight: 1, marginBottom: "8px",
            background: "linear-gradient(135deg, #d4af37 0%, #f5e6a3 40%, #d4af37 60%, #b8941f 100%)",
            backgroundSize: "200% auto", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            animation: "text-shimmer 4s linear infinite",
            opacity: heroLoaded ? 1 : 0, transform: heroLoaded ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s cubic-bezier(.22,1,.36,1) 0.4s",
          }}>
            {t.hero.name}
          </h1>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px, 4vw, 44px)",
            fontWeight: 400, color: "#c0b89a", lineHeight: 1.2, marginBottom: "24px",
            opacity: heroLoaded ? 1 : 0, transform: heroLoaded ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s cubic-bezier(.22,1,.36,1) 0.6s",
          }}>
            {t.hero.surname}
          </h2>

          <div style={{
            display: "inline-block", padding: "8px 28px", borderRadius: "30px",
            border: "1px solid rgba(212,175,55,0.3)", marginBottom: "28px",
            background: "rgba(212,175,55,0.06)",
            opacity: heroLoaded ? 1 : 0, transform: heroLoaded ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s cubic-bezier(.22,1,.36,1) 0.8s",
          }}>
            <span style={{
              fontFamily: "'JetBrains Mono', monospace", fontSize: "14px", color: "#d4af37",
              letterSpacing: "3px", textTransform: "uppercase", fontWeight: 500,
            }}>
              {t.hero.role}
            </span>
          </div>

          <p style={{
            fontSize: "clamp(15px, 2vw, 18px)", color: "#999", maxWidth: "600px",
            margin: "0 auto 40px", lineHeight: 1.8, fontWeight: 300,
            opacity: heroLoaded ? 1 : 0, transform: heroLoaded ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s cubic-bezier(.22,1,.36,1) 1s",
          }}>
            {t.hero.subtitle}
          </p>

          <div style={{
            display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap",
            opacity: heroLoaded ? 1 : 0, transform: heroLoaded ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s cubic-bezier(.22,1,.36,1) 1.2s",
          }}>
            <button className="hero-cta" onClick={() => scrollTo("experience")}>
              {t.hero.cta} <span style={{ fontSize: "18px" }}>↓</span>
            </button>
            <a className="hero-cta-outline" href={process.env.PUBLIC_URL + "/cv.pdf"} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
              {t.hero.download} <span style={{ fontSize: "16px" }}>📄</span>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: "absolute", bottom: "40px", left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: "8px",
          opacity: heroLoaded ? 0.5 : 0, transition: "opacity 1s ease 1.5s",
        }}>
          <div style={{
            width: "24px", height: "40px", borderRadius: "12px",
            border: "2px solid rgba(212,175,55,0.3)", position: "relative",
          }}>
            <div style={{
              width: "4px", height: "8px", borderRadius: "2px", background: "#d4af37",
              position: "absolute", left: "50%", top: "8px", transform: "translateX(-50%)",
              animation: "float 2s ease-in-out infinite",
            }} />
          </div>
        </div>
      </section>

      {/* ─── About Section ─── */}
      <section id="about" ref={aboutRef} style={{
        padding: "100px 40px", maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 2,
      }}>
        <div style={{
          opacity: aboutInView ? 1 : 0, transform: aboutInView ? "translateY(0)" : "translateY(40px)",
          transition: "all 0.8s cubic-bezier(.22,1,.36,1)",
        }}>
          <h2 className="section-title" style={{ color: "#e8e0d0" }}>{t.about.title}</h2>
          <div style={{ marginTop: "40px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
            <div>
              <p style={{ fontSize: "16px", lineHeight: 1.9, color: "#b0a890", marginBottom: "20px" }}>{t.about.p1}</p>
              <p style={{ fontSize: "16px", lineHeight: 1.9, color: "#b0a890", marginBottom: "20px" }}>{t.about.p2}</p>
              <p style={{ fontSize: "16px", lineHeight: 1.9, color: "#b0a890" }}>{t.about.p3}</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", alignContent: "start" }}>
              {[
                { num: "3+", label: lang === "en" ? "Years Experience" : "Ans d'expérience" },
                { num: "3", label: lang === "en" ? "Major Projects" : "Projets majeurs" },
                { num: "900x", label: lang === "en" ? "Performance Boost" : "Gain de performance" },
                { num: "2", label: lang === "en" ? "Languages" : "Langues" },
              ].map((s, i) => (
                <div key={i} className="stat-card" style={{
                  opacity: aboutInView ? 1 : 0, transform: aboutInView ? "translateY(0)" : "translateY(20px)",
                  transition: `all 0.6s cubic-bezier(.22,1,.36,1) ${0.3 + i * 0.1}s`,
                }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "32px", fontWeight: 900, color: "#d4af37", marginBottom: "6px" }}>{s.num}</div>
                  <div style={{ fontSize: "12px", color: "#888", fontFamily: "'JetBrains Mono', monospace", textTransform: "uppercase", letterSpacing: "1px" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Skills Section ─── */}
      <section id="skills" ref={skillsRef} style={{
        padding: "100px 40px", position: "relative", zIndex: 2,
        background: "linear-gradient(180deg, transparent, rgba(212,175,55,0.02), transparent)",
      }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{
            opacity: skillsInView ? 1 : 0, transform: skillsInView ? "translateY(0)" : "translateY(40px)",
            transition: "all 0.8s cubic-bezier(.22,1,.36,1)",
          }}>
            <h2 className="section-title" style={{ color: "#e8e0d0" }}>{t.skills.title}</h2>
          </div>
          <div style={{ marginTop: "40px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "32px" }}>
            {Object.entries(skillsData).map(([cat, skills], ci) => (
              <div key={cat} style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.03), rgba(212,175,55,0.03))",
                border: "1px solid rgba(212,175,55,0.08)", borderRadius: "20px", padding: "28px",
                opacity: skillsInView ? 1 : 0, transform: skillsInView ? "translateY(0)" : "translateY(30px)",
                transition: `all 0.7s cubic-bezier(.22,1,.36,1) ${ci * 0.15}s`,
              }}>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif", fontSize: "18px", color: "#d4af37",
                  marginBottom: "20px", fontWeight: 700,
                }}>
                  {t.skills.categories[cat]}
                </h3>
                {skills.map((s, i) => (
                  <SkillBar key={s.name} {...s} delay={ci * 0.15 + i * 0.08} inView={skillsInView} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Experience Section ─── */}
      <section id="experience" ref={expRef} style={{
        padding: "100px 40px", maxWidth: "900px", margin: "0 auto", position: "relative", zIndex: 2,
      }}>
        <div style={{
          opacity: expInView ? 1 : 0, transform: expInView ? "translateY(0)" : "translateY(40px)",
          transition: "all 0.8s cubic-bezier(.22,1,.36,1)",
        }}>
          <h2 className="section-title" style={{ color: "#e8e0d0" }}>{t.experience.title}</h2>
        </div>
        <div style={{ marginTop: "40px" }}>
          {t.experience.jobs.map((job, i) => (
            <TimelineCard key={i} job={job} index={i} inView={expInView} />
          ))}
        </div>
      </section>

      {/* ─── Education Section ─── */}
      <section id="education" ref={eduRef} style={{
        padding: "100px 40px", position: "relative", zIndex: 2,
        background: "linear-gradient(180deg, transparent, rgba(212,175,55,0.02), transparent)",
      }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{
            opacity: eduInView ? 1 : 0, transform: eduInView ? "translateY(0)" : "translateY(40px)",
            transition: "all 0.8s cubic-bezier(.22,1,.36,1)",
          }}>
            <h2 className="section-title" style={{ color: "#e8e0d0" }}>{t.education.title}</h2>
          </div>
          <div style={{ marginTop: "40px", display: "grid", gap: "24px" }}>
            {t.education.degrees.map((d, i) => (
              <div key={i} style={{
                display: "flex", gap: "28px", alignItems: "flex-start",
                background: "linear-gradient(135deg, rgba(212,175,55,0.06), rgba(255,255,255,0.02))",
                border: "1px solid rgba(212,175,55,0.1)", borderRadius: "16px", padding: "32px",
                opacity: eduInView ? 1 : 0, transform: eduInView ? "translateX(0)" : "translateX(-30px)",
                transition: `all 0.7s cubic-bezier(.22,1,.36,1) ${i * 0.2}s`,
              }}>
                <div style={{
                  width: "56px", height: "56px", borderRadius: "16px", flexShrink: 0,
                  background: "linear-gradient(135deg, #d4af37, #b8941f)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "24px", boxShadow: "0 4px 20px rgba(212,175,55,0.3)",
                }}>
                  🎓
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: 700, color: "#e8e0d0", marginBottom: "4px" }}>{d.degree}</h3>
                  <p style={{ fontSize: "14px", color: "#d4af37", fontWeight: 600, marginBottom: "4px" }}>{d.school}</p>
                  <p style={{ fontSize: "13px", color: "#888", fontFamily: "'JetBrains Mono', monospace", marginBottom: "8px" }}>{d.period}</p>
                  <p style={{ fontSize: "14px", color: "#b0a890" }}>{d.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Contact Section ─── */}
      <section id="contact" ref={contactRef} style={{
        padding: "100px 40px 60px", maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 2,
      }}>
        <div style={{
          opacity: contactInView ? 1 : 0, transform: contactInView ? "translateY(0)" : "translateY(40px)",
          transition: "all 0.8s cubic-bezier(.22,1,.36,1)",
        }}>
          <h2 className="section-title" style={{ color: "#e8e0d0" }}>{t.contact.title}</h2>
          <p style={{ color: "#888", fontSize: "16px", marginTop: "24px", marginBottom: "48px" }}>{t.contact.subtitle}</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "48px" }}>
          {/* Contact Info */}
          <div style={{
            opacity: contactInView ? 1 : 0, transform: contactInView ? "translateX(0)" : "translateX(-30px)",
            transition: "all 0.7s cubic-bezier(.22,1,.36,1) 0.2s",
          }}>
            {[
              { icon: "✉️", label: t.contact.email, value: "ramanampamonjysandratra@gmail.com", href: "mailto:ramanampamonjysandratra@gmail.com" },
              { icon: "📞", label: t.contact.phone, value: "+261 34 18 258 32", href: "tel:+261341825832" },
              { icon: "📍", label: t.contact.location, value: "Antananarivo 101, Madagascar", href: null },
              { icon: "🔗", label: t.contact.linkedin, value: "linkedin.com/in/rsandratra", href: "https://linkedin.com/in/rsandratra" },
            ].map((c, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "center", gap: "16px", padding: "16px 0",
                borderBottom: "1px solid rgba(255,255,255,0.04)",
              }}>
                <div style={{
                  width: "44px", height: "44px", borderRadius: "12px",
                  background: "rgba(212,175,55,0.1)", display: "flex",
                  alignItems: "center", justifyContent: "center", fontSize: "18px", flexShrink: 0,
                }}>
                  {c.icon}
                </div>
                <div>
                  <div style={{ fontSize: "11px", color: "#666", fontFamily: "'JetBrains Mono', monospace", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "2px" }}>{c.label}</div>
                  {c.href ? (
                    <a href={c.href} target="_blank" rel="noopener noreferrer" style={{ fontSize: "14px", color: "#d4af37", textDecoration: "none", fontWeight: 500, wordBreak: "break-all" }}>
                      {c.value}
                    </a>
                  ) : (
                    <span style={{ fontSize: "14px", color: "#c0b89a", fontWeight: 500 }}>{c.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div style={{
            background: "linear-gradient(135deg, rgba(212,175,55,0.06), rgba(255,255,255,0.02))",
            border: "1px solid rgba(212,175,55,0.1)", borderRadius: "20px", padding: "32px",
            opacity: contactInView ? 1 : 0, transform: contactInView ? "translateX(0)" : "translateX(30px)",
            transition: "all 0.7s cubic-bezier(.22,1,.36,1) 0.3s",
          }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <input className="contact-input" placeholder={t.contact.namePlaceholder} />
              <input className="contact-input" type="email" placeholder={t.contact.emailPlaceholder} />
              <textarea className="contact-input" rows={5} placeholder={t.contact.messagePlaceholder} style={{ resize: "vertical" }} />
              <button className="contact-submit">{t.contact.send} →</button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer style={{
        padding: "40px", textAlign: "center", borderTop: "1px solid rgba(212,175,55,0.08)",
        position: "relative", zIndex: 2,
      }}>
        <div style={{
          fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: 700,
          color: "#d4af37", marginBottom: "12px",
        }}>
          R.R
        </div>
        <p style={{ fontSize: "13px", color: "#666", fontFamily: "'JetBrains Mono', monospace" }}>
          {t.footer} © {new Date().getFullYear()}
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "16px", marginTop: "16px" }}>
          {["LinkedIn", "GitHub", "Email"].map((s) => (
            <a key={s} href={s === "Email" ? "mailto:ramanampamonjysandratra@gmail.com" : s === "LinkedIn" ? "https://linkedin.com/in/rsandratra" : "#"}
              target="_blank" rel="noopener noreferrer"
              style={{
                fontSize: "12px", color: "#888", textDecoration: "none",
                fontFamily: "'JetBrains Mono', monospace", padding: "6px 14px",
                borderRadius: "20px", border: "1px solid rgba(255,255,255,0.06)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => { e.target.style.color = "#d4af37"; e.target.style.borderColor = "rgba(212,175,55,0.3)"; }}
              onMouseLeave={(e) => { e.target.style.color = "#888"; e.target.style.borderColor = "rgba(255,255,255,0.06)"; }}
            >
              {s}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}
