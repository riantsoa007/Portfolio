import React, { useEffect, useState } from 'react';
import { content } from './content';
import './Portfolio.css';

const EMAIL = 'ramanampamonjysandratra@gmail.com';
const THEMES = ['ravinala', 'navy', 'plum', 'graphite'];
const LINKEDIN = 'https://www.linkedin.com/in/rsandratra';
const Arrow = ({ diagonal = false }) => <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d={diagonal ? 'M6 18 18 6M6 6h12v12' : 'M4 12h15m-6-6 6 6-6 6'} /></svg>;
const SpecialtyIcon = ({ index }) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{[
  <path d="m8 7-5 5 5 5M16 7l5 5-5 5M13.5 4l-3 16" />,
  <><rect x="6.5" y="2.5" width="11" height="19" rx="2.5" /><path d="M10.5 18.5h3" /></>,
  <path d="M12 3c.6 4.6 2.4 6.4 7 7-4.6.6-6.4 2.4-7 7-.6-4.6-2.4-6.4-7-7 4.6-.6 6.4-2.4 7-7ZM19 15c.3 2 1 2.7 3 3-2 .3-2.7 1-3 3-.3-2-1-2.7-3-3 2-.3 2.7-1 3-3Z" />,
][index]}</svg>;
const Tags =({ items }) => <div className="tags">{items.map(item => <span key={item}>{item}</span>)}</div>;
const Heading = ({ label, children }) => <div className="section-heading"><p className="eyebrow">{label}</p><h2>{children}</h2></div>;

const ProjectPreview = ({ index, fr }) => <div className={`project-preview preview-${index}`} aria-hidden="true">
  <div className="preview-caption"><span>{['EVAL IA', 'FAMAS', 'KILL THE TAPE'][index]}</span><span>{fr ? 'Concept d’interface' : 'Interface concept'}</span></div>
  <div className="mock-window"><div className="mock-toolbar"><span>● ● ●</span><span>{['eval / overview', 'famas / workspace', 'catalogue / collection'][index]}</span></div><div className="mock-layout"><div className="mock-sidebar"><b>{['e.', 'F.', 'k.'][index]}</b><i/><i/><i/><i/></div><div className="mock-content"><span className="mock-eyebrow">{['EVAL IA', 'FAMAS', 'KILL THE TAPE'][index]}</span><strong>{fr ? ['Analyse des appels', 'Vue d’ensemble', 'Le catalogue'][index] : ['Call analysis', 'Overview', 'The catalogue'][index]}</strong>{index === 0 ? <><div className="audio-wave">{Array.from({length:25},(_,j)=><i key={j} style={{height:`${15+(j*29)%75}%`}}/>)}</div><div className="mock-lines"><i/><i/><i/></div></> : index === 1 ? <><div className="mock-tiles"><i/><i/><i/></div><div className="mock-table">{[0,1,2].map(n=><div key={n}><i/><i/><i/></div>)}</div></> : <div className="mock-records">{[0,1,2].map(n=><div key={n}><span/><i/></div>)}</div>}</div></div></div>
</div>;

export default function Portfolio() {
  const [lang, setLang] = useState('fr');
  const [menu, setMenu] = useState(false);
  const [theme, setTheme] = useState(() => {
    try { const saved = localStorage.getItem('portfolio-theme'); return THEMES.includes(saved) ? saved : 'ravinala'; }
    catch { return 'ravinala'; }
  });
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    const background = getComputedStyle(document.documentElement).getPropertyValue('--paper').trim();
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', background);
    try { localStorage.setItem('portfolio-theme', theme); } catch { /* Storage may be disabled. */ }
  }, [theme]);
  const t = content[lang];
  const fr = lang === 'fr';
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);
  return <>
    <a className="skip-link" href="#main">{fr ? 'Aller au contenu' : 'Skip to content'}</a>
    <header className="header"><div className="container navigation">
      <a href="#top" className="brand" aria-label="Riantsoa — accueil"><span>Riantsoa<span className="signature-dot">.</span></span></a>
      <button className="menu-toggle" aria-expanded={menu} aria-controls="navigation" onClick={() => setMenu(!menu)}>{menu ? (fr ? 'Fermer' : 'Close') : 'Menu'} <span>{menu ? '−' : '+'}</span></button>
      <nav id="navigation" className={menu ? 'nav open' : 'nav'} aria-label={fr ? 'Navigation principale' : 'Main navigation'}>
        {['work', 'experience', 'skills'].map(key => <a href={`#${key}`} key={key} onClick={() => setMenu(false)}>{t.nav[key]}</a>)}
        <label className="theme-picker"><span className="theme-swatch" aria-hidden="true"/><span className="sr-only">{fr ? 'Palette de couleurs' : 'Colour palette'}</span><select value={theme} onChange={e => setTheme(e.target.value)}>{THEMES.map((value, i) => <option key={value} value={value}>{(fr ? ['Ravinala', 'Bleu nuit', 'Prune', 'Graphite'] : ['Ravinala', 'Midnight', 'Plum', 'Graphite'])[i]}</option>)}</select></label>
        <div className="languages" aria-label="Langue / Language">{['fr','en'].map(code => <button key={code} aria-pressed={lang === code} onClick={() => setLang(code)}>{code.toUpperCase()}</button>)}</div>
        <a className="nav-contact" href="#contact" onClick={() => setMenu(false)}>{fr ? 'Contact' : 'Contact'} <Arrow diagonal /></a>
      </nav>
    </div></header>
    <main id="main">
      <section id="top" className="container hero">
        <div className="hero-copy"><p className="eyebrow">{fr ? 'Développeur full-stack & IA' : 'Full-stack & AI developer'}</p><h1>{fr ? 'Bonjour,' : 'Hello,'}<br />{fr ? 'je suis ' : 'I’m '}<span>Riantsoa.</span></h1><a className="hero-email" href={`mailto:${EMAIL}`}>{EMAIL} <Arrow diagonal /></a><div className="hero-experience"><strong>5<span>+</span></strong><span>{fr ? <>années<br />d’expérience</> : <>years of<br />experience</>}</span></div></div>
        <div className="hero-art portrait-art"><span className="portrait-brush" aria-hidden="true" style={{ "--brush": `url(${process.env.PUBLIC_URL}/brush-stroke.png)` }} /><img className="portrait-cutout" src={`${process.env.PUBLIC_URL}/riantsoa-cutout.png`} alt="Riantsoa Ramanampamonjy" width="1170" height="1344" fetchPriority="high" /></div>
        <aside className="hero-aside"><p> {fr ? <>Je développe des applications web et mobiles.<br /><br />De l’interface aux données, j’aime comprendre comment tout fonctionne.</> : <>I build web and mobile applications.<br /><br />From interfaces to data, I like understanding how everything works.</>}</p><a className="cv-link" href={`${process.env.PUBLIC_URL}/cv.pdf`} target="_blank" rel="noreferrer">{fr ? 'Mon CV' : 'My résumé'} <Arrow diagonal /></a><div className="location-stamp"><span>RR</span><p>Antananarivo<br /><strong>Madagascar</strong></p></div></aside>
      </section>

      <section className="about-section"><div className="container about-layout"><div className="specialties">{(fr ? ['Applications web', 'Applications mobiles', 'IA appliquée'] : ['Web applications', 'Mobile applications', 'Applied AI']).map((label,i)=><a href="#work" key={label}><span className={`specialty-icon icon-${i}`} aria-hidden="true"><SpecialtyIcon index={i} /></span><span><strong>{label}</strong><small>{['Symfony · React · Next.js', 'React Native · iOS · Android', 'Python · Whisper · Qwen'][i]}</small></span><Arrow diagonal /></a>)}</div><div className="about-copy"><p className="eyebrow">{fr ? 'Ce que je fais' : 'What I do'}</p><h2>{fr ? <>Du premier écran<br />à la mise en ligne.</> : <>From the first screen<br />to production.</>}</h2><p>{fr ? 'Chez Hubera et Etech, j’ai travaillé sur des logiciels de gestion, des applications mobiles et des outils d’analyse d’appels. Mon travail : développer, améliorer les performances et accompagner la mise en production.' : 'At Hubera and Etech, I’ve worked on business software, mobile applications and call analysis tools. My work covers development, performance improvements and production releases.'}</p><div className="about-facts"><div><strong>1 000+</strong><span>{fr ? 'appels analysés par IA' : 'calls analysed with AI'}</span></div><div><strong>50+</strong><span>{fr ? 'utilisateurs internes de FAMAS' : 'internal FAMAS users'}</span></div></div></div></div></section>

      <section id="experience" className="experience-section"><div className="container experience-layout">
        <div className="experience-intro"><Heading number="02" label={t.experience.label}>{fr ? 'Mon parcours.' : 'My experience.'}</Heading><p>{t.experience.title}</p><a className="text-link" href={`${process.env.PUBLIC_URL}/cv.pdf`} target="_blank" rel="noreferrer">{fr ? 'Voir le CV complet' : 'View full résumé'} <Arrow diagonal /></a></div>
        <div className="timeline">{t.experience.jobs.map((job, i) => <details key={job.role} className="job" open={i === 0 ? true : undefined}><summary><span className="job-date">{job.period}</span><span className="job-company">{job.company}</span><span className="job-role">{job.role}</span><span className="job-toggle" aria-hidden="true" /></summary><div className="job-details">{job.project && <p>{job.project}</p>}<ul>{job.highlights.map(h => <li key={h}>{h}</li>)}</ul><Tags items={job.stack}/></div></details>)}</div>
      </div></section>
      <section id="work" className="container section">
        <Heading number="01" label={t.work.label}>{fr ? 'Une sélection de projets.' : 'Selected work.'}</Heading>
        <div className="projects">{t.work.projects.map((p, i) => <article className={`project project-${i}`} key={p.name}>
          <ProjectPreview index={i} fr={fr} />
          <div className="project-body"><p className="project-client">{p.client}</p><h3>{p.name}</h3><p>{p.desc}</p><Tags items={p.stack} /></div><div className="project-result"><strong>{p.metric}</strong><span>{p.metricLabel}</span></div><details className="project-detail"><summary>{fr ? 'Mon intervention' : 'My contribution'}<span aria-hidden="true">+</span></summary><ul>{t.experience.jobs[[1,0,4][i]].highlights.map(h=><li key={h}>{h}</li>)}</ul></details>
        </article>)}</div>
      </section>
      <section id="skills" className="container section"><Heading number="03" label={t.skills.label}>{fr ? 'Ma boîte à outils.' : 'My toolkit.'}</Heading><div className="skills-grid">{t.skills.groups.map((g) => <div className="skill" key={g.label}><h3>{g.label}</h3><Tags items={g.items}/></div>)}</div></section>
      <section id="education" className="container education"><p className="eyebrow">{t.education.label}</p><div className="degrees">{t.education.degrees.map(d => <article key={d.degree}><span className="job-date">{d.period}</span><h3>{d.degree}</h3><p>{d.school}</p><p className="degree-detail">{d.detail}</p></article>)}</div><div className="spoken"><p className="eyebrow">{t.languages.label}</p>{t.languages.list.map(l => <div key={l.name}>{l.name}<span>{l.level}</span></div>)}</div></section>
    </main>
    <footer id="contact"><div className="container"><p className="eyebrow">{t.contact.label}</p><div className="contact-heading"><h2>{fr ? <>Parlons de votre<br />prochain projet<span className="signature-dot">.</span></> : <>Let’s talk about<br />your next project<span className="signature-dot">.</span></>}</h2><a className="contact-arrow" href={`mailto:${EMAIL}`} aria-label={fr ? 'Envoyer un e-mail' : 'Send an email'}><Arrow diagonal/></a></div><div className="contact-links"><a href={`mailto:${EMAIL}`}>{EMAIL} <Arrow diagonal/></a><a href="tel:+261341825832">+261 34 18 258 32</a><a href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn <Arrow diagonal/></a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Riantsoa Ramanampamonjy</span><span>Antananarivo, Madagascar</span><a href="#top">{t.contact.backTop}</a></div></div></footer>
  </>;
}
