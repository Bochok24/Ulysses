# Changelog

This log summarizes the major changes made to the project in chronological order.

## Unreleased

### Project setup / runnable app

- Converted the initial single-file JSX/Tailwind concept into a runnable web app using **Vite + React**.
- Added **Tailwind CSS** pipeline (Tailwind config + PostCSS) and kept the existing UI styling.
- Added `lucide-react` for icons and ensured the UI renders consistently.

### Content + media updates (replaced placeholders with local assets)

- Removed character image placeholder blocks while keeping the character card layout intact.
- Replaced placeholders with local images from `img/`:
  - Author portrait: `img/JamesJoycePortrait.jpg`
  - Dublin map background: `img/DublinMap.webp`
  - Censorship/Ban section book image: `img/Ulysses_Book.png`
  - Freytag diagram image: `img/FreytagPyramid.png`
  - Dual portraits / themes image: `img/duality.png`
  - Pillars header image: `img/DublinStreet.jpg`

### Layout + framing fixes (portrait vs landscape)

- Updated portrait-style image containers to use a portrait frame (`aspect-[3/4]`) and appropriate object fitting so the images don’t appear “landscape-framed.”

### GitHub Pages (blank page fix)

- Fixed GitHub Pages white/blank page by configuring Vite to build with the correct repository subpath base:
  - Set `base: '/Ulysses/'` in `vite.config.js`.
- Added GitHub Actions workflow to build and deploy `dist/` to GitHub Pages:
  - `.github/workflows/deploy.yml` builds with Node 20, runs `npm ci`, then `npm run build`, uploads and deploys.

### UX polish: Dublin map pins + tooltip/popup behavior

- Changed map pins to **red** for better visibility.
- Improved tooltip/popup behavior:
  - Desktop: still supports hover-to-show.
  - Mobile: tap/click a pin toggles the panel; tap the map background closes it.
- Prevented panels from being clipped at the map edges by:
  - Making the outer map container `overflow-visible`.
  - Keeping a clipped inner layer to preserve rounded corners on the map image.
- Added simple edge-aware placement so panels are less likely to appear off-screen:
  - Aligns left/center/right based on pin position.
  - Flips below the pin if the pin is near the top edge.

### UX polish: mobile navigation

- Optimized mobile nav so tabs **wrap** into multiple rows instead of forcing horizontal scrolling, while keeping the same pill styling.

### Validation

- Verified `npm run build` succeeds after changes and bundles local images into `dist/assets`.
