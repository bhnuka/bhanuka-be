# Bhanuka Bandara Ekanayake Resume Site

Static single-page resume/portfolio website built with HTML, CSS, and vanilla JavaScript. Designed as a clean, animated resume with a downloadable PDF and contact links.

## Features
- Responsive hero + card layout with ambient background orbs and grid.
- Scroll reveal animations and subtle 3D tilt (respects `prefers-reduced-motion`).
- Light/dark color schemes via `prefers-color-scheme`.
- Downloadable resume PDF and quick contact links.

## Project structure
- `index.html` content and section structure.
- `styles.css` theming, layout, animations.
- `script.js` scroll reveal + tilt effects.
- `assets/` icons and imagery.
- `resume/` PDF resume download.

## Run locally
Open `index.html` in a browser, or use a simple local server:

```bash
# Python 3
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Customize
- Update text and sections in `index.html`.
- Adjust colors, typography, or spacing in `styles.css`.
- Tweak animations in `script.js`.
- Replace the PDF in `resume/`.

## Deploy
This site works well on GitHub Pages. Set the Pages source to the repository root (or `/docs` if you relocate the files).
