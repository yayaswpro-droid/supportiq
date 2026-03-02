# SupportIQ — Landing Page

Support client IA pour boutiques Shopify.

## Déploiement sur Vercel (5 minutes)

### Prérequis
- Un compte [GitHub](https://github.com) (gratuit)
- Un compte [Vercel](https://vercel.com) (gratuit)
- Node.js installé sur ton Mac ([télécharger ici](https://nodejs.org))

### Étapes

**1. Prépare le projet en local**

Ouvre le Terminal sur ton Mac et tape :

```bash
cd ~/Downloads/supportiq
npm install
npm run dev
```

Tu verras ton site sur http://localhost:5173 — vérifie que tout est bon.

**2. Pousse sur GitHub**

Crée un nouveau repository sur GitHub (github.com/new), nomme-le `supportiq`, puis :

```bash
cd ~/Downloads/supportiq
git init
git add .
git commit -m "Initial commit - SupportIQ landing page"
git branch -M main
git remote add origin https://github.com/TON-USERNAME/supportiq.git
git push -u origin main
```

Remplace `TON-USERNAME` par ton nom d'utilisateur GitHub.

**3. Déploie sur Vercel**

- Va sur [vercel.com](https://vercel.com) et connecte-toi avec GitHub
- Clique "Add New Project"
- Sélectionne ton repo `supportiq`
- Vercel détecte automatiquement Vite — clique "Deploy"
- En 30 secondes, ton site est live sur `supportiq.vercel.app`

**4. Domaine personnalisé (optionnel)**

- Achète un domaine sur [Namecheap](https://namecheap.com) ou [OVH](https://ovh.com) (~10€/an)
- Dans Vercel > Settings > Domains, ajoute ton domaine
- Configure les DNS comme indiqué par Vercel

### Brancher la collecte d'emails

Pour que le formulaire enregistre vraiment les emails, tu as plusieurs options :

**Option simple — Formspree (gratuit, 50 soumissions/mois)**
1. Crée un compte sur [formspree.io](https://formspree.io)
2. Crée un nouveau formulaire
3. Remplace la fonction `handleSubmit` dans `App.jsx` par :

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  if (email) {
    await fetch("https://formspree.io/f/TON-ID", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email })
    });
    setSubmitted(true);
  }
};
```

**Option pro — ConvertKit (gratuit jusqu'à 10 000 abonnés)**
1. Crée un compte sur [convertkit.com](https://convertkit.com)
2. Crée un formulaire et récupère l'ID
3. Utilise leur API pour envoyer les emails

## Structure du projet

```
supportiq/
├── index.html          # Page HTML principale
├── package.json        # Dépendances
├── vite.config.js      # Config Vite
├── public/
│   └── favicon.svg     # Icône du site
└── src/
    ├── main.jsx        # Point d'entrée React
    └── App.jsx         # Landing page SupportIQ
```
