# uxp70.github.io

The landing page at <https://uxp70.github.io/> — one page linking to every public project, with a short explanation of what each one is and how it works.

Plain HTML, CSS and a little JavaScript. No build step, no dependencies, no trackers, no network calls after load.

## Files

```
index.html      the whole site
styles.css      design system, dark neon theme
app.js          project filter + footer year
favicon.svg     favicon
.nojekyll       stop Jekyll rewriting asset paths
```

## Run locally

```bash
python3 -m http.server 3001
# open http://localhost:3001
```

## Publish at uxp70.github.io

The user site lives in a repo named exactly `uxp70.github.io`, and Pages serves it from the repository root.

1. Create a **public** repo called `uxp70.github.io` under `uxp70`.
2. Push these files to `main`, with `index.html` at the repo root.
3. Settings → Pages → Source: *Deploy from a branch*, branch `main`, folder `/ (root)`.
4. The site goes live at <https://uxp70.github.io/> in a minute or two. Pushing to `main` republishes.

## Updating it

Each project is an `<article>` with `data-cat="games|tools|ios"`. The featured card (Slipstream) is `.feature`; the rest are `.card`. To add a project, copy a card, bump the number, set the accent class and add it to the filter counts in `index.html` (the buttons and the `stats` list).

Live links point at absolute `https://uxp70.github.io/<repo>/` URLs so they keep working from a local server too.
