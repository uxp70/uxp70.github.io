# uxp70.github.io

The site at <https://uxp70.github.io/> — one page linking to every public project, with a short explanation of each, plus a dedicated page per project under `/p/`.

Plain HTML, CSS and a little JavaScript. No build step, no dependencies, no trackers, no network calls after load.

## Pages

```
index.html            the landing page: hero, filters, seven project cards, about
p/index.html          index of the project notes
p/<project>/index.html   one detail page per project
styles.css            design system, dark neon theme
p/project.css         shared styles for the detail pages
app.js                project filter + footer year on the landing page
favicon.svg           favicon
.nojekyll             stop Jekyll rewriting asset paths
```

Detail pages live at:

| Page | Path |
| --- | --- |
| Slipstream | `/p/slipstream/` |
| Pixel Playground | `/p/pixel-playground/` |
| Raw File Website | `/p/raw-file-website/` |
| SEUsign | `/p/seusign/` |
| ZombsClone.io | `/p/zombsclone-io/` |
| Nebula Strike | `/p/nebula-strike/` |
| iOSeverything | `/p/ios-everything/` |

The paths deliberately avoid `/slipstream/`, `/pixel-playground/` and so on: those are already served by each project's own GitHub Pages site, and a directory with the same name in this repository would collide with them. `/p/` is namespaced, so the live demos keep working.

## Run locally

```bash
python3 -m http.server 3001
# open http://localhost:3001
```

The server resolves directory requests to `index.html`, so `/p/slipstream/` works exactly as it does on Pages.

## Deploy

The user site lives in this repo, named `uxp70.github.io`, and Pages serves it from the repository root on `main`. Pushing to `main` republishes; there is nothing else to run.

## Adding a project

1. Add an `<article class="card" data-cat="games|tools|ios">` to `index.html`, with an accent class (`card--pixel`, `card--raw`, …), the chips and the Play/Source/Details buttons. The featured card (Slipstream) is `.feature`.
2. Bump the counts on the filter buttons, in the `filter-status` default text and in the hero `stats` list.
3. Add `p/<slug>/index.html` using any existing detail page as the template: set `proj--<accent>` on `<body>`, the `<title>`, description and hero, then update the prev/next links in the pages either side.
4. Add the new page to the list in `p/index.html`.

Live links point at absolute `https://uxp70.github.io/<repo>/` URLs so they keep working from a local server too, while the internal links (`/`, `/p/…`, `/styles.css`) resolve at the domain root.
