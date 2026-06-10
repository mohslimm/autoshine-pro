# AutoShine Pro — Detailing Premium

Application Web moderne, performante et esthétiquement pensée autour du concept de "Quiet Luxury" et "Antigravity", dédiée aux services de détailing automobile pour professionnels (concessionnaires).

## 🚀 Technologies Principales

- **Framework :** React 19 + Vite
- **Routage :** React Router DOM v6
- **Styling :** Tailwind CSS v4 (PostCSS)
- **Typographie :** Cormorant Garamond (Display) & Outfit (Body)
- **Animations :** Framer Motion & GSAP
- **Scroll :** Lenis (Smooth Scroll)
- **Icônes :** Lucide React
- **Gestion d'État :** Zustand
- **Formulaire :** React Hook Form + Zod (Validation) + Web3Forms (Envoi d'e-mails)

## 📦 Installation et Lancement

1. **Cloner le projet** (si versionné) ou extraire les sources.
2. **Installer les dépendances :**
   ```bash
   npm install
   ```
3. **Lancer le serveur de développement :**
   ```bash
   npm run dev
   ```
   *L'application sera accessible sur `http://localhost:5173`.*

## 🏗️ Structure du Projet

```text
frontend/
├── public/                # Assets statiques (logo, images, sitemap.xml)
├── src/
│   ├── components/        # Composants réutilisables
│   │   └── modules/       # Sections principales (Hero, Navbar, Contact...)
│   ├── layouts/           # Layouts du routeur (RootLayout)
│   ├── lib/               # Utilitaires (constants.ts, variants.ts)
│   ├── pages/             # Pages (Home, Legal, NotFound)
│   ├── App.tsx            # Point d'entrée de l'application (Routeur)
│   ├── index.css          # Styles globaux et variables Tailwind
│   └── main.tsx           # Montage React
├── tailwind.config.js     # Non requis avec Tailwind v4 (géré via CSS)
└── vite.config.ts         # Configuration Vite et alias path
```

## 📧 Configuration du Formulaire de Contact

Le formulaire de contact utilise [Web3Forms](https://web3forms.com/) pour envoyer directement les e-mails sans backend.
Pour recevoir les messages sur `autoshinepro.contact@gmail.com` :
1. Allez sur Web3Forms et générez une Access Key.
2. Ouvrez `src/components/modules/Contact.tsx`.
3. Remplacez `"YOUR_WEB3FORMS_ACCESS_KEY"` par votre véritable clé à la ligne 41.

## 🎨 Design System

- **Couleurs Principales :** Base `Rich Black` (`#0A0A0A`) et accents `Cyan/Bleu` (`#35B0E2`).
- **Animations :** Utilisent des courbes de Bézier spécifiques pour un rendu "fluide et suspendu" (Fade-in-up, Spring).

## 🛠️ Commandes Utiles

- `npm run build` : Compile le projet pour la production dans le dossier `dist/`.
- `npm run preview` : Lance un serveur local pour prévisualiser la version de production.
- `npm run lint` : Vérifie la syntaxe et les erreurs avec ESLint.
