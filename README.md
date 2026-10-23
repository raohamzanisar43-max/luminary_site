# LuminaryNexus Consultants — React (Vite)

Converted from the original static HTML/CSS/Bootstrap site to a plain React app (Vite + TypeScript + React Router). Design and content are unchanged.

## Setup
```
npm install
npm run dev
```
Open the URL shown in the terminal (usually http://localhost:5173).

## Build
```
npm run build
npm run preview
```

## Structure
- `src/pages/` — Home, About, Contact, Industries, Portfolio, Services
- `src/components/Navbar.tsx`, `Footer.tsx`, `TopChrome.tsx` (preloader / scroll bar / floating CTA)
- `src/components/SiteScripts.tsx` — all interactive behavior (preloader, counters, reveal animations, FAQ accordion, portfolio filter, forms, AOS) ported from the original `main.js`
- `src/index.css` — original `style.css`, unchanged
- `public/images/` — original image assets
- Routing via `react-router-dom` (`src/App.tsx`)
