# The Living Body — interactive Ayurveda book

Static Astro site. Content comes from Dijana's Google Doc, exported to two data files
that the site renders with the highlight → deep-dive → return interaction.

## Run it locally

```bash
cd site
npm install        # one time (downloads Astro)
npm run dev        # live preview at http://localhost:4321
```

## Deploy free

```bash
npm run build      # outputs static files to site/dist/
```

Connect this repo to Cloudflare Pages or Netlify (free): build command `npm run build`,
output directory `dist`. Served from a CDN — same cost (zero) at any number of readers.

## Updating content from Dijana's writing

1. In her chapters Google Doc: **File ▸ Download ▸ Microsoft Word (.docx)**.
2. Convert it into the site's data files:
   ```bash
   python ../authoring/convert-docx-to-site.py  chapters.docx  site/src/data
   ```
   This reads her highlight colors (red = Ayurveda, amber = physiology, olive = anatomy)
   and writes `content.json` + `glossary.json`, plus `_terms_needing_definitions.txt`
   listing any terms that still need a definition.
3. `npm run dev` (or rebuild) — the site reflects her latest writing.

## Colors (Dijana's legend)

| Color | Meaning | CSS variable |
|-------|---------|--------------|
| Red `#c01819` | Ayurveda (Sanskrit terms) | `--c-ayurveda` |
| Amber `#d67718` | Physiology (processes) | `--c-physiology` |
| Olive `#3e5518` | Anatomy (structures) | `--c-anatomy` |

Change these in `src/styles/book.css` if the palette ever changes.

## Files

- `src/pages/index.astro` — layout, the deep-dive drawer, the Levels-of-Organization cards.
- `src/styles/book.css` — colors, type, spacing.
- `src/data/content.json` — chapters + which words are tappable (generated).
- `src/data/glossary.json` — each term's definition (generated).

The hero ("6 stages of digestion") and the Levels-of-Organization images are placeholders
awaiting artwork; drop the Lottie / illustrations into `index.astro` when ready.
