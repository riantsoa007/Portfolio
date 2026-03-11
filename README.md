# 🚀 Portfolio — Riantsoa Ramanampamonjy

Portfolio bilingue (EN/FR) — Software Engineer

## 📋 Déploiement sur GitHub Pages (étape par étape)

### Prérequis
- **Node.js** installé (v16+) → [nodejs.org](https://nodejs.org)
- **Git** installé → [git-scm.com](https://git-scm.com)
- Un compte **GitHub** → [github.com](https://github.com)

---

### Étape 1 — Créer le repo GitHub

1. Va sur [github.com/new](https://github.com/new)
2. Nom du repo : `portfolio-riantsoa` (ou ce que tu veux)
3. Laisse-le **Public**
4. Ne coche rien (pas de README, pas de .gitignore)
5. Clique **Create repository**

---

### Étape 2 — Configurer le projet

Ouvre le fichier `package.json` et remplace cette ligne :

```json
"homepage": "https://USERNAME.github.io/portfolio-riantsoa",
```

Par ton vrai nom d'utilisateur GitHub. Exemple :

```json
"homepage": "https://rsandratra.github.io/portfolio-riantsoa",
```

---

### Étape 3 — Installer les dépendances

Ouvre un terminal dans le dossier du projet et exécute :

```bash
cd portfolio-riantsoa
npm install
```

---

### Étape 4 — Tester en local

```bash
npm start
```

Ton portfolio s'ouvre sur `http://localhost:3000` 🎉

---

### Étape 5 — Déployer sur GitHub Pages

```bash
git init
git remote add origin https://github.com/TON_USERNAME/portfolio-riantsoa.git
git add .
git commit -m "Initial commit - Portfolio"
git branch -M main
git push -u origin main
npm run deploy
```

La commande `npm run deploy` va :
1. Builder le projet (`npm run build`)
2. Pousser le build sur la branche `gh-pages`
3. GitHub Pages le rend disponible automatiquement

---

### Étape 6 — Activer GitHub Pages (si pas fait automatiquement)

1. Va dans **Settings** de ton repo GitHub
2. Section **Pages** (menu de gauche)
3. Source : **Deploy from a branch**
4. Branch : `gh-pages` / `/ (root)`
5. Clique **Save**

---

### ✅ Ton portfolio est en ligne !

URL : `https://TON_USERNAME.github.io/portfolio-riantsoa`

---

## 🔄 Mettre à jour le portfolio

Après modification des fichiers :

```bash
git add .
git commit -m "Update portfolio"
git push origin main
npm run deploy
```

---

## 🌐 Domaine personnalisé (optionnel)

Si tu veux un domaine comme `riantsoa.dev` :

1. Achète un domaine (Namecheap, Google Domains, etc.)
2. Crée un fichier `public/CNAME` avec ton domaine dedans
3. Configure les DNS de ton domaine pour pointer vers GitHub
4. Redéploie avec `npm run deploy`

---

## 📁 Structure du projet

```
portfolio-riantsoa/
├── public/
│   ├── index.html          ← Page HTML de base
│   └── cv.pdf              ← Ton CV téléchargeable
├── src/
│   ├── index.js            ← Point d'entrée React
│   └── Portfolio.jsx       ← Le composant portfolio complet
├── package.json            ← Dépendances et scripts
└── README.md               ← Ce fichier
```
