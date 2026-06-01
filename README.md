# Studio Palomba Consulenza Lavoro

A static duplicate of the Studio Palomba Consulenza Lavoro website
(https://studio-palomba-consulenza-lavoro-63b8f381.base44.app), rebuilt as a
Next.js 16 SPA with static export.

## Tech stack

- **Next.js 16** (App Router) with `output: 'export'` -> pure static HTML
- **React 19**
- **Tailwind CSS 3** (custom navy `#1e3a5f` + gold `#c9a227` palette)
- **Framer Motion** (scroll reveals, mobile menu, active-nav animation)
- **Lucide React** (icons)
- **PAER Consulting / Studio Palomba** brand assets downloaded from the
  original site and served from `/public/images/`.

## Pages

| Route        | File                          | Description                                                |
| ------------ | ----------------------------- | ---------------------------------------------------------- |
| `/`          | `src/app/page.jsx`            | Hero, client logo carousel, Chi Siamo teaser, Why Us, services preview, final CTA |
| `/ChiSiamo`  | `src/app/ChiSiamo/page.jsx`   | Story, timeline, method, values                            |
| `/Servizi`   | `src/app/Servizi/page.jsx`    | 6 detailed services with feature bullets                   |
| `/Team`      | `src/app/Team/page.jsx`       | 5 team-member cards (real photos from original)            |
| `/Esperienza`| `src/app/Esperienza/page.jsx` | Stats, sectors, success cases                              |
| `/Contatti`  | `src/app/Contatti/page.jsx`   | Contact cards, WhatsApp/Call CTAs, Google Maps, contact form |
| `404`        | `src/app/not-found.jsx`       | Fallback page                                              |

## Local development

Requires Node.js 22+ (see `.nvmrc`).

```bash
npm install
npm run dev        # http://localhost:3000
```

## Production build

```bash
npm run build      # outputs static site to ./out
```

`out/` is a fully self-contained static site. Open `out/index.html` directly
or serve it with any static file server.

## Deploy to Vercel

The project is already configured for Vercel (see `vercel.json` and
`next.config.mjs`). Two options:

### Option A: GitHub -> Vercel (recommended)

1. Push the repo to GitHub (see below).
2. Go to https://vercel.com/new and import the repository.
3. Vercel auto-detects Next.js, leaves the build command as `next build`,
   and deploys. No environment variables are needed.
4. Every push to `main` triggers a new production deploy.

### Option B: Vercel CLI

```bash
npm i -g vercel
vercel login
vercel              # preview deployment
vercel --prod       # production deployment
```

## Git / GitHub

This project lives in its own git repo (initialise once):

```bash
cd "Studio palomba"
git init
git add .
git commit -m "Initial commit: Studio Palomba duplicate"
git branch -M main
git remote add origin https://github.com/solankiharsh0217-design/Studio-Palomba.git
git push -u origin main
```

## Project structure

```
.
├── public/
│   ├── favicon.png
│   ├── manifest.json
│   └── images/
│       ├── logo.png, logo2.png, paer-logo.png
│       ├── team/  (5 JPGs)
│       └── clients/ (27 PNGs)
├── src/
│   ├── app/
│   │   ├── layout.jsx
│   │   ├── page.jsx
│   │   ├── globals.css
│   │   ├── not-found.jsx
│   │   ├── ChiSiamo/page.jsx
│   │   ├── Servizi/page.jsx
│   │   ├── Team/page.jsx
│   │   ├── Esperienza/page.jsx
│   │   └── Contatti/page.jsx
│   ├── components/   (Header, Footer, Hero, ClientLogos, FadeIn, WhatsAppButton, ContactForm)
│   └── lib/data.js   (centralised content: team, services, stats, sectors, ...)
├── next.config.mjs
├── vercel.json
├── tailwind.config.js
├── postcss.config.mjs
├── jsconfig.json
└── package.json
```

## Contact info baked in (from original site)

- Mobile / WhatsApp: **348 3112241**
- Monza office: **039 9005070**
- Email: **segreteria@paerconsulting.it**
- Roma: Via Umbria n. 7, 00187
- Monza: Via Marsala n. 3, 20900
- Hours: Lun-Ven 9:00-18:00
- Legal: PAER Consulting Srl, P.IVA 07934031217
