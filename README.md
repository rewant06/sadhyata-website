# SADHYATA Group — Corporate Website

Official corporate website for **SADHYATA Private Limited**, a purpose-driven Indian conglomerate operating across infrastructure, energy, mining, finance, technology, agriculture, hospitality, and social development.

---

## Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + TypeScript |
| Build | Vite |
| Styling | Tailwind CSS + custom design tokens |
| Components | shadcn/ui (Radix UI primitives) |
| Animation | Framer Motion |
| Routing | React Router v6 |
| Data | TanStack Query |
| Testing | Vitest + Testing Library |

---

## Project Structure

```
src/
├── assets/              # Images processed by Vite (content-hashed at build)
├── components/          # Shared UI components
│   └── ui/              # shadcn/ui base components
├── hooks/               # Custom React hooks
├── lib/                 # Utilities
├── pages/               # Route-level components
│   ├── subsidiaries/    # Individual subsidiary pages (lazy-loaded)
│   ├── Leadership.tsx
│   ├── Foundation.tsx
│   ├── Investors.tsx
│   ├── Careers.tsx
│   └── Index.tsx
└── index.css            # Global styles + Tailwind directives
```

---

## Getting Started

Requires Node.js 18+.

```bash
git clone https://github.com/rewant06/sadhyata-website.git
cd sadhyata-website
npm install
npm run dev
```

Dev server runs on `http://localhost:8080`.

---

## Scripts

| Command | What it does |
|---------|-------------|
| `npm run dev` | Start dev server with HMR |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm test` | Run tests |
| `npm run lint` | Lint the codebase |

---

## Adding Images

All images should go in `src/assets/` with descriptive, lowercase, hyphenated filenames.

```
src/assets/
├── hero-bg.jpg
├── chairman-portrait.jpeg
├── ankesh-raj-executive-director.jpeg
├── kajal-chetri-hr-director.jpeg
└── sandeep-tiwari-general-counsel.jpeg
```

Vite processes these at build time — they get content-hashed filenames automatically for optimal caching. Import them directly in components:

```tsx
import portraitImg from "@/assets/ankesh-raj-executive-director.jpeg";
```

Do **not** place assets referenced in component code inside `public/`. Use `public/` only for files that need a fixed, static URL (like `robots.txt`, `sitemap.xml`, or favicon).

---

## Routing

| Path | Page |
|------|------|
| `/` | Homepage |
| `/leadership` | Leadership — Chairman & KMP |
| `/foundation` | Sadhyata Foundation |
| `/investors` | Investor Centre |
| `/careers` | Careers |
| `/businesses/:slug` | Individual subsidiary pages |

All subsidiary pages are lazy-loaded for performance.

---

## Deployment

```bash
npm run build
```

Output goes to `dist/`. Deploy that folder to any static host — Netlify, Vercel, AWS S3 + CloudFront, or similar.

No environment variables are required. This is a fully static frontend.

---

## Contributing

This is a private corporate site. Raise a PR against `main` for any changes. Discuss structural changes with the development team before starting work.