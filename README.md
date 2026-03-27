# ULYSSES — Interactive Literature Report

A single-page web experience for James Joyce’s **Ulysses**: timeline/author context, character cast, plot via Freytag’s model, themes, an interactive Dublin (1904) map, key pillars, and censorship/ban notes.

## Tech

- React + Vite
- Tailwind CSS
- `lucide-react` icons
- GitHub Pages deployment via GitHub Actions

## Project structure (high level)

- `src/UlyssesApp.jsx` — main UI + all sections
- `src/main.jsx` — React entry
- `src/index.css` — Tailwind directives + small custom animation
- `img/` — local images used by the app
- `vite.config.js` — includes `base: '/Ulysses/'` for GitHub Pages
- `.github/workflows/deploy.yml` — builds and deploys `dist/` to Pages

## Run locally

Install dependencies:

```bash
npm install
```

Start dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## GitHub Pages deployment

This repo is configured for GitHub Pages using:

- `vite.config.js` base path set to `'/Ulysses/'` (repo subpath)
- GitHub Actions workflow at `.github/workflows/deploy.yml` that:
  - runs `npm ci`
  - runs `npm run build`
  - deploys `dist/`

Notes:

- If you rename the repo, update the Vite `base` value to match the new repository name.
- Make sure GitHub Pages is set to **GitHub Actions** as the source in repository settings.

## Map interaction

- Desktop: hover a pin to see details.
- Mobile: tap a pin to toggle its info panel; tap anywhere on the map background to close.

## Scripts

- `npm run dev` — start dev server
- `npm run build` — build to `dist/`
- `npm run preview` — preview `dist/` locally
